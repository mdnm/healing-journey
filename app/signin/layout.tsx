import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { ReactNode } from "react";

export const metadata = getSEOTags({
  title: `Entrar em ${config.appName}`,
  canonicalUrlRelative: "/auth/signin",
});

export default async function LayoutPrivate({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
