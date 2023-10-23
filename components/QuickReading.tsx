"use client";

import { ReadingResponseType } from "@/app/api/reading/route";
import * as ga from "@/gtag";
import apiClient from "@/libs/api";
import {
  ANIMAL_HOURS,
  Animal,
  AnimalHour,
  easternElementInfoMap,
  easternTrineInfoMap,
  elementToEmojiMap,
  signToCharacteristicsMap,
  signToEmojiMap,
} from "@/libs/eastern-astrology";
import {
  impureMasterNumberReducer,
  lifePathInfoMap,
  partialEnergyInfoMap,
  personalYearInfoMap,
} from "@/libs/numerology";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import toast from "react-hot-toast";
import { NumberCompatibilityTable } from "./NumberCompatibilityTable";
import Pricing from "./Pricing";

export default function QuickReading({
  isLandingPage,
}: {
  isLandingPage?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [reading, setReading] = useState<ReadingResponseType | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [hour, setHour] = useState<number | null>(null);
  const [rating, setRating] = useState(5);
  const [ratingReason, setRatingReason] = useState("");
  const [hasRated, setHasRated] = useState(false);
  const [selectedTab, setSelectedTab] = useState<
    "numerology" | "eastern-zodiac" | "gematria"
  >("numerology");

  const handleReading = async () => {
    if (!date) {
      toast.error("Por favor informe sua data de nascimento");
      return;
    }

    setIsLoading(true);
    try {
      const formattedDate = new Date(date);

      const data = await apiClient.post<
        { date: Date; hour: AnimalHour },
        ReadingResponseType
      >("/reading", {
        date: formattedDate,
        hour,
        name,
      });

      ga.event({
        action: "reading",
        value: JSON.stringify({
          date,
          hour,
          name,
        }),
      });

      setReading(data);
    } catch (error) {
      console.log(error);

      ga.event({
        action: "reading-error",
        value: JSON.stringify({
          date,
          hour,
          name,
          error: error?.message || error,
        }),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRating = async () => {
    if (!rating) {
      toast.error("Por favor informe uma nota");
      return;
    }

    setIsLoading(true);
    try {
      await apiClient.post("/rating", {
        rating,
        reason: ratingReason,
      });
      ga.event({
        action: "rating",
        value: JSON.stringify({
          rating,
          ratingReason,
        }),
      });
      toast.success("Seu feedback foi enviado com sucesso, obrigado!");
      setHasRated(true);
    } catch (error) {
      console.log(error);
      ga.event({
        action: "rating-error",
        value: JSON.stringify({
          rating,
          ratingReason,
          error: error?.message || error,
        }),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="p-8 pb-24 w-full" id="reading">
      <section className="max-w-3xl mx-auto space-y-8 flex flex-col items-center bg-white p-3 rounded-md">
        <h2 className="sm:text-5xl text-4xl font-extrabold">Leitura Básica</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2 w-full">
            <span>Sua data de nascimento</span>
            <input
              type="date"
              placeholder="Sua data de nascimento"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center gap-2 w-full">
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => setHour(Number(e.target.value))}
            >
              <option value={null}>(Opcional) Sua hora de nascimento</option>
              {ANIMAL_HOURS.map((hour, index) => (
                <option key={hour} value={index}>
                  {hour}
                </option>
              ))}
            </select>
            <span>
              (usada somente para descobrir as horas harmônicas e desarmônicas)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-full">
            <span>Seu nome</span>
            <input
              type="text"
              placeholder="(Opcional) Seu nome"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => handleReading()}
        >
          {isLoading && (
            <span className="loading loading-spinner loading-xs"></span>
          )}
          Fazer leitura
        </button>
        {reading && (
          <>
            <div className="w-full flex flex-col items-center">
              <div className="tabs">
                <button
                  className={`tab tab-lifted ${
                    selectedTab === "numerology" ? "tab-active" : ""
                  }`}
                  onClick={() => setSelectedTab("numerology")}
                >
                  Numerologia
                </button>
                {reading.gematria.firstLetterLowercaseValue && (
                  <button
                    className={`tab tab-lifted ${
                      selectedTab === "gematria" ? "tab-active" : ""
                    }`}
                    onClick={() => setSelectedTab("gematria")}
                  >
                    Gematria (numerologia do nome)
                  </button>
                )}
                <button
                  className={`tab tab-lifted ${
                    selectedTab === "eastern-zodiac" ? "tab-active" : ""
                  }`}
                  onClick={() => setSelectedTab("eastern-zodiac")}
                >
                  Astrologia Oriental
                </button>
              </div>
              {selectedTab === "numerology" && (
                <NumerologyReading
                  numerology={reading.numerology}
                  isLandingPage={isLandingPage}
                />
              )}
              {selectedTab === "gematria" && (
                <GematriaReading gematria={reading.gematria} />
              )}
              {selectedTab === "eastern-zodiac" && (
                <EasternAstrologyReading zodiac={reading.zodiac} hour={hour} />
              )}
            </div>
            {!hasRated && (
              <div className="mt-3 flex flex-col w-full gap-2 items-center">
                <div className="rating rating-lg">
                  <input
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-primary"
                    checked={rating === 1}
                    onChange={() => setRating(1)}
                  />
                  <input
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-primary"
                    checked={rating === 2}
                    onChange={() => setRating(2)}
                  />
                  <input
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-primary"
                    checked={rating === 3}
                    onChange={() => setRating(3)}
                  />
                  <input
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-primary"
                    checked={rating === 4}
                    onChange={() => setRating(4)}
                  />
                  <input
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-primary"
                    checked={rating === 5}
                    onChange={() => setRating(5)}
                  />
                </div>
                <textarea
                  placeholder="O quê você mais gostou/não gostou? Essa leitura fez sentido?"
                  className="textarea textarea-bordered w-full max-w-xs"
                  onChange={(e) => setRatingReason(e.target.value)}
                ></textarea>
                <button
                  className="btn btn-accent text-white btn-lg"
                  onClick={() => handleRating()}
                >
                  {isLoading && (
                    <span className="loading loading-spinner loading-xs"></span>
                  )}
                  Enviar feedback
                </button>
              </div>
            )}
            {!isLandingPage && <Pricing />}
          </>
        )}
      </section>
    </main>
  );
}

const NumerologyReading = ({
  numerology,
  isLandingPage,
}: {
  numerology: ReadingResponseType["numerology"];
  isLandingPage?: boolean;
}) => {
  const impureMasterNumberReduced = impureMasterNumberReducer(
    numerology.lifePath
  );

  return (
    <div className="py-4 flex flex-col items-center gap-2 w-full bg-white rounded-md">
      <p className="font-bold text-xl text-center">
        Caminho de vida:{" "}
        {numerology.lifePathUnreduced !== numerology.lifePath
          ? `${numerology.lifePathUnreduced}/${numerology.lifePath}`
          : numerology.lifePath}{" "}
        {numerology.isImpureMasterNumber &&
          `Impuro, vibrará mais como ${impureMasterNumberReduced}`}
      </p>
      <p className="text-lg text-center">
        Energia parcial (do dia):{" "}
        {numerology.partialEnergyUnreduced !== numerology.partialEnergy
          ? `${numerology.partialEnergyUnreduced}/${numerology.partialEnergy}`
          : numerology.partialEnergy}
      </p>
      <p className="text-lg text-center">
        Ano pessoal: {numerology.personalYear}
      </p>
      <ReadingExplanationCollapse title="Explicações gerais e recomendações">
        <ul className="list-disc pl-4">
          <li>
            Estamos num mundo onde tudo é energia/frequência e pode ser reduzido
            a um número. A numerologia pode ser aplicada em qualquer coisa
            (pessoas, animais, lugares, objetos, etc). Porém a energia não é
            definitiva, tudo gira em torno de probabilidades e o universo possui
            outras leis que nos afetam. A ideia é utilizar das probabilidades ao
            nosso favor e cumprir nossa missão nessa vida.
          </li>
          <li>
            Ordem das Operações (Força & Importância)
            <ol className="list-decimal pl-6">
              <li>Numerologia</li>
              <li>Gematria</li>
              <li>Astrologia Oriental</li>
              <li>Astrologia Ocidental</li>
            </ol>
          </li>
          <li>
            Por exemplo, endereços de casas têm uma energia, Em geral, é melhor
            que o endereço some 6 = Lar & Família. Não é bom comprar ou
            permanecer em uma casa com energia 11 (Muito Emocional).{" "}
          </li>
          <li>
            Você atrairá mais dinheiro morando em um endereço que some 8.
            Desenhe ou coloque um número ao lado de um endereço (como com um
            marcador) para ajudar a mudar a energia.
          </li>
          <li>
            O número do seu Caminho de Vida (não reduzido) é a idade em que você
            terá um ponto de virada em sua vida. Exemplo: Uma pessoa nascida em
            28/03/1987 tem um ponto de virada na vida aos 38 anos
            (3+2+8+1+9+8+7=38/11).
          </li>
          <li>
            Os Caminhos de Vida 1, 3, 4 e 5 são Almas Jovens, os Caminhos de
            Vida 6 e 7 são onde as Almas começam a amadurecer, o Caminho de Vida
            8 é o teste da força e brilho de uma Alma, o Caminho de Vida 9 é o
            teste da maestria de uma Alma, os Caminhos de Vida 11, 22 e 33 são
            as Almas mais antigas.
          </li>
          <li>
            Seu Caminho de Vida atual revelará muito sobre suas vidas passadas e
            se você evoluiu.
          </li>
        </ul>
      </ReadingExplanationCollapse>
      <ReadingExplanationCollapse title="Explicações">
        <ul className="list-disc pl-4">
          <li>
            Caminho de vida: Seu propósito nessa encarnação, a energia que mais
            te afeta
          </li>
          <li>
            Energia parcial (do dia): Uma energia que te afeta em menor escala
          </li>
          <li>
            Ano pessoal: Energia que está te afetando esse ano, tente não ir
            contra ela (Ex. começar coisas num ano pessoal 9, fazer algo ilegal
            num ano pessoal 4){" "}
          </li>
          <li>
            O ultimo digito do seu ano de nascimento diz algo sobre sua
            infância. Ex. alguém que o ano termina em 5 (como 2005)
            provavelmente experienciou muitas mudanças e viagens.
          </li>
          <li>
            Caminho de vida {impureMasterNumberReduced}:{" "}
            {lifePathInfoMap[impureMasterNumberReduced]}
          </li>
          {numerology.isImpureMasterNumber && (
            <li>
              Terá energia parcial {numerology.lifePath}:{" "}
              {lifePathInfoMap[numerology.lifePath]}
            </li>
          )}
          <li>
            Energia parcial (do dia) {numerology.partialEnergy}:{" "}
            {partialEnergyInfoMap[numerology.partialEnergy]}
          </li>
          {numerology.partialEnergyUnreduced === 28 && (
            <li>
              De todas as energias 1 (1,10,19,28,37, etc.) o 28 é o número mais
              bem-sucedido financeiramente e é o número da riqueza - Bill Gates
              nasceu no dia 28, Steve Jobs e a Apple são caminhos de vida 28,
              Wall Street foi fundada em um dia 28, etc.
            </li>
          )}
          <li>
            Ano pessoal {numerology.personalYear}:{" "}
            {personalYearInfoMap[numerology.personalYear]}
          </li>
          {!isLandingPage && (
            <li>
              <Link
                className="underline text-secondary"
                href={`/learn/${impureMasterNumberReduced}`}
                target="_blank"
              >
                Aprenda mais sobre seu Caminho de Vida
              </Link>
            </li>
          )}
        </ul>
      </ReadingExplanationCollapse>
      <ReadingExplanationCollapse title="Números harmônicos e desarmônicos">
        <p className="text-lg text-center font-bold">
          Tabela de harmônias baseado no caminho de vida
        </p>
        <NumberCompatibilityTable
          numberCompatibility={numerology.lifePathCompatibility}
        />
        <div className="divider" />
        <p className="text-lg text-center font-bold">
          Tabela de harmônias baseado na energia parcial
        </p>
        <NumberCompatibilityTable
          numberCompatibility={numerology.dayCompatibility}
        />
      </ReadingExplanationCollapse>
    </div>
  );
};

const GematriaReading = ({
  gematria,
}: {
  gematria: ReadingResponseType["gematria"];
}) => {
  return (
    <div className="py-4 flex flex-col items-center gap-2 w-full bg-white rounded-md">
      <p className="font-bold text-xl text-center">
        Energia da primeira letra (a mais impactante):{" "}
        {gematria.firstLetterLowercaseValue !==
        gematria.firstLetterLowercaseValueReduced
          ? `${gematria.firstLetterLowercaseValue}/${gematria.firstLetterLowercaseValueReduced}`
          : gematria.firstLetterLowercaseValueReduced}
      </p>
      <p className="text-lg text-center">
        Energia da primeira letra (considerando-a capitalizada):{" "}
        {gematria.firstLetterUppercaseValue !==
        gematria.firstLetterUppercaseValueReduced
          ? `${gematria.firstLetterUppercaseValue}/${gematria.firstLetterUppercaseValueReduced}`
          : gematria.firstLetterUppercaseValueReduced}
      </p>
      <p className="text-lg text-center">
        Energia do nome:{" "}
        {gematria.lowerCaseNameValue !== gematria.lowerCaseNameValueReduced
          ? `${gematria.lowerCaseNameValue}/${gematria.lowerCaseNameValueReduced}`
          : gematria.lowerCaseNameValueReduced}
      </p>
      <p className="text-lg text-center">
        Energia do nome (considerando a primeira letra capitalizada):{" "}
        {gematria.upperCaseNameValue !== gematria.upperCaseNameValueReduced
          ? `${gematria.upperCaseNameValue}/${gematria.upperCaseNameValueReduced}`
          : gematria.upperCaseNameValueReduced}
      </p>
      <ReadingExplanationCollapse title="Explicações gerais e recomendações">
        <ul className="list-disc pl-4">
          <li>
            Estamos num mundo onde tudo é energia/frequência e pode ser reduzido
            a um número. A gematria pode ser aplicada em qualquer nome. Porém a
            energia não é definitiva, tudo gira em torno de probabilidades e o
            universo possui outras leis que nos afetam. A ideia é utilizar das
            probabilidades ao nosso favor e cumprir nossa missão nessa vida.
          </li>
          <li>
            Ordem das Operações (Força & Importância)
            <ol className="list-decimal pl-6">
              <li>Numerologia</li>
              <li>Gematria</li>
              <li>Astrologia Oriental</li>
              <li>Astrologia Ocidental</li>
            </ol>
          </li>
          <li>A primeira letra do seu nome é a mais impactante.</li>
          <li>
            O nome pelo qual você é conhecido (se possuí apelido por exemplo) é
            o que deve ser utilizado. Pense em atores e atrizes, eles não
            utilizam seus nomes de registro.
          </li>
        </ul>
      </ReadingExplanationCollapse>
      <ReadingExplanationCollapse title="Explicações">
        <ul className="list-disc pl-4">
          <li>
            Energia da primeira letra{" "}
            {gematria.firstLetterLowercaseValueReduced}:{" "}
            {partialEnergyInfoMap[gematria.firstLetterLowercaseValueReduced]}
          </li>
          <li>
            Energia da primeira letra capitalizada{" "}
            {gematria.firstLetterUppercaseValueReduced}:{" "}
            {partialEnergyInfoMap[gematria.firstLetterUppercaseValueReduced]}
          </li>
          <li>
            Energia do nome {gematria.lowerCaseNameValueReduced}:{" "}
            {partialEnergyInfoMap[gematria.lowerCaseNameValueReduced]}
          </li>
          <li>
            Energia do nome com a primeira letra capitalizada{" "}
            {gematria.upperCaseNameValueReduced}:{" "}
            {partialEnergyInfoMap[gematria.upperCaseNameValueReduced]}
          </li>
          {(gematria.firstLetterUppercaseValue === 28 ||
            gematria.lowerCaseNameValue === 28 ||
            gematria.upperCaseNameValue === 28) && (
            <li>
              De todas as energias 1 (1,10,19,28,37, etc.) o 28 é o número mais
              bem-sucedido financeiramente e é o número da riqueza - Bill Gates
              nasceu no dia 28, Steve Jobs e a Apple são caminhos de vida 28,
              Wall Street foi fundada em um dia 28, etc.
            </li>
          )}
        </ul>
      </ReadingExplanationCollapse>
    </div>
  );
};

const EasternAstrologyReading = ({
  zodiac,
  hour,
}: {
  zodiac: ReadingResponseType["zodiac"];
  hour: number;
}) => {
  const currentYearEnergy = isEnemyOrFriendSign(
    zodiac.easternZodiacCurrentYear,
    zodiac.easternEnemy,
    zodiac.friendSigns
  );

  const nextYearEnergy = isEnemyOrFriendSign(
    zodiac.easternZodiacNextYear,
    zodiac.easternEnemy,
    zodiac.friendSigns
  );

  const { characteristics, together } = easternTrineInfoMap[zodiac.trine];

  const signEmoji = signToEmojiMap[zodiac.easternZodiacYear.sign];
  const elementEmoji = elementToEmojiMap[zodiac.easternZodiacYear.element];

  return (
    <div className="py-4 flex flex-col items-center gap-2 w-full bg-white rounded-md">
      <p className="font-bold text-xl text-center">
        Signo {zodiac.easternZodiacYear.sign} {signEmoji} (energia número{" "}
        {zodiac.easternZodiacYear.numberEnergy}) -{" "}
        {zodiac.easternZodiacYear.element} {elementEmoji}
      </p>
      <p className="text-lg text-center">
        Signo mais desarmônico (inimigo) {zodiac.easternEnemy}{" "}
        {signToEmojiMap[zodiac.easternEnemy]}
      </p>
      <p className="text-lg text-center">
        Signo para se evitar (neutro) {zodiac.easternAvoid}{" "}
        {signToEmojiMap[zodiac.easternAvoid]}
      </p>
      <p className="text-lg text-center">
        Signos harmônicos{" "}
        {zodiac.friendSigns
          .filter((sign) => sign !== zodiac.easternZodiacYear.sign)
          .map((sign) => (
            <span key={sign} className="mr-2 inline-block">
              {sign} {signToEmojiMap[sign]}
            </span>
          ))}
      </p>
      <p className="text-lg text-center">
        Ano atual {zodiac.easternZodiacCurrentYear} (
        {currentYearEnergy === "desarmônico" ? (
          <div className="indicator">
            <span className="indicator-item badge badge-error">!!!</span>
            <span>{currentYearEnergy}</span>
          </div>
        ) : (
          currentYearEnergy
        )}
        ) {signToEmojiMap[zodiac.easternZodiacCurrentYear]}
      </p>
      <p className="text-lg text-center">
        Próximo ano {zodiac.easternZodiacNextYear} (
        {nextYearEnergy === "desarmônico" ? (
          <div className="indicator">
            <span className="indicator-item badge badge-error">!!!</span>
            <span>{nextYearEnergy}</span>
          </div>
        ) : (
          nextYearEnergy
        )}
        ) {signToEmojiMap[zodiac.easternZodiacNextYear]}
      </p>
      <ReadingExplanationCollapse title="ATENÇÃO! LEIA ESSAS RECOMENDAÇÕES">
        <ul className="list-disc pl-4">
          <li>
            Tudo possuí uma energia animal associada a si, objetos, lugares,
            marcas, pessoas, animais, etc. Para descobrir a energia de uma
            empresa/cidade/objeto, procure pelo seu ano de criação ou marcos
            importantes (independência do Brasil, constituição da República,
            etc)
          </li>
          <li>
            Ordem das Operações (Força & Importância)
            <ol className="list-decimal pl-6">
              <li>Numerologia</li>
              <li>Gematria</li>
              <li>Astrologia Oriental</li>
              <li>Astrologia Ocidental</li>
            </ol>
          </li>
          <li>
            <span className="font-bold">
              O quê significa uma energia ser desarmônica ou inimiga?
            </span>{" "}
            Pense em termos de música e cores (afinal, tudo no mundo é energia e
            vibração), existem notas musicais que quando tocadas juntas criam um
            som dissonante, não fazem bem ao ouvido. O mesmo para cores que
            quando postas junto criam muito contraste. Esse é o mesmo paralelo
            que pode ser feito entre seu zodíaco e o de outras pessoas/coisas.
          </li>
          <li>
            Quando percebemos muitas energias inimigas dentro da família,
            geralmente é karma sendo resgatado.
          </li>
          <li>Não viva em uma cidade ou estado com energia inimiga.</li>
          <li>Não compre/alugue um carro durante o seu ano inimigo.</li>
          <li>
            Não compre/alugue/dirija/ande em um carro fabricado no seu ano
            inimigo.
          </li>
          <li>Não compre/alugue uma casa durante o seu ano inimigo.</li>
          <li>
            Não compre/alugue/more em uma casa que foi construída no seu ano
            inimigo.
          </li>
          <li>
            Não compre/alugue, dirija/ande, viva/fique em uma casa/carro com
            energia inimiga em relação ao ano atual. Exemplo: Comprando um
            Corvette 2016 (Ano do Macaco) em 2022, um ano do Tigre.
          </li>
          <li>
            Não namore, tenha relações sexuais ou tenha filhos com alguém
            nascido no seu ano inimigo.
          </li>
          <li>
            Não comece uma empresa, relacionamento, não se case ou corra riscos
            durante o seu ano inimigo.
          </li>
          <li>Não tenha filhos durante o seu ano inimigo.</li>
          <li>
            Tente não se associar ao inimigo do animal do ano atual, isso
            inclui: lugares, coisas e pessoas nascidas em um ano que é inimigo
            ao ano atual. Exemplo: Se é 2020, ano do Rato, evite pessoas,
            lugares e coisas fundadas em anos do Cavalo.
          </li>
          <li>
            Não se associe a nada fundado em anos do seu signo inimigo, evite a
            todo custo. Exemplo: um Gato (signo) não deveria usar o sabonete
            Dove - fundado em 1957, ano do Galo.
          </li>
          <li>
            Não tenha um animal de estimação, faça uma tatuagem, coma ou
            associe-se ao animal do seu signo inimigo. <br /> Exemplo 1: um Galo
            (signo) não deveria ter um gato de estimação ou usar roupas com um
            gato estampado e vice-versa (Gato vs Galo). *Também um Gato (signo)
            não deveria comer frango. <br /> Exemplo 2: uma Cobra (signo) não
            deveria comer porco ou um Dragão (signo) não deveria ter um cachorro
            de estimação.
          </li>
          <li>
            É melhor manter-se discreto, não correr riscos, ficar de boa e não
            fazer ou começar nada importante nos anos do seu inimigo. Armadilhas
            para o seu ano inimigo podem começar no ano anterior, é melhor não
            lidar com o trio dos seus inimigos, pois eles ajudarão o seu inimigo
            no seu ano inimigo.
          </li>
          <li>
            As mesmas recomendações valem para quando você estiver num mês ou
            horário inimigo. (Inclusive pessoas nascidas no seu mês inimigo)
          </li>
          <li>
            Se você tiver um bom ano inimigo, o seu ano pessoal do animal será
            um mau ano.
          </li>
          <li>
            Você pode aprender muito com o seu signo inimigo, pois onde você é
            fraco, ele é forte, MAS é melhor evitar o seu signo inimigo ou
            qualquer coisa fundada sob o ano do seu signo inimigo. Energia
            inimiga é perigosa e afetará sua saúde, carreira, negócios, etc.{" "}
            <span className="font-bold">Ame-os de longe ❤️</span>
          </li>
        </ul>
      </ReadingExplanationCollapse>
      <ReadingExplanationCollapse title="Explicações">
        <p className="mb-3">
          {zodiac.easternZodiacYear.sign} {signEmoji}:{" "}
          {signToCharacteristicsMap[zodiac.easternZodiacYear.sign]}
        </p>
        <p className="mb-3">
          {zodiac.easternZodiacYear.element} {elementEmoji}:{" "}
          {easternElementInfoMap[zodiac.easternZodiacYear.element]}
        </p>
        <p className="text-black font-bold">Seu trio:</p>
        <p className="mb-3">Características: {characteristics}</p>
        <p>Juntos num trio: {together}</p>
      </ReadingExplanationCollapse>
      <ReadingExplanationCollapse title="Meses e horas harmônicas e desarmônicas">
        <div className="text-lg text-center">
          <p className="text-center">Meses harmônicos:</p>
          <ul className="flex flex-col items-center list-disc">
            {zodiac.friendMonths.map((month) => (
              <li className="text-base" key={month}>
                {month}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-lg text-center">
          Mês desarmônico {zodiac.enemyMonth}
        </p>
        {hour && (
          <>
            <div className="divider" />
            <div className="text-lg text-center">
              <p className="text-center">Horas harmônicas:</p>
              <ul className="flex flex-col items-center list-disc">
                {zodiac.friendHours.map((hour) => (
                  <li className="text-base" key={hour}>
                    {hour}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg text-center">
              Hora desarmônica {zodiac.enemyHour}
            </p>{" "}
          </>
        )}
      </ReadingExplanationCollapse>
    </div>
  );
};

const isEnemyOrFriendSign = (sign: Animal, enemy: Animal, trine: Animal[]) => {
  if (sign === enemy) return "desarmônico";

  if (trine.includes(sign)) return "harmônico";

  return "neutro";
};

const ReadingExplanationCollapse = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="relative flex gap-2 items-center w-full p-5 pb-0 text-base font-semibold border-t text-left md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {title}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden w-full`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="p-5 pt-0 leading-relaxed">{children}</div>
      </div>
    </>
  );
};
