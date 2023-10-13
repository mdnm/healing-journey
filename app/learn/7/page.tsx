import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { NumberCompatibilityTable } from "../../../components/NumberCompatibilityTable";
import { numberCompatibilityMap } from "../../../libs/numerology";

export const metadata = getSEOTags({
  title: `Número 7: O SOLITÁRIO | ${config.appName}`,
  canonicalUrlRelative: "/7",
});

const Learn = () => {
  const compatibility = numberCompatibilityMap[7];

  return (
    <div className="max-w-screen-lg mx-auto p-5 pb-10">
      <h1 className="font-bold text-2xl my-3 text-center">
        Número 7: O SOLITÁRIO
      </h1>

      <ul className="list-disc">
        <li>Lobo solitário</li>
        <li>Intuitivo, Introvertido</li>
        <li>
          O Gênio: Extremamente inteligente e com alto QI (como Stephen Hawking)
        </li>
        <li>
          Mais &quot;inteligente/nerd&quot; do que &quot;esperto/malandro&quot;
        </li>
        <li>7 é o número da tecnologia</li>
        <li>
          Propenso a lesões e doenças - Lesões e problemas de saúde são mais
          frequentes para o 7 do que qualquer outro número. Mente forte, corpo
          fraco
        </li>
        <li>Terá que usar óculos no final ou em algum momento de sua vida</li>
        <li>Ruim em relacionamentos, o número mais azarado</li>
        <li>Adora jogar (tem problema com jogos de azar)</li>
        <li>A energia é vulnerável a homossexualidade</li>
        <li>
          NÃO se case ou comece um relacionamento em dias universais 7 ou nos
          dias 7, 16 ou 25 de qualquer ano. Qualquer relacionamento iniciado sob
          a energia 7 falhará (o mesmo também se aplica a dias universais 9 ou
          nos dias 9, 18 ou 27)
        </li>
        <li>Os 7s são muito incompreendidos pela maioria das pessoas</li>
        <li>
          Tem problemas de comunicação, os 7s não conseguem comunicar sua
          inteligência e traduzi-la para um nível mais baixo para as massas de
          forma eficaz, como um 33 pode
        </li>
        <li>
          Os 7s muitas vezes podem ser (P)ervertidos e são uma das principais
          energias no (P)ornô, P é a 16ª letra do alfabeto 1+6=7
        </li>
        <li>
          Os 7s devem ter cuidado ao passar muito tempo com os 4s, que sugarão
          sua energia, inteligência e reivindicarão crédito pelo trabalho dos 7s
        </li>
        <li>
          Pessoas nascidas no dia 25 podem ser muito problemáticas do ponto de
          vista da saúde mental, especialmente 25 de maio - considerado o pior
          aniversário a se ter, 11 de fevereiro é outro
        </li>
        <li>
          Número da Alma Gêmea: Nenhum. 7 não tem uma verdadeira alma gêmea. De
          certa forma, é a sua própria alma gêmea como 3, mas 7 também se odeia,
          ao contrário de 3 que se ama em praticamente todas as coisas
        </li>
        <li>Número Amigo: 5 e 9</li>
        <li>Exemplo de 7 e 9 seria Jam Master Jay (7) e Reverend Run (9)</li>
        <li>
          Segredo: 7 deseja estar com o 11, mas não é por ser um bom
          relacionamento. 7 está preso, isolado, nesta realidade e quer
          encontrar um fim para ela e completar-se. 9 é o número da conclusão.
          7+11=18=9. 11 não se importa tanto com o 7 porque 11 é o número mais
          emocional e precisa ser cuidado nesse aspecto. 7 é incapaz de fazer
          isso porque é a energia menos emocional
        </li>
        <li>
          Segredo: 7 é azar, mas três 7s juntos melhoram muito esse azar. 777 =
          muito mais sorte para aqueles com azar. A elite sabe disso e coloca
          777 em cassinos em todos os lugares porque atrai pessoas desesperadas
          com azar, que estão procurando uma pequena melhoria em suas chances. A
          energia das pessoas percebe isso subconscientemente. Então, se você
          tem muito azar, 777 é um passo na direção certa para melhorá-lo. Você
          ainda vai perder dinheiro no cassino porque é assim que os cassinos
          são projetados
        </li>
        <li>Números Inimigos: 1, 2, 3, 4, 6, 8, 11 (um pouco menos), 22, 33</li>
        <li>
          7 é o número mais odiado e falha sob a maioria das energias de
          qualquer número. Se você quer que seus pais te deixem em paz, case-se
          com um 7. 6 é o pior desses inimigos
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
