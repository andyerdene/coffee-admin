import { DataProvider } from "./contexts/DataProvider";
import { Header } from "./dashboard/Header";
import { Navbar } from "./dashboard/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      <div className="w-screen">
        <Header />
        <div className="flex ">
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </DataProvider>
  );
}
