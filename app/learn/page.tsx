import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";

export const metadata = getSEOTags({
  title: `Estude numerologia e astrologia oriental | ${config.appName}`,
  canonicalUrlRelative: "/learn",
});

const links = [
  { href: "/learn/1", label: "Número 1: O LÍDER" },
  { href: "/learn/2", label: "Número 2: O DIPLOMATA" },
  { href: "/learn/3", label: "Número 3: A CRIANÇA" },
  { href: "/learn/4", label: "Número 4: O TRABALHADOR" },
  { href: "/learn/5", label: "Número 5: O VIAJANTE" },
  { href: "/learn/6", label: "Número 6: O CASEIRO" },
  { href: "/learn/7", label: "Número 7: O SOLITÁRIO" },
  { href: "/learn/8", label: "Número 8: A PESSOA DO DINHEIRO" },
  { href: "/learn/9", label: "Número 9: O ADAPTADOR" },
  { href: "/learn/11", label: "Número 11: O MESTRE VISIONÁRIO" },
  { href: "/learn/22", label: "Número 22: O MESTRE CONSTRUTOR" },
  { href: "/learn/33", label: "Número 33: O MESTRE PROFESSOR" },
];

const Learn = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-5 pb-10">
      <p className="font-bold text-2xl my-3 text-center">Caminhos de vida</p>
      {links.map((link) => (
        <div key={link.href} className="my-2">
          <Link href={link.href}>
            <p className="text-center w-full p-2 border-b text-lg">
              {link.label}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Learn;
