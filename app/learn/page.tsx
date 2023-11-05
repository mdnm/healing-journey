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
      <h2 className="font-bold text-2xl my-3 text-center">Caminhos de vida</h2>
      {links.map((link) => (
        <div key={link.href} className="my-2">
          <Link href={link.href}>
            <p className="text-center w-full p-2 border-b text-lg">
              {link.label}
            </p>
          </Link>
        </div>
      ))}
      <h2 className="font-bold text-2xl my-3 text-center">
        Recursos externos (não afiliados)
      </h2>
      <div className="my-2">
        <p className="font-bold text-lg text-center">Perfis no X/Twitter</p>
        <ul className="flex flex-col items-center gap-2">
          <li>
            <a
              href="https://twitter.com/thequantumsnake"
              target="_blank"
              rel="noreferrer"
            >
              @thequantumsnake
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/RingMasterRa33"
              target="_blank"
              rel="noreferrer"
            >
              @RingMasterRa33
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Jaymes527"
              target="_blank"
              rel="noreferrer"
            >
              @Jaymes527
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Numerologynow"
              target="_blank"
              rel="noreferrer"
            >
              @Numerologynow
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/AmurakaHidden"
              target="_blank"
              rel="noreferrer"
            >
              @AmurakaHidden
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/sorcerylightsg"
              target="_blank"
              rel="noreferrer"
            >
              @sorcerylightsg
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/astrumerology"
              target="_blank"
              rel="noreferrer"
            >
              @astrumerology
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/DjehutySpeaks"
              target="_blank"
              rel="noreferrer"
            >
              @DjehutySpeaks
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/AgatanahiUktena"
              target="_blank"
              rel="noreferrer"
            >
              @AgatanahiUktena
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/DCnumerology"
              target="_blank"
              rel="noreferrer"
            >
              @DCnumerology
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/KnowBoddee"
              target="_blank"
              rel="noreferrer"
            >
              @KnowBoddee
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/pendulum_habit"
              target="_blank"
              rel="noreferrer"
            >
              @pendulum_habit
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/find_CC33"
              target="_blank"
              rel="noreferrer"
            >
              @find_CC33
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Astro_Boy_33"
              target="_blank"
              rel="noreferrer"
            >
              @Astro_Boy_33
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/9ive___"
              target="_blank"
              rel="noreferrer"
            >
              @9ive___
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/GematriaClub"
              target="_blank"
              rel="noreferrer"
            >
              @GematriaClub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/signsandnumbers"
              target="_blank"
              rel="noreferrer"
            >
              @signsandnumbers
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/mt23_13"
              target="_blank"
              rel="noreferrer"
            >
              @mt23_13
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ALE_TheDragon"
              target="_blank"
              rel="noreferrer"
            >
              @ALE_TheDragon
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/PIGBIBLE33"
              target="_blank"
              rel="noreferrer"
            >
              @PIGBIBLE33
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ResonatTheGreat"
              target="_blank"
              rel="noreferrer"
            >
              @ResonatTheGreat
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/CatM0G"
              target="_blank"
              rel="noreferrer"
            >
              @CatM0G
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/PrimeEnergy33"
              target="_blank"
              rel="noreferrer"
            >
              @PrimeEnergy33
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Learn;
