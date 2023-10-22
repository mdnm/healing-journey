import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";
import Testimonials11 from "../../components/Testimonials11";

export const metadata = getSEOTags({
  title: `Leitura Avançada de Numerologia e Astrologia Oriental | ${config.appName}`,
  canonicalUrlRelative: "/pricing",
});

const Products = () => {
  return (
    <>
      <Header />
      <main>
        <Testimonials11 />
        <Pricing />
        <section className="bg-base-200 overflow-hidden" id="pricing">
          <div className="py-24 px-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center w-full mb-20">
              <h2 className="font-bold text-3xl tracking-tight mb-1">
                Ainda na dúvida?
              </h2>

              <p className="font-medium text-lg text-base-content/80 mb-3">
                Faça uma leitura básica ou tire suas dúvidas abaixo
              </p>

              <Link href={"/#reading"} className="btn btn-primary">
                Leitura básica
              </Link>
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Products;
