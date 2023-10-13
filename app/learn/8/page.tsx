import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { NumberCompatibilityTable } from "../../../components/NumberCompatibilityTable";
import { numberCompatibilityMap } from "../../../libs/numerology";

export const metadata = getSEOTags({
  title: `Número 8: A PESSOA DO DINHEIRO | ${config.appName}`,
  canonicalUrlRelative: "/8",
});

const Learn = () => {
  const compatibility = numberCompatibilityMap[8];

  return (
    <div className="max-w-screen-lg mx-auto p-5 pb-10">
      <h1 className="font-bold text-2xl my-3 text-center">
        Número 8: A PESSOA DO DINHEIRO
      </h1>

      <ul className="list-disc">
        <li>Número do Dinheiro, Poder e Karma</li>
        <li>
          Os 8s são materialistas por natureza (como deveriam ser nesta vida)
        </li>
        <li>
          Muitos altos e baixos na vida, no peso, no dinheiro, no poder, etc.,
          não há meio termo para os 8s. Eles estão ou muito bem ou muito mal.
        </li>
        <li>
          O karma é mais rigoroso com os caminhos da vida 8 e os atinge com mais
          força, eles colhem o que semeiam
        </li>
        <li>
          Coloca o &quot;Comando&quot; em &quot;Comando e Controle&quot;, com
          seu par 4 sendo a parte de controle
        </li>
        <li>Como acima, assim abaixo</li>
        <li>Yin/Yang</li>
        <li>Infinito em um loop fechado (8)</li>
        <li>
          Indeciso a princípio, mas uma vez que decide algo, investe pesado
          nessa decisão (ao contrário do 5 que permanece duvidoso e indeciso)
        </li>
        <li>
          Mais artístico do que a maioria das pessoas percebe (Michelangelo,
          Picasso, etc.)
        </li>
        <li>Outro número de liderança</li>
        <li>
          50/50 - Alguns são ditadores, outros são grandes líderes inclusivos
        </li>
        <li>
          Em geral, não discuta muito com um 8. Eles não gostam de debates e
          serão muito duros com você
        </li>
        <li>Número da Alma Gêmea: 4</li>
        <li>Número Amigo: 6</li>
        <li>Relação de Amor/Odio com o 1</li>
        <li>
          Número Inimigo: 5. Embora 8 e 5 realmente não se odeiem pessoalmente,
          eles falham a longo prazo sob a energia um do outro. 5 precisa ser
          livre e ter seu espaço. 8 quer possuir e comandar. 5 não pode viver
          sob isso, e 8 odeia rebeldes
        </li>
        <li>
          Segredo: Se um novo 8 entra em sua vida, significa que você pode
          esperar coisas boas ou ruins: questões relacionadas a dinheiro, poder
          ou karma
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
