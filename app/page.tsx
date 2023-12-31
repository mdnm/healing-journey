import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CTA from "../components/CTA";
import QuickReading from "../components/Questionnaire";
import { renderSchemaTags } from "../libs/seo";

export default async function Home() {
  return (
    <>
      {renderSchemaTags()}
      <Header />
      <main>
        <Hero />
        <QuickReading />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
