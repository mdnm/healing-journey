import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Head from "next/head";
import Benefits from "../../components/Benefits";
import Hero from "../../components/Hero";
import LandingPageCTA from "../../components/LandingPageCTA";
import QuickReading from "../../components/QuickReading";
import Testimonials11 from "../../components/Testimonials11";

const LandingPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className="flex flex-col items-center gap-5 py-8">
        <Hero isLandingPage />
        <Benefits />
        <Testimonials11 />
        <LandingPageCTA />
        <section className="overflow-hidden w-full">
          <div className="p-8">
            <div className="flex flex-col items-center text-center w-full">
              <h2 className="font-bold text-3xl tracking-tight mb-1">
                Ainda na dúvida?
              </h2>

              <p className="font-medium text-lg text-base-content/80 mb-3">
                Faça uma leitura básica ou tire suas dúvidas abaixo
              </p>
            </div>
          </div>
          <QuickReading isLandingPage />
        </section>
        <LandingPageCTA />
        <FAQ isLandingPage />
      </main>
      <Footer showOnlyLegal />
    </>
  );
};

export default LandingPage;
