import { NumberCompatibilityTable } from "@/components/NumberCompatibilityTable";
import config from "@/config";
import { numberCompatibilityMap } from "@/libs/numerology";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `Número 2: O DIPLOMATA | ${config.appName}`,
  canonicalUrlRelative: "/2",
});

const Learn = () => {
  const compatibility = numberCompatibilityMap[2];

  return (
    <div className="max-w-screen-lg mx-auto p-5 pb-10">
      <h1 className="font-bold text-2xl my-3 text-center">
        Número 2: O DIPLOMATA
      </h1>

      <ul className="list-disc">
        <li>Sensível, Energia feminina (também conhecida como a fêmea)</li>
        <li>
          Suave, passivo, Introvertido, delicado mas guardará rancor se você
          ferir seus sentimentos
        </li>
        <li>
          Não existe tal coisa como um caminho de vida 2. Pessoas nascidas no
          dia 2 têm energia 2.
        </li>
        <li>
          Se sua data de nascimento reduz para 20, seu caminho de vida é 11.
        </li>
        <li>
          Representa dualidade e pode ver e entender dois lados de um argumento
        </li>
        <li>Diplomático & Pacífico - (Ex. Gandhi), também Intuitivo</li>
        <li>Se recorrem à violência, eles falham - Ex. Nat Turner</li>
        <li>
          Frequentemente fisicamente belas nas mulheres, aumenta a probabilidade
          do homem ser suave/beta.
        </li>
        <li>Corpo curvilíneo (mulheres)</li>
        <li>Não é um bom líder</li>
        <li>
          Bom seguidor - frequentemente encontra o líder certo/melhor a seguir
        </li>
        <li>Bom pai/mãe</li>
        <li>
          Histórico de lutar para ter sucesso no local de trabalho, na maioria
          das vezes precisa encontrar uma alternativa diferente para ganhar
          dinheiro. É aconselhável que quando possuírem filhos se concentrarem
          em criá-los para encontrar saúde e felicidade
        </li>
        <li>
          Na década de 1900 não tanto. Mas agora o 2 está empoderado nos anos
          2000, e o mundo todo está mudando (e ficando mais suave) para permitir
          que isso aconteça, então 2s e mulheres em geral se sentem melhor sobre
          a escola, o local de trabalho, etc.
        </li>
        <li>
          O dia 2 do mês (energia 2) é um bom dia para fazer as pazes e acabar
          com desavenças
        </li>
        <li>
          Número da Alma Gêmea: 2 é mais complicado. Todos os caminhos de vida
          são números de almas gêmeas para uma pessoa nascida no dia 2. Isso
          porque a verdadeira energia universal 2 está fortemente entrelaçada no
          universo (o universo é Amor Incondicional).
        </li>
        <li>
          Pessoas nascidas nos dias 1, 9, 10, 18, 19, 27 e 28 possuem muita
          harmonia com os nascidos num dia 2.
        </li>
        <li>
          Números Inimigos: Nenhum - e qualquer pessoa que faça um inimigo de um
          indivíduo nascido no dia 2 tem mais chances de sofrer muito na vida,
          pois a pessoa está indo contra a energia natural da Paz.
        </li>
        <li>
          O 2 ama incondicionalmente o 3 (número da criança) ainda mais do que o
          1 e 9, mas o 3 nem sempre mostra o mesmo nível de amor de volta, então
          não pode ser considerado uma alma gêmea, embora o relacionamento
          geralmente seja bom.
        </li>
      </ul>
      <h2 className="font-bold text-xl my-3 text-center">
        Tabela de harmonias
      </h2>
      <NumberCompatibilityTable numberCompatibility={compatibility} />
    </div>
  );
};

export default Learn;
