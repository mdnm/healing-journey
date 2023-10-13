import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { NumberCompatibilityTable } from "../../../components/NumberCompatibilityTable";
import { numberCompatibilityMap } from "../../../libs/numerology";

export const metadata = getSEOTags({
  title: `Número 11: MESTRE VISIONÁRIO | ${config.appName}`,
  canonicalUrlRelative: "/11",
});

const Learn = () => {
  const compatibility = numberCompatibilityMap[11];

  return (
    <div className="max-w-screen-lg mx-auto p-5 pb-10">
      <h1 className="font-bold text-2xl my-3 text-center">
        Número 11: MESTRE VISIONÁRIO
      </h1>

      <ul className="list-disc">
        <li>
          Nascido com sabedoria natural (pensadores profundos e inteligentes)
        </li>
        <li>11 é Energia Emocional Extremamente Alta (muito poderosa)</li>
        <li>20 é o 11 secreto escondido à vista de todos</li>
        <li>Alfa, masculino, instinto assassino, agressivo</li>
        <li>
          Os melhores atletas (também os de caminho de vida 1) - possuem uma
          constituição muscular e atlética natural
        </li>
        <li>Super Vendedor (também os de caminho de vida 5)</li>
        <li>
          Emocional, precisa aprender a controlar suas emoções — não deveriam
          possuir uma arma
        </li>
        <li>Possui o poder de tornar outros emocionais</li>
        <li>
          Muito Influente - a energia do 11 afeta as pessoas emocionalmente
        </li>
        <li>
          Carisma Natural - As pessoas são atraídas pelos 11&apos;s (como ímãs)
          por causa disso
        </li>
        <li>Líder oculto ou tem o poder de ser um</li>
        <li>
          Se encaixa na sociedade por se destacar dela (11s são incompreendidos)
        </li>
        <li>
          A criação pode ser difícil; os pais de um filho 11, 22 ou 33 devem ser
          pacientes e permitir que cresçam; além disso, o universo testa os
          números mestres ao máximo
        </li>
        <li>
          Florescem mais tarde, com mais para conquistar; geralmente não
          convivem com pessoas da mesma idade
        </li>
        <li>
          O Curador, mas precisa se curar primeiro antes de poder curar os
          outros
        </li>
        <li>
          O Psíquico - deve prestar atenção extra aos seus sonhos e pensamentos
        </li>
        <li>Altamente Intuitivo, capta facilmente a aura de outras pessoas</li>
        <li>
          Empatas - sensíveis à energia dos outros; também não deveriam beber ou
          usar drogas, pois o 11 tem inclinação a maus hábitos
        </li>
        <li>
          O Mensageiro Espiritual - conectado ao universo divino, pode se
          conectar ao desconhecido e tem acesso ao conhecimento antigo
        </li>
        <li>Quando um 11 está pra baixo, drena a energia de todos na sala</li>
        <li>A tecnologia falha sob a energia 11, ex. quedas de aviões</li>
        <li>
          Tem uma alma antiga, reencarnada muitas vezes, adquirindo sabedoria e
          conhecimento espiritual; precisa merecer o direito de nascer com o
          caminho de vida 11
        </li>
        <li>
          Quando você vê 11:11 frequentemente, significa que seu terceiro olho
          está se abrindo e você está evoluindo
        </li>
        <li>
          Segredo: 7 deseja estar com o 11, mas não por ser realmente um bom
          relacionamento. O 7 está preso e isolado nesta realidade e quer
          encontrar um fim para si e completude. 9 é o número da completude. 7 +
          11 = 18 = 9. O 11 não se importa tanto com o 7 porque o 11 é o número
          mais emocional e precisa ser cuidado nesse aspecto. O 7 é incapaz de
          fazer isso porque tem a menor emoção como energia
        </li>
        <li>Número da Alma Gêmea: 5</li>
        <li>
          11 é um número de energia emocional e torna-se fácil para o 5 se
          conectar a ele
        </li>
        <li>
          Exemplo: Michael Jordan, caminho de vida 11, o maior jogador de
          basquete de todos os tempos, usava a camisa nº 23 (2+3=5) e essa
          energia o ajudou muito a se tornar o melhor
        </li>
        <li>
          Exemplo: Se a NBA não tivesse sido fundada em 6/6/1946 (um dia 5),
          Michael Jordan e Kobe Bryant (ambos caminho de vida 11) não seriam
          considerados os maiores jogadores da NBA de todos os tempos, mesmo o
          11 sendo atlético. É por causa da energia do 5
        </li>
        <li>
          Exemplo: Abraham Lincoln, provavelmente o maior presidente da história
          dos EUA, nascido em 2/12/1809 (um dia 5), e chegou ao poder em 1860
          (em seu ano pessoal 20, que é um ano pessoal 11 escondido)
        </li>
        <li>
          Exemplo: Christine Lagarde (1/1/1956), caminho de vida 5, tornou-se
          Ministra das Finanças da França em seu ano pessoal 11 (1/1/2007=11) e
          isso a impulsionou a se tornar uma das mulheres mais poderosas do
          mundo. Ela passou a liderar o FMI e também em seu ano pessoal 5, mas
          tudo começou com aquele impulso do 11
        </li>
        <li>
          Segredo #2: 5 é o início da guerra, mas 11 é sua continuação. É por
          isso que a Primeira Guerra Mundial, que começou e terminou em um dia
          5, terminou em 11/11 na 11ª hora. Isso ajudou a garantir a Segunda
          Guerra Mundial. Por que 9-11-2001=5=Guerra Sem Fim (contra o terror).
          Novamente, 5 e 11 são almas gêmeas
        </li>
        <li>Número Amigo: 33</li>
        <li>
          Números Inimigos: 1 e 9 - Jogadores da NBA Kobe Bryant (caminho de
          vida 11) e Shaquille O&apos;Neal (caminho de vida 1), também são
          sinais inimigos (Cavalo vs Rato) na astrologia
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
