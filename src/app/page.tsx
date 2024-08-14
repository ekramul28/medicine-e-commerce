import HomeCom from "@/components/Home/Home";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Nav/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <HomeCom />
        <Footer />
      </div>
    </div>
  );
}
