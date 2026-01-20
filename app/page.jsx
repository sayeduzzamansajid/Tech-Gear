import HeroSection from "@/components/sections/HeroSection";
import FeaturedGadgets from "@/components/sections/FeaturedGadgets";
import Categories from "@/components/sections/Categories";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BestSellers from "@/components/sections/BestSellers";
import CustomerReviews from "@/components/sections/CustomerReviews";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <HeroSection />
      <FeaturedGadgets />
      <Categories />
      <WhyChooseUs />
      <BestSellers />
      <CustomerReviews />
      <Newsletter />
      
    </main>
  );
}
