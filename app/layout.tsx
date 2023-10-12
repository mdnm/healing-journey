import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { Nunito_Sans } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const font = Nunito_Sans({ subsets: ["latin"] });

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags({
  keywords: ["NumEros", "numerologia", "astrologia", "oráculo", "bazi"],
  canonicalUrlRelative: "/",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <script
            defer
            data-domain={config.domainName.replace("www.", "")}
            src="https://plausible.io/js/script.tagged-events.js"
          ></script>
        </head>
      )}
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
