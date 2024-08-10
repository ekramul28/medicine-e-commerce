import Banner from "@/components/Bannar/Bannar";
import Navbar from "@/components/Shared/Nav/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-4xl">
      <Navbar />
      <Banner />
    </div>
  );
}
