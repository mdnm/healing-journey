import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { NumberCompatibilityTable } from "../../../components/NumberCompatibilityTable";
import { numberCompatibilityMap } from "../../../libs/numerology";

export const metadata = getSEOTags({
  title: `Número 3: A CRIANÇA | ${config.appName}`,
  canonicalUrlRelative: "/3",
});

const Learn = () => {
  const compatibility = numberCompatibilityMap[3];

  return (
    <div className="max-w-screen-lg mx-auto p-5 pb-10">
      <h1 className="font-bold text-2xl my-3 text-center">
        Número 3: A CRIANÇA
      </h1>
      <ul className="list-disc">
        <li>Energia infantil (também conhecida como a criança)</li>
        <li>
          Número do comediante, os 3s são naturalmente engraçados e
          bem-humorados
        </li>
        <li>3 é o número da comunicação e criatividade</li>
        <li>
          Comunicador eficaz, altamente criativo e sociável, muitas vezes falta
          lógica
        </li>
        <li>Falta disciplina, mas precisa dela para prosperar</li>
        <li>
          Frequentemente falta desejo sexual por causa do estado de energia
          infantil
        </li>
        <li>
          Gosta das coisas simples da vida, comidas simples, etc.; Tudo o que
          Snoop Dogg (um caminho de vida 3) precisa é de um bom baseado para
          sobreviver
        </li>
        <li>
          Precisa crescer em uma família com dois pais, mais do que qualquer
          outro número ou pode se tornar uma pessoa muito problemática
        </li>
        <li>
          Gosta de trapacear/quebrar as regras para conseguir o que não pode
          ter- Ex. Bill Cosby
        </li>
        <li>
          Às vezes pode ter uma mentalidade criminosa, seja um criminoso real ou
          não
        </li>
        <li>
          Alimenta-se mal, muitas vezes pode ser obeso. Por outro lado, muitos
          3s têm grandes histórias de perda de peso porque têm a energia para se
          reerguer.
        </li>
        <li>
          Número da Alma Gêmea: 3 - Ama sua própria energia e não tem uma
          verdadeira alma gêmea
        </li>
        <li>
          Números Amigáveis: 1 e 2: 3 sendo a criança, geralmente é amigável com
          o pai e a mãe, pois 1= Masculino 2= Feminino 3= Criança - 1+2+3= 6=
          família
        </li>
        <li>
          3 tem uma relação 66,6% positiva/33,3% negativa com 4 - O 3 ou tem a
          relação mais incrível com o caminho de vida 4 e produz coisas
          incríveis como Francis Crick (caminho de vida 4) e James Watson
          (caminho de vida 3) com o DNA, ou tem uma má relação porque os
          diferentes processos de pensamento acabam colidindo. Na maioria das
          vezes, eles se complementam bem. Mas, às vezes, os confrontos e
          tensões saem do controle.
        </li>
        <li>
          Bill Gates (caminho de vida 4) fundou a Microsoft em 4/4/1975 = Dia
          Universal 3 e foi muito bem-sucedida. Essa data tem uma forte energia
          3 com 4 como a energia secundária. O Facebook também foi fundado em
          2/4/2004 = dia universal 3 com energia 4 também. São duas das 5
          maiores empresas de capital aberto na Bolsa de Valores de Nova York
        </li>
        <li>
          Bill Gates também é grande amigo de Steve Ballmer, um caminho de vida
          3
        </li>
        <li>
          3 tem uma relação positiva 66/33 negativa com o caminho de vida 22:
          Ex. Irmãos Koch com Charles sendo caminho de vida 3 e David sendo
          caminho de vida 22
        </li>
        <li>Número Inimigo: Não tem inimigos substanciais além do 7</li>
      </ul>

      <h2 className="font-bold text-xl my-3 text-center">
        Tabela de harmonias
      </h2>
      <NumberCompatibilityTable numberCompatibility={compatibility} />
    </div>
  );
};

export default Learn;
