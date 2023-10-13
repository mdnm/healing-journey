import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { NumberCompatibilityTable } from "../../../components/NumberCompatibilityTable";
import { numberCompatibilityMap } from "../../../libs/numerology";

export const metadata = getSEOTags({
  title: `Número 9: O ADAPTADOR | ${config.appName}`,
  canonicalUrlRelative: "/9",
});

const Learn = () => {
  const compatibility = numberCompatibilityMap[9];

  return (
    <div className="max-w-screen-lg mx-auto p-5 pb-10">
      <h1 className="font-bold text-2xl my-3 text-center">
        Número 9: O ADAPTADOR
      </h1>

      <ul className="list-disc">
        <li>
          Número de finais, de conclusão: razão pela qual os 9s são
          egocêntricos, eles se sentem completos
        </li>
        <li>
          O Vice-Presidente – 9 é ótimo em &quot;liderar de trás dos
          panos&quot;, e é por isso que funciona tão bem com o número 1, que
          lidera na frente
        </li>
        <li>Bom líder e bom seguidor</li>
        <li>
          Um dos números mais inteligentes após 33, 7 e 5 (também pode ter
          padrões elevados)
        </li>
        <li>
          Introvertido, vive em sua mente e tem uma personalidade complicada
        </li>
        <li>
          Odeia experimentar novas coisas que no final os tornarão mais sábios
        </li>
        <li>
          Muito Artístico: artista musical, intérprete, cantor, dançarino, ator,
          diretor
        </li>
        <li>
          9 é adaptável (o Transformador) e pensa rapidamente e eficazmente sob
          pressão
        </li>
        <li>Está aqui para equilibrar o poder dos números mestres.</li>
        <li>
          Personalidade adaptativa - caminhos de vida 9 & pessoas nascidas nos
          dias 9, 18 e 27 têm problemas com vícios, eles precisam prestar
          atenção com quem se associam porque vão se adaptar e intensificar
          qualquer influência, boa ou má
        </li>
        <li>
          A maioria dos caminhos de vida 9 são muito escravizados por seus egos.
          Em vez de usar seus egos como uma ferramenta para chegar ao topo, seu
          próprio ego os usa para manter sua posição na base
        </li>
        <li>
          Tem problemas com a família (ovelha negra) 9 é um 6 de cabeça para
          baixo, 6 = Família
        </li>
        <li>
          Os caminhos de vida 9 estão aqui para trabalhar em seu karma e ajudar
          os caminhos de vida 8 a trabalharem em seu karma - razão pela qual R
          está no centro de kaRma. R = 9. kaRma = 8
        </li>
        <li>
          A maioria das almas falha em sua reencarnação no caminho de vida 9 e
          tem que repeti-la, vez após vez
        </li>
        <li>
          A conclusão é o objetivo mais alto neste nível da realidade, para que
          você possa passar para o próximo plano
        </li>
        <li>
          0 é o 9 escondido: 0 é secreto e esconde a verdadeira natureza de
          qualquer número ao seu lado (também amplifica ou melhora). Ex. -
          Embora 3 seja o número da criança e do comediante, 3&apos;s não
          evoluídos podem ser molestadores de crianças, pedófilos ou predadores
          sexuais. Bill Cosby, nascido em 7/12/1936=30, um caminho de vida 3,
          foi secretamente um pedófilo por anos com muitas de suas acusadoras
          sendo menores de 18 anos, alegadamente.
        </li>
        <li>
          9 também está fortemente ligado ao 2, razão pela qual 2 é chamado de
          &quot;Femi(NINE)&quot; (Nove em inglês = NINE)
        </li>
        <li>
          Grande Segredo: 9 é o número definitivo de manifestação. 9 é o número
          da realidade e da ilusão, note como R e I são a 18ª (9) e 9ª letra.
          Este mundo é construído sobre realidade e ilusão. Então, se você
          mantiver a energia 9 perto de você e usar os segredos da lei da
          atração, será muito mais eficaz em manifestar tanto a realidade quanto
          as ilusões que você deseja
        </li>
        <li>
          Quando 9 é introduzido em uma situação, tudo (incluindo pessoas) se
          torna uma versão melhor de si mesmo ou é levado à conclusão. Exemplo:
          3+9=12. Assim, você está construindo sua própria energia usando o 9.
          3x9=27, uma forma de conclusão
        </li>
        <li>
          O trabalho de 9 é ajudar a unificar 1-8 (por isso
          1+2+3+4+5+6+7+8=36=9).
        </li>
        <li>
          A energia 9 representa o fim da separação entre os números mestres
          (11, 22, 33) e os números não mestres (1-8). De certa forma, isso faz
          do 9 um mestre secreto ou o mais mestre. Os números mestres não gostam
          de 9 por essa razão.
        </li>
        <li>
          A energia 9 é a mais útil na abertura do chakra do terceiro olho e
          ajudando a apoiar seu caminho para alcançar o chakra da coroa
        </li>
        <li>
          Se houver alguma utopia na terra, 9 será uma grande razão por trás
          disso
        </li>
        <li>Número da Alma Gêmea: 1</li>
        <li>Números Amigos: Todos os números de 1 a 8</li>
        <li>Números Inimigos: 11, 22, 33</li>
      </ul>

      <h2 className="font-bold text-xl my-3 text-center">
        Tabela de harmonias
      </h2>
      <NumberCompatibilityTable numberCompatibility={compatibility} />
    </div>
  );
};

export default Learn;
