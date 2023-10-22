import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickReading from "../components/QuickReading";
import Testimonials11 from "../components/Testimonials11";
import { renderSchemaTags } from "../libs/seo";

export default async function Home() {
  return (
    <>
      {renderSchemaTags()}
      <Header />
      <main>
        <Hero />
        <QuickReading />
        <Testimonials11 />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
