import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { NumberCompatibilityTable } from "../../../components/NumberCompatibilityTable";
import { numberCompatibilityMap } from "../../../libs/numerology";

export const metadata = getSEOTags({
  title: `Número 22: MESTRE CONSTRUTOR | ${config.appName}`,
  canonicalUrlRelative: "/22",
});

const Learn = () => {
  const compatibility = numberCompatibilityMap[22];

  return (
    <div className="max-w-screen-lg mx-auto p-5 pb-10">
      <h1 className="font-bold text-2xl my-3 text-center">
        Número 22: MESTRE CONSTRUTOR
      </h1>

      <ul className="list-disc">
        <li>O Arquiteto, O Treinador</li>
        <li>
          Construtor Mestre/Destruidor Mestre - pode construir os outros ou
          destruí-los totalmente
        </li>
        <li>
          O fisiculturista, construção muscular natural (adquire músculos
          facilmente)
        </li>
        <li>
          Um dos mais poderosos números, tem a maior capacidade de manifestar
          sua visão na realidade. Fará o que for necessário para alcançar seus
          objetivos
        </li>
        <li>Ótimo em liderar, criam seguidores que se parecem com um culto</li>
        <li>
          Protetor, Aterrado, Emocionalmente Reservado (Fortemente Emocional)
        </li>
        <li>
          Os 22 têm energia parcial 4 (estruturados, disciplinados, devem
          obedecer à lei ou sofrerão)
        </li>
        <li>Um boa parte das mulheres no poder político nasceram no dia 22</li>
        <li>Cria uma base sólida para qualquer coisa</li>
        <li>Muito observador, presta atenção extra aos detalhes</li>
        <li>
          Supervisores da mudança e tornam-se especialistas em seus campos
          escolhidos
        </li>
        <li>
          O número da água (WATER), a água também está ligada ao dinheiro.
        </li>
        <li>
          22 tem uma perspectiva elevada da vida, isso pode parecer materialista
          para outras pessoas
        </li>
        <li>
          Tem um grande coração, cuida das necessidades dos outros, esquecendo
          das próprias
        </li>
        <li>Precisa ver constantemente progresso no que está fazendo</li>
        <li>Determinado, Ambicioso, Autoconfiante, Estável</li>
        <li>Não gosta de receber conselhos dos outros e pode ser teimoso</li>
        <li>
          Controlador, Implacável, Temerário, Motivos Ulteriores, Maldoso, Fecha
          portas
        </li>
        <li>
          A criação pode ser difícil, os pais de uma criança 11, 22 ou 33 devem
          ser pacientes com eles e permitir que cresçam, também o universo testa
          mais os números mestres
        </li>
        <li>
          Ser um caminho de vida 22 é o caminho de vida mais difícil de evoluir
        </li>
        <li>
          22&apos;s, 33&apos;s e 11&apos;s não desenvolvidos têm muitos
          confrontos com a lei, entram e saem da cadeia, porque o universo é
          mais rigoroso com todos os números mestres
        </li>
        <li>
          Caminho de Vida Puro 22: 1/3/1971 = caminho de vida puro 22 (só pode
          ser adicionado de uma maneira)
        </li>
        <li>
          Se o seu aniversário puder ser calculado de mais de uma maneira, você
          NÃO é um 22 puro
        </li>
        <li>
          Se o seu aniversário tem 0’s ou um dia ou mês de dois dígitos e/ou
          nasceu em um dia 4 (4º, 13º, 31º), você é considerado um Caminho de
          Vida 4 com energia parcial 22
        </li>
        <li>
          Exemplo: Kim Kardashian - nascida em 10/21/1980 é um caminho de vida
          22 impuro, significando que ela vibra mais como um caminho de vida 4
          com energia parcial 22
        </li>
        <li>
          Número da Alma Gêmea: Não tem uma verdadeira alma gêmea, mas 8 pode
          ser uma boa combinação
        </li>
        <li>Números Amigos: 4 e 8</li>
        <li>
          22 tem um 66 positivo/33 negativo com o 3: Exemplo: Irmãos Koch com
          Charles um caminho de vida 3 e David como um caminho de vida 22
        </li>
        <li>
          Números Inimigos: 1, 7 e 9 - O 9 representa o fim da separação entre
          os Números Mestres (11, 22, 33) e os números não-mestres (1-8). De
          certa forma, isso quase faz o 9 parecer um número mestre secreto
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
