import HeroSection from "@/components/sections/HeroSection";
import FeaturedGadgets from "@/components/sections/FeaturedGadgets";
import Categories from "@/components/sections/Categories";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CustomerReviews from "@/components/sections/CustomerReviews";
import Newsletter from "@/components/sections/Newsletter";
import HowItWorks from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <HeroSection />
      <FeaturedGadgets />
      <Categories />
      <WhyChooseUs />
      <HowItWorks/>
      <CustomerReviews />
      <Newsletter />
      
    </main>
  );
}
