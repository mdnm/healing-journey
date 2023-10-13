import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { NumberCompatibilityTable } from "../../../components/NumberCompatibilityTable";
import { numberCompatibilityMap } from "../../../libs/numerology";

export const metadata = getSEOTags({
  title: `Número 4: O TRABALHADOR | ${config.appName}`,
  canonicalUrlRelative: "/4",
});

const Learn = () => {
  const compatibility = numberCompatibilityMap[4];

  return (
    <div className="max-w-screen-lg mx-auto p-5 pb-10">
      <h1 className="font-bold text-2xl my-3 text-center">
        Número 4: O TRABALHADOR
      </h1>

      <ul className="list-disc">
        <li>
          Número da lei e da ordem, estrutura, como a polícia, governo e
          militares
        </li>
        <li>Militante, adequado para ser policial ou soldado</li>
        <li>Naturalmente com uma constituição física mais musculosa/robusta</li>
        <li>
          O patriota, também o número do super-herói - Frequentemente salva as
          energias 2 e 3
        </li>
        <li>Uma das energias mais inteligentes</li>
        <li>
          O 4 é, em geral, o trabalhador mais árduo (muitos com caminho de vida
          11 também trabalham muito) e pode ser um workaholic (pode ser bom ou
          ruim) e terá que trabalhar muito ao longo da vida
        </li>
        <li>
          Azul é a cor da lei e da ordem; usar azul pode ajudar com a polícia ou
          em tribunal
        </li>
        <li>
          Disciplinado e focado, precisa ver constantemente progresso no que
          está fazendo
        </li>
        <li>
          Por vezes pode ser robótico. Os 4&apos;s precisam de uma rotina para
          funcionar corretamente
        </li>
        <li>Coloca o “Controle” em “Comando e Controle”</li>
        <li>Reservado emocionalmente (mentalidade prática)</li>
        <li>
          Prático, também o mais difícil de convencer de que a numerologia/o
          oculto é real
        </li>
        <li>
          Alto desejo sexual; o 4, sendo o trabalhador mais árduo, geralmente
          fantasia sobre estar em um relacionamento (romântico, sexual, etc.)
          com um colega de trabalho
        </li>
        <li>
          A vida geralmente é uma bagunça: amor complicado, família complicada,
          etc.
        </li>
        <li>
          Faz as coisas seguindo as regras e obedece à lei; se não o fizer,
          sofrerá consequências, indo e vindo da prisão ou tendo muitos
          problemas com a lei. O universo é mais rigorosa com o 4
        </li>
        <li>
          Grande segredo: 4 é o verdadeiro número da riqueza, e o segundo maior
          número de riqueza é 28. Esta é a verdadeira razão, junto com o
          nascimento no dia 28, pela qual Bill Gates é tão rico (1/28/1955=4).
          Bernard Arnault, nascido em 5 de março de 1949, tem um caminho de vida
          4 e agora está em competição para ser o homem mais rico do mundo.
          Amazon foi fundada em 5/28/1996 = dia universal 4 e compete para ser a
          maior empresa do mundo. JP Morgan, fundador e colaborador das maiores
          empresas da América (US Steel, GE, JP Morgan Chase) tinha um caminho
          de vida 4. Musa de Mali pode ter sido o homem mais rico da história do
          mundo, e, embora não saibamos sua data de nascimento, eles
          frequentemente mencionam o valor de 400 bilhões para representar sua
          riqueza como uma dica. Microsoft e Facebook são ambas empresas 4.
          McDonald&apos;s é o rei do fast food. É por isso que Donald Trump, com
          caminho de vida 4, mesmo não sendo o homem mais rico do mundo (mas
          sendo bilionário), foi frequentemente visto como um símbolo de excesso
          de riqueza.
        </li>
        <li>
          Número da alma gêmea: 8 – 4 é o verdadeiro número da riqueza e 8 é o
          número do dinheiro, uma combinação natural
        </li>
        <li>Tem uma relação 66,6% positiva/33,3% negativa com o 3</li>
        <li>
          Número inimigo é 1 e 9 - 4 está em constante competição com 1 para
          conquistar 2 (o feminino) e 3 (a criança)
        </li>
        <li>
          Relação unilateral com 7 - 4 extrai energia do 7 e é fortalecido por
          isso
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
