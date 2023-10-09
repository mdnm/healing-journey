import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `Leitura Avançada de Numerologia e Astrologia Oriental | ${config.appName}`,
  canonicalUrlRelative: "/pricing",
});

const Products = () => {
  return (
    <>
      <Header />
      <main>
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Products;
