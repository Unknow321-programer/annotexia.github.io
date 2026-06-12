
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Process/>
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
    </>
  );
}