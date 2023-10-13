import logo from "@/app/icon.png";
import config from "@/config";
import Image from "next/image";
import Link from "next/link";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const lifePaths = [
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

const Footer = () => {
  return (
    <footer className="bg-base-300 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              Tome rédeas da sua vida
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - Todos os direitos
              reservados
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/4 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {config.mailgun.supportEmail && (
                  <a
                    href={`mailto:${config.mailgun.supportEmail}`}
                    target="_blank"
                    className="link link-hover"
                    aria-label="Contate o suporte"
                  >
                    Suporte
                  </a>
                )}
                <Link href="/learn" className="link link-hover">
                  Aprenda Mais
                </Link>
                <Link href="/pricing" className="link link-hover">
                  Produtos
                </Link>
              </div>
            </div>

            <div className="lg:w-1/4 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                CAMINHOS DE VIDA
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {lifePaths.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="link link-hover text-left"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:w-1/4 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover">
                  Termos e Condições
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
