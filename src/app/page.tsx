import Banner from "@/components/Bannar/Bannar";
import HealthConcern from "@/components/HealthConcern/HealthConcern";
import Prescription from "@/components/Prescription/Prescription";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Nav/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-4xl">
      <Navbar />
      <Banner />
      <HealthConcern />
      <Prescription />
      <Footer />
    </div>
  );
}
