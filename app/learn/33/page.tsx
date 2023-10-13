import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { NumberCompatibilityTable } from "../../../components/NumberCompatibilityTable";
import { numberCompatibilityMap } from "../../../libs/numerology";

export const metadata = getSEOTags({
  title: `Número 33: MESTRE PROFESSOR | ${config.appName}`,
  canonicalUrlRelative: "/33",
});

const Learn = () => {
  const compatibility = numberCompatibilityMap[33];

  return (
    <div className="max-w-screen-lg mx-auto p-5 pb-10">
      <h1 className="font-bold text-2xl my-3 text-center">
        Número 33: MESTRE PROFESSOR
      </h1>

      <ul className="list-disc">
        <li>
          O Mestre Professor (professor dos professores), até 11 & 22 podem
          aprender muito com 33
        </li>
        <li>O Mestre Influenciador - tem o poder de mudar a opinião pública</li>
        <li>Nascido com sabedoria e conhecimento naturais</li>
        <li>
          Um dos números mais inteligentes e geralmente são os mais inteligentes
          da sala
        </li>
        <li>Bons líderes, inspiram os outros</li>
        <li>
          Orientados para a família e amorosos, acreditam no conceito de
          “Família em Primeiro Lugar” de uma grande maneira
        </li>
        <li>Ajuda a guiar as pessoas na direção certa na vida</li>
        <li>
          O terapeuta, conselheiro e cuidador - sensível às necessidades das
          outras pessoas
        </li>
        <li>
          Os dois 3&apos;s em 33 tornam-nos engraçados, muito criativos e
          comunicadores eficazes; 3 é o número do comediante, criatividade e
          comunicação
        </li>
        <li>
          Notam coisas que a maioria das pessoas não nota e conseguem descobrir
          coisas que a maioria não consegue
        </li>
        <li>
          O universo é mais duro com os caminhos de vida 33 e dificulta o
          sucesso deles (mas eles ainda têm) porque eles têm o poder de
          influenciar o mundo
        </li>
        <li>A missão de vida é iluminar o maior número de pessoas possível</li>
        <li>
          Tem um ego enorme, dependente, descuidado e mentirá para não ferir os
          sentimentos dos outros
        </li>
        <li>
          33’s não evoluídos podem ser tiranos/ditadores e geralmente têm muitos
          confrontos com a lei, entrando e saindo da cadeia
        </li>
        <li>
          Nível mais alto de consciência humana: conexão mente, corpo e alma; um
          caminho de vida puro 33 é a alma mais evoluída e é o caminho de vida
          final antes de ser libertado desse plano da realidade - também um
          caminho de vida parcial 33 ainda é mais evoluído e mais inteligente do
          que a maioria
        </li>
        <li>
          Caminho de Vida Puro 33: Você NÃO é um 33 puro se o seu aniversário
          puder ser adicionado de mais de uma maneira. Exemplo: 7/1/1987 é um 33
          puro porque só pode ser adicionado de uma maneira
        </li>
        <li>
          Você é considerado um Caminho de Vida 6 com energia parcial 33 se:
          <ul className="list-decimal">
            <li>
              Você nasceu em um dia 6 (6, 15 ou 24) Exemplo: 7/6/1982 ou
              8/15/1990
            </li>
            <li>
              Tem qualquer 0&apos;s na sua data de nascimento Exemplo: 7/30/1985
              ou 7/8/1980. A rapper feminina Cardi B, nascida em 10/11/1992, é
              um 33 impuro - por causa do 0 em sua data de nascimento,
              significando que ela é realmente um caminho de vida 6 com energia
              parcial 33
            </li>
            <li>
              Tem um mês de dois dígitos (exceto Nov. = 11) Exemplo: 10/8/1986
              ou 12/24/1986 Tem um dia de dois dígitos na sua data de nascimento
              Exemplo: 12/28/1982 ou 2/25/1986.
            </li>
          </ul>
        </li>
        <li>
          Número da Alma Gêmea: 6 - Os dois 3&apos;s em 33 são o que torna o 6 o
          mais alegre em muitos aspectos. 6 é o número da família, e 3 é o
          número da criança
        </li>
        <li>Número Amigo: 5 (especialmente caminhos de vida 32) e 11</li>
        <li>Números Inimigos: 7 e 9</li>
      </ul>

      <h2 className="font-bold text-xl my-3 text-center">
        Tabela de harmonias
      </h2>
      <NumberCompatibilityTable numberCompatibility={compatibility} />
    </div>
  );
};

export default Learn;
