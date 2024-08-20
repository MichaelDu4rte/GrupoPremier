import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";
import { Features } from "@/sections/Features";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <Features />
      <Testimonials />

      <Footer />
    </>
  );
}
