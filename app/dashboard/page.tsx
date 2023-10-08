"use client";

import {
  ANIMAL_HOURS,
  Animal,
  AnimalHour,
  signToEmojiMap,
} from "@/libs/eastern-astrology";
import { useState } from "react";
import toast from "react-hot-toast";
import apiClient from "../../libs/api";
import { NumberCompatibility } from "../../libs/numerology";
import { ReadingResponseType } from "../api/reading/route";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server component which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [reading, setReading] = useState<ReadingResponseType | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [hour, setHour] = useState<number | null>(null);
  const [rating, setRating] = useState(5);
  const [ratingReason, setRatingReason] = useState("");
  const [hasRated, setHasRated] = useState(false);

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
      });

      setReading(data);
    } catch (error) {
      console.log(error);
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
      toast.success("Seu feedback foi enviado com sucesso, obrigado!");
      setHasRated(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-3xl mx-auto space-y-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">Leitura Rápida</h1>

        <div className="flex flex-col items-center gap-2 w-full">
          <span>Sua data de nascimento*</span>
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
            <option value={null}>Sua hora de nascimento</option>
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
        <button
          className="btn btn-primary btn-lg plausible-event-name=Reading"
          onClick={() => handleReading()}
        >
          {isLoading && (
            <span className="loading loading-spinner loading-xs"></span>
          )}
          Fazer leitura
        </button>
        {reading && (
          <>
            <NumerologyReading numerology={reading.numerology} />
            <EasternAstrologyReading zodiac={reading.zodiac} hour={hour} />
            {!hasRated && (
              <>
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
              </>
            )}
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
  return (
    <div className="mt-4 flex flex-col items-center gap-2 w-full">
      <h2 className="font-bold text-2xl">Numerologia</h2>
      <p className="font-bold text-xl text-center">
        Caminho de vida:{" "}
        {numerology.lifePathWithoutReducingDay !== numerology.lifePath
          ? `${numerology.lifePathWithoutReducingDay}/${numerology.lifePath}`
          : numerology.lifePath}
      </p>
      <p className="text-lg text-center">
        Energia parcial (do dia): {numerology.partialEnergy}
      </p>
      <p className="text-lg text-center">
        Ano pessoal: {numerology.personalYear}
      </p>
      <p className="text-lg text-center">
        Estágio de vida: {numerology.lifeStage}
      </p>
      <p className="text-lg text-center font-bold">
        Tabela de harmônias baseado no caminho de vida
      </p>
      <NumberCompatibilityTable
        numberCompatibility={numerology.lifePathCompatibility}
      />
      <p className="text-lg text-center font-bold">
        Tabela de harmônias baseado na energia parcial
      </p>
      <NumberCompatibilityTable
        numberCompatibility={numerology.dayCompatibility}
      />
    </div>
  );
};

const NumberCompatibilityTable = ({
  numberCompatibility,
}: {
  numberCompatibility: NumberCompatibility;
}) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table text-lg text-center">
        <thead>
          <tr className="text-lg text-center">
            <th>Categoria</th>
            <th>Números</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <td>Alma gêmea (energia mais harmônica)</td>
            <td>{numberCompatibility.soulmate.join(", ")}</td>
          </tr>
          <tr className="hover">
            <td>Energias desarmônicas</td>
            <td>{numberCompatibility.enemies.join(", ")}</td>
          </tr>
          <tr className="hover">
            <td>Energias harmônicas</td>
            <td>{numberCompatibility.friends.join(", ")}</td>
          </tr>
          {numberCompatibility.loveAndHates.length > 0 && (
            <tr className="hover">
              <td>Podem estar harmônia ou desarmonia</td>
              <td>{numberCompatibility.loveAndHates.join(", ")}</td>
            </tr>
          )}
          {numberCompatibility["66And33"].length > 0 && (
            <tr className="hover">
              <td>66% harmônia e 33% desarmonia</td>
              <td>{numberCompatibility["66And33"].join(", ")}</td>
            </tr>
          )}
          {numberCompatibility.syphonsEnergyFrom && (
            <tr className="hover">
              <td>Você &quot;rouba&quot; energia do número</td>
              <td>{numberCompatibility.syphonsEnergyFrom}</td>
            </tr>
          )}
        </tbody>
      </table>
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
  return (
    <div className="mt-4 flex flex-col items-center gap-2 w-full">
      <h2 className="font-bold text-2xl">Astrologia Oriental</h2>
      <p className="font-bold text-xl text-center">
        Signo {zodiac.easternZodiacYear.sign} (energia número{" "}
        {zodiac.easternZodiacYear.numberEnergy}){" "}
        {signToEmojiMap[zodiac.easternZodiacYear.sign]}
      </p>
      <p className="text-lg text-center">
        Signo mais desarmônico (inimigo) {zodiac.easternEnemy}{" "}
        {signToEmojiMap[zodiac.easternEnemy]}
      </p>
      <p className="text-lg text-center">
        Signo desarmônico (evite) {zodiac.easternAvoid}{" "}
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
      <div className="divider" />
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
      <p className="text-lg text-center">Mês desarmônico {zodiac.enemyMonth}</p>
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
      <div className="divider" />
      <p className="text-lg text-center">
        Ano atual {zodiac.easternZodiacCurrentYear} (
        {isEnemyOrFriendSign(
          zodiac.easternZodiacCurrentYear,
          zodiac.easternEnemy,
          zodiac.friendSigns
        )}
        ) {signToEmojiMap[zodiac.easternZodiacCurrentYear]}
      </p>
      <p className="text-lg text-center">
        Próximo ano {zodiac.easternZodiacNextYear} (
        {isEnemyOrFriendSign(
          zodiac.easternZodiacNextYear,
          zodiac.easternEnemy,
          zodiac.friendSigns
        )}
        ) {signToEmojiMap[zodiac.easternZodiacNextYear]}
      </p>
    </div>
  );
};

const isEnemyOrFriendSign = (sign: Animal, enemy: Animal, trine: Animal[]) => {
  if (sign === enemy) return "desarmônico";

  if (trine.includes(sign)) return "harmônico";

  return "neutro";
};
