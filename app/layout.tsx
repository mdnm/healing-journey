import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { Nunito_Sans } from "next/font/google";
import { ReactNode } from "react";
import GoogleAnalytics from "./GoogleAnalytics";
import "./globals.css";

const font = Nunito_Sans({ subsets: ["latin"] });

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags({
  keywords: ["Healing Journey", "routine", "habits", "self-care", "healthy"],
  canonicalUrlRelative: "/",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" data-theme={config.colors.theme} className={font.className}>
      <body>
        <GoogleAnalytics />
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
