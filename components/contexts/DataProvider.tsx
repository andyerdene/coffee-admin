import { Product } from "@/lib/types";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type DataContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};
const DataContext = React.createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("/api/get-products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <DataContext.Provider value={{ products, setProducts }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = (): DataContextType => {
  return React.useContext(DataContext);
};
