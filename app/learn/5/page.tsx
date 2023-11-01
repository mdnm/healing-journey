import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { NumberCompatibilityTable } from "../../../components/NumberCompatibilityTable";
import { numberCompatibilityMap } from "../../../libs/numerology";

export const metadata = getSEOTags({
  title: `Número 5: O VIAJANTE | ${config.appName}`,
  canonicalUrlRelative: "/5",
});

const Learn = () => {
  const compatibility = numberCompatibilityMap[5];

  return (
    <div className="max-w-screen-lg mx-auto p-5 pb-10">
      <h1 className="font-bold text-2xl my-3 text-center">
        Número 5: O VIAJANTE
      </h1>

      <ul className="list-disc">
        <li>
          Número do entretenimento, hospitalidade, sexo, boa sorte e saúde
        </li>
        <li>
          Número da boa aparência, especialmente mulheres atraentes (mulheres de
          caminho de vida 5 tendem a preferir homens de caminho de vida 1 e 4)
        </li>
        <li>
          Muito sexual por natureza, os 5 também são curadores por causa de sua
          energia sexual
        </li>
        <li>
          Mulheres de caminho de vida 5 e aquelas nascidas nos dias 5, 14 e 23
          têm alta libido
        </li>
        <li>
          Mulheres e sexo podem ser a ruína dos homens de caminho de vida 5
          (escândalos sexuais)
        </li>
        <li>
          Os 5 gostam de festas e, em seu pior estado, podem ser viciados em
          drogas, alcoólatras ou viciados em sexo
        </li>
        <li>
          Número da Mudança e Liberdade - os EUA foram fundados em 7/1/1776 =
          32/5
        </li>
        <li>
          5 é a energia dos grandes conquistadores e governantes (como Augustus
          César)
        </li>
        <li>Muda de ideia facilmente, oscila entre opiniões</li>
        <li>
          Arriscado, imprevisível, entertainer, também um excelente vendedor
          (como os 11)
        </li>
        <li>Precisa de seu espaço, liberdade e flexibilidade</li>
        <li>O número mais inteligente depois do 33 e 7</li>
        <li>
          Poder Secreto: O 5 pode facilmente &quot;se colocar no lugar de outra
          pessoa&quot;
        </li>
        <li>Número da Alma Gêmea: 11</li>
        <li>
          Exemplo: Augustus César era um 5 e nunca teria sido o maior governante
          da história sem Júlio César, um caminho de vida 11 que o adotou
        </li>
        <li>
          Exemplo: Abraham Lincoln, provavelmente o maior presidente da história
          dos EUA, nasceu em 2/12/1809 = 5 e chegou ao poder em 1860
        </li>
        <li>
          Exemplo: Michael Jordan, um caminho de vida 11, o maior jogador de
          basquete de todos os tempos, usava o número de camisa #23 (2+3=5)
        </li>
        <li>
          11 é um número de energia emocional e é fácil para o 5 sintonizar-se
          com ele
        </li>
        <li>
          Exemplo: Bernie Sanders, um caminho de vida 5, que conquistou uma
          grande e legítima sequência ao se conectar com as emoções das pessoas
        </li>
        <li>
          Exemplo: Christine Lagarde, um caminho de vida 5, tornou-se Ministra
          das Finanças da França em seu ano pessoal 11 e isso a catapultou para
          se tornar uma das mulheres mais poderosas do mundo
        </li>
        <li>
          Exemplo: Se a NBA não fosse fundada em 6/6/1946 = dia universal 5,
          Michael Jordan e Kobe Bryant não seriam considerados os maiores
          jogadores da NBA de todos os tempos
        </li>
        <li>Segredo #2: 5 é o início da guerra, mas 11 é sua continuação</li>
        <li>Segredo #3: 5 é capaz de seduzir a riqueza do número 4</li>
        <li>Números Amigos: 7 e 33</li>
        <li>
          Número Inimigo: 8. Enquanto 8 e 5 não se odeiam pessoalmente, eles
          falham a longo prazo sob a energia um do outro
        </li>
        <li>Alma Gêmea Secreta/Salvadora: 6</li>
      </ul>

      <h2 className="font-bold text-xl my-3 text-center">
        Tabela de harmonias
      </h2>
      <NumberCompatibilityTable numberCompatibility={compatibility} />
    </div>
  );
};

export default Learn;
