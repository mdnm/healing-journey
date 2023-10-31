"use client";

import { ReadingResponseType } from "@/app/api/reading/route";
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
import { ReactNode, useRef, useState } from "react";
import toast from "react-hot-toast";
import { NumberCompatibilityTable } from "./NumberCompatibilityTable";

export default function CompleteReading() {
  const [isLoading, setIsLoading] = useState(false);
  const [reading, setReading] = useState<ReadingResponseType | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [hour, setHour] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);
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
        { date: Date; hour: AnimalHour; name: string },
        ReadingResponseType
      >("/reading", {
        date: formattedDate,
        hour,
        name,
        includeAdditional: true,
      });

      setReading(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log({
    additional: reading?.additional,
  });

  return (
    <main className="p-8 pb-24 w-full" id="reading">
      <section className="max-w-3xl mx-auto space-y-8 flex flex-col items-center bg-white p-3 rounded-md">
        <h2 className="sm:text-5xl text-4xl font-extrabold">Leitura Básica</h2>
        <div className="flex flex-col gap-4 w-full">
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
            <span>Seu primeiro nome ou apelido</span>
            <input
              type="text"
              placeholder="(Opcional) Seu primeiro nome ou apelido"
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
                <NumerologyReading numerology={reading.numerology} />
              )}
              {selectedTab === "gematria" && (
                <GematriaReading gematria={reading.gematria} />
              )}
              {selectedTab === "eastern-zodiac" && (
                <EasternAstrologyReading zodiac={reading.zodiac} />
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

const NumerologyReading = ({
  numerology,
}: {
  numerology: ReadingResponseType["numerology"];
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
      <div className="p-5 pt-0">
        <ul className="list-disc pl-4 flex flex-col gap-3">
          <li>
            Caminho de vida {impureMasterNumberReduced}:{" "}
            <div className="flex flex-wrap gap-2">
              {lifePathInfoMap[impureMasterNumberReduced].positiveQualities.map(
                (quality) => (
                  <span key={quality} className="badge badge-success">
                    {quality}
                  </span>
                )
              )}
              {lifePathInfoMap[impureMasterNumberReduced].negativeQualities.map(
                (quality) => (
                  <span key={quality} className="badge badge-error">
                    {quality}
                  </span>
                )
              )}
            </div>
          </li>
          {numerology.isImpureMasterNumber && (
            <li>
              Terá energia parcial {numerology.lifePath}:{" "}
              <div className="flex flex-wrap gap-2">
                {lifePathInfoMap[numerology.lifePath].positiveQualities.map(
                  (quality) => (
                    <span key={quality} className="badge badge-success">
                      {quality}
                    </span>
                  )
                )}
                {lifePathInfoMap[numerology.lifePath].negativeQualities.map(
                  (quality) => (
                    <span key={quality} className="badge badge-error">
                      {quality}
                    </span>
                  )
                )}
              </div>
            </li>
          )}
          <li>
            Energia parcial (do dia) {numerology.partialEnergy}:{" "}
            <div className="flex flex-wrap gap-2">
              {partialEnergyInfoMap[
                numerology.partialEnergy
              ].positiveQualities.map((quality) => (
                <span key={quality} className="badge badge-success">
                  {quality}
                </span>
              ))}
              {partialEnergyInfoMap[
                numerology.partialEnergy
              ].negativeQualities.map((quality) => (
                <span key={quality} className="badge badge-error">
                  {quality}
                </span>
              ))}
            </div>
          </li>
          <li>
            Ano pessoal {numerology.personalYear}:{" "}
            {personalYearInfoMap[numerology.personalYear]}
          </li>
        </ul>
      </div>
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
        {gematria.firstLetterLowercaseValueReduced}
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
        Energia do nome: {gematria.lowerCaseNameValueReduced}
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
      <div className="p-5 pt-0">
        <ul className="list-disc pl-4 flex flex-col gap-3">
          <li>
            Energia da primeira letra{" "}
            {gematria.firstLetterLowercaseValueReduced}:{" "}
            <div className="flex flex-wrap gap-2">
              {partialEnergyInfoMap[
                gematria.firstLetterLowercaseValueReduced
              ].positiveQualities.map((quality) => (
                <span key={quality} className="badge badge-success">
                  {quality}
                </span>
              ))}
              {partialEnergyInfoMap[
                gematria.firstLetterLowercaseValueReduced
              ].negativeQualities.map((quality) => (
                <span key={quality} className="badge badge-error">
                  {quality}
                </span>
              ))}
            </div>
          </li>
          <li>
            Energia da primeira letra capitalizada{" "}
            {gematria.firstLetterUppercaseValueReduced}:{" "}
            <div className="flex flex-wrap gap-2">
              {partialEnergyInfoMap[
                gematria.firstLetterUppercaseValueReduced
              ].positiveQualities.map((quality) => (
                <span key={quality} className="badge badge-success">
                  {quality}
                </span>
              ))}
              {partialEnergyInfoMap[
                gematria.firstLetterUppercaseValueReduced
              ].negativeQualities.map((quality) => (
                <span key={quality} className="badge badge-error">
                  {quality}
                </span>
              ))}
            </div>
          </li>
          <li>
            Energia do nome {gematria.lowerCaseNameValueReduced}:{" "}
            <div className="flex flex-wrap gap-2">
              {partialEnergyInfoMap[
                gematria.lowerCaseNameValueReduced
              ].positiveQualities.map((quality) => (
                <span key={quality} className="badge badge-success">
                  {quality}
                </span>
              ))}
              {partialEnergyInfoMap[
                gematria.lowerCaseNameValueReduced
              ].negativeQualities.map((quality) => (
                <span key={quality} className="badge badge-error">
                  {quality}
                </span>
              ))}
            </div>
          </li>
          <li>
            Energia do nome com a primeira letra capitalizada{" "}
            {gematria.upperCaseNameValueReduced}:{" "}
            <div className="flex flex-wrap gap-2">
              {partialEnergyInfoMap[
                gematria.upperCaseNameValueReduced
              ].positiveQualities.map((quality) => (
                <span key={quality} className="badge badge-success">
                  {quality}
                </span>
              ))}
              {partialEnergyInfoMap[
                gematria.upperCaseNameValueReduced
              ].negativeQualities.map((quality) => (
                <span key={quality} className="badge badge-error">
                  {quality}
                </span>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const EasternAstrologyReading = ({
  zodiac,
  hour,
}: {
  zodiac: ReadingResponseType["zodiac"];
  hour?: number;
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
        Signo {zodiac.easternZodiacYear.sign} {signEmoji} - (energia número{" "}
        {zodiac.easternZodiacYear.numberEnergy})
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
      <div className="p-5 pt-0">
        <p className="mb-3 mt-3">
          {zodiac.easternZodiacYear.sign} {signEmoji}:{" "}
          <div className="flex flex-wrap gap-2">
            {signToCharacteristicsMap[
              zodiac.easternZodiacYear.sign
            ].positiveQualities.map((quality) => (
              <span key={quality} className="badge badge-success">
                {quality}
              </span>
            ))}
            {signToCharacteristicsMap[
              zodiac.easternZodiacYear.sign
            ].negativeQualities.map((quality) => (
              <span key={quality} className="badge badge-error">
                {quality}
              </span>
            ))}
          </div>
        </p>
        <p className="mb-3">
          {zodiac.easternZodiacYear.element} {elementEmoji}:{" "}
          <div className="flex flex-wrap gap-2">
            {easternElementInfoMap[
              zodiac.easternZodiacYear.element
            ].positiveQualities.map((quality) => (
              <span key={quality} className="badge badge-success">
                {quality}
              </span>
            ))}
            {easternElementInfoMap[
              zodiac.easternZodiacYear.element
            ].negativeQualities.map((quality) => (
              <span key={quality} className="badge badge-error">
                {quality}
              </span>
            ))}
          </div>
        </p>
        <p className="text-black font-bold">Seu trio:</p>
        <p className="mb-3">Características: {characteristics}</p>
        <p>Juntos num trio: {together}</p>
      </div>
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
