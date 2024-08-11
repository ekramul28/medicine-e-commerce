import Banner from "@/components/Bannar/Bannar";
import Categories from "@/components/Categories/Categories";
import Featured from "@/components/Featured/Featured";
import HealthConcern from "@/components/HealthConcern/HealthConcern";
import OfferCategories from "@/components/OfferCategories/OfferCategories";
import Prescription from "@/components/Prescription/Prescription";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Nav/Navbar";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-4xl">
      <Navbar />
      <Banner />
      {/* <OfferCategories />
      <HealthConcern />
      <Prescription />
      <Categories />
      <Featured />
      <WhyChoose />
      <Footer /> */}
    </div>
  );
}
