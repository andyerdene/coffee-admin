import formidable from "formidable-serverless";
import { v2 as cloudinary } from "cloudinary";
import { NextApiRequest, NextApiResponse } from "next";

cloudinary.config({
  cloud_name: "cloudName",
  api_key: "API",
  api_secret: "Secret",
  secure: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

type Data = {
  message: string;
  url?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method " + req.method + " Not Allowed");
    return;
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err: any, fields: any, files: any) => {
    const file = files.file;
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "product",
        public_id: undefined,
      });

      res.status(200).json({
        message: "File uploaded successfully.",
        url: result.public_id,
      });
      console.log({ result });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error uploading the file." });
    }
  });
};

export default handler;
