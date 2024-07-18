"use client";
import { CldImage } from "next-cloudinary";
import { ChangeEvent, useState } from "react";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Page() {
  const [image, setImage] = useState<File | undefined>();
  const [uploadedImage, setUploadedImage] = useState<string>("test-1_rvbnff");
  const [loading, setLoading] = useState<boolean>(false);

  const imageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
      console.log("setting image");
    }
  };

  const sendImageHandler = async () => {
    setLoading(true);
    console.log("Handler is running");
    console.log(image);
    if (image) {
      const formData = new FormData();
      formData.append("file", image);

      const res = await fetch("/api/upload-image", {
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: formData,
      });
      const response = await res.json();
      console.log(response);
      setUploadedImage(response.url);
      setLoading(false);
    }
  };
  return (
    <div>
      {loading && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black/75 flex items-center justify-center text-4xl z-20">
          Loading..
        </div>
      )}
      <div>
        <button onClick={sendImageHandler}>Upload</button>
        <input type="file" onChange={imageChangeHandler} />
      </div>
      <CldImage
        alt="Sample image"
        src={uploadedImage} // Use this sample image or upload your own via the Media Explorer
        width="500" // Transform the image: auto-crop to square aspect_ratio
        height="500"
        crop={{
          type: "auto",
          source: true,
        }}
      />
    </div>
  );
}
