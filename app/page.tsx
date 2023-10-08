import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { renderSchemaTags } from "../libs/seo";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isSignedIn = Boolean(session);

  return (
    <>
      {renderSchemaTags()}
      <Header isSignedIn={isSignedIn} />
      <main>
        <Hero />
        <Pricing isSignedIn={isSignedIn} />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
