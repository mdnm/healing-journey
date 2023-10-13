import Footer from "@/components/Footer";
import Header from "@/components/Header";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { ReactNode } from "react";

export const metadata = getSEOTags({
  title: `Estude numerologia e astrologia oriental | ${config.appName}`,
  canonicalUrlRelative: "/learn",
});

export default async function LayoutLearn({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
