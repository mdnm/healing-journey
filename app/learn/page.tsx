import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";

export const metadata = getSEOTags({
  title: `Estude numerologia e astrologia oriental | ${config.appName}`,
  canonicalUrlRelative: "/learn",
});

const Learn = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Voltar
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">Numerologia</h1>
        <p className="font-bold text-xl">Número 1</p>
        <ul className="list-disc">
          <li>Masculinidade (também conhecida como &quot;o homem&quot;)</li>
          <li>Número de novos começos e força de vontade</li>
          <li>Agressivo, não irá longe na vida sendo gentil</li>
          <li>Competitivo</li>
          <li>Naturalmente com físico mais musculoso e atlético</li>
          <li>
            Mente focada, inteligência mediana (não tão inteligente comparado a
            outros números)
          </li>
          <li>Alto desejo sexual</li>
          <li>
            Gosta de lutar, debater e discutir (não deve beber, tem problemas
            com álcool)
          </li>
          <li>
            Bons líderes, mas podem também ser insensíveis - precisam trabalhar
            para equilibrar isso
          </li>
          <li>
            De todas as energias 1 (1,10,19,28,37, etc.) o 28 é o número mais
            bem-sucedido financeiramente e é o número da riqueza - Bill Gates
            nasceu no dia 28, Steve Jobs e a Apple são caminhos de vida 28, Wall
            Street foi fundada em um dia 28, etc.
          </li>
          <li>
            Pessoas com caminho de vida 19 e aquelas nascidas no dia 19 e 10
            (0=9, veja página 23) geralmente ficam muito doentes na infância,
            algumas superam. 19 = Mau Karma
          </li>
          <li>
            Os caminhos de vida 1 (exceto 28) terão que trabalhar duro sem
            atalhos para alcançar sucesso nesta vida
          </li>
          <li>
            Mulheres com caminho de vida 1 e aquelas nascidas no dia 1, 10, 19 e
            28 fazem parte da minoria das mulheres que são boas líderes
          </li>
          <li>
            Mulheres com caminho de vida 1 devem depilar e manter o corpo sem
            pelos para se tornarem mais suaves e menos repulsivas para os homens
          </li>
          <li>
            De modo geral, os 1s fazem muitos inimigos na vida, incluindo com
            outros 1s, porque são agressivos e querem ser o número 1
          </li>
          <li>
            Número da alma gêmea: 9 – Exemplo: Steve Jobs tornou-se bilionário e
            mais famoso após casar-se com Laurene Powell, um caminho de vida 9.
            Note como ele também nomeou todos os seus produtos começando com a
            letra “i” (9ª letra do alfabeto) iPhone, iPad, iPod, etc. - os
            produtos que realmente fizeram da Apple uma grande empresa.
          </li>
          <li>
            Samuel Jackson (caminho de vida 1) é casado com Latanya Richardson
            (caminho de vida 9) desde 1980.
          </li>
          <li>
            George Lucas, criador de Star Wars, tem caminho de vida 1. O
            primeiro filme de Star Wars foi lançado em 25/05/1977 = dia
            universal 9.
          </li>
          <li>
            Número amigável: 3 - Exemplos, Lebron James e Tiger Woods são ambos
            caminhos de vida 1 nascidos no dia 30 (3+0=3), e são os reis de seus
            esportes.
          </li>
          <li>
            David Letterman é um caminho de vida 1 nascido no dia 12 e Tom
            Cruise é um caminho de vida 1 nascido no dia 3.
          </li>
          <li>
            Tom Hanks, caminho de vida 1, tem um casamento longo e fiel com Rita
            Wilson, caminho de vida 3.
          </li>
          <li>Relação de amor e ódio com o número 8</li>
          <li>
            Números inimigos: 4, 6 & 11 - Exemplo: Duque de Wellington (caminho
            de vida 11) e Von Blucher da Prússia (caminho de vida 6) derrotaram
            Napoleão Bonaparte (caminho de vida 1) na Batalha de Waterloo
          </li>
          <li>
            Exemplo: Lebron James (caminho de vida 1) e seu breve técnico em
            Cleveland, David Blatt (caminho de vida 6) se odiavam e Lebron
            eventualmente conseguiu que ele fosse expulso.
          </li>
          <li>
            Outro exemplo da NBA é Kobe (caminho de vida 11) e Shaq (caminho de
            vida 1), embora a astrologia do Cavalo vs Rato (signos inimigos)
            tenha piorado a situação.
          </li>
          <li>
            Martin Luther King Jr. era um caminho de vida 1 e foi morto por
            James Earl Ray, um caminho de vida 6 - Até Tiger Woods (caminho de
            vida 1) e Elin Nordegen (20-caminho de vida 11 oculto) tiveram um
            casamento terrível.
          </li>
          <li>
            George Washington, caminho de vida 1, estava em guerra contra o Rei
            George III, caminho de vida 11.
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Learn;
