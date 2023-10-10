import { astro } from "iztro";
import { NextRequest, NextResponse } from "next/server";
import {
  Animal,
  AnimalHour,
  Zodiac,
  easternEnemySignMap,
  easternRulingHourMap,
  easternRulingMonthMap,
  easternTrineMap,
  easternTrines,
  translateMandarimZodiac,
} from "../../../libs/eastern-astrology";
import {
  LifePath,
  NumberCompatibility,
  NumberEnergy,
  isImpure22,
  isImpure33,
  lifePathReducer,
  lifePathToStageMap,
  numberCompatibilityMap,
  numberReducer,
} from "../../../libs/numerology";

export const dynamic = "force-dynamic";

export type ReadingResponseType = {
  numerology: {
    lifePathUnreduced: NumberEnergy;
    lifePath: LifePath;
    isImpureMasterNumber: boolean;
    partialEnergyUnreduced: NumberEnergy;
    partialEnergy: NumberEnergy;
    lifeStage: NumberEnergy;
    personalYear: LifePath;
    lifePathCompatibility: NumberCompatibility;
    dayCompatibility: NumberCompatibility;
  };
  zodiac: {
    easternZodiacYear: Zodiac;
    trine: keyof typeof easternTrines;
    easternEnemy: Animal;
    easternAvoid: Animal;
    friendSigns: Animal[];
    friendMonths: string[];
    enemyMonth: string;
    friendHours: AnimalHour[];
    enemyHour: AnimalHour;
    easternZodiacCurrentYear: Animal;
    easternZodiacNextYear: Animal;
  };
};

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.date) {
    return NextResponse.json(
      { error: "A sua data de nascimento é obrigatória" },
      { status: 400 }
    );
  }

  const date = new Date(body.date);

  if (date.getFullYear() < 1900) {
    return NextResponse.json(
      { error: "O ano deve ser maior que 1900" },
      { status: 400 }
    );
  }

  const hour = Number(body.hour);

  if (body.hour && isNaN(hour)) {
    return NextResponse.json(
      { error: "A hora informada é invalida" },
      { status: 400 }
    );
  }

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const reducedDay = numberReducer(day);
  const reducedMonth = numberReducer(month);
  const reducedYear = numberReducer(year);
  const lifePathWithoutReducingDay = numberReducer(
    day + reducedMonth + reducedYear
  );
  const lifePathUnreduced = (reducedDay +
    reducedMonth +
    reducedYear) as NumberEnergy;
  const lifePath = lifePathReducer(lifePathUnreduced);

  const astrolabe = astro.astrolabeBySolarDate(
    `${date.getFullYear()}-${date.getMonth() + 1}-${day}`,
    hour,
    "male",
    true,
    "en-US"
  );

  const easternZodiacHour = translateMandarimZodiac(
    astrolabe.rawDates.chineseDate.hourly
  );
  const easternZodiacMonth = translateMandarimZodiac(
    astrolabe.rawDates.chineseDate.monthly
  );
  const easternZodiacYear = translateMandarimZodiac(
    astrolabe.rawDates.chineseDate.yearly
  );

  const { enemy: easternEnemy, avoid: easternAvoid } =
    easternEnemySignMap[easternZodiacYear.sign];

  const trine = easternTrineMap[easternZodiacYear.sign];

  const friendSigns = easternTrines[trine];

  const friendMonths = easternTrines[
    easternTrineMap[easternZodiacMonth.sign]
  ].map((sign) => easternRulingMonthMap[sign]);
  const enemyMonthSign = easternEnemySignMap[easternZodiacMonth.sign].enemy;
  const enemyMonth = easternRulingMonthMap[enemyMonthSign];

  const friendHours = easternTrines[
    easternTrineMap[easternZodiacHour.sign]
  ].map((sign) => easternRulingHourMap[sign]);
  const enemyHour =
    easternRulingHourMap[easternEnemySignMap[easternZodiacHour.sign].enemy];

  const attitudeNumber = numberReducer(reducedDay + reducedMonth);

  const isImpureMasterNumber =
    lifePathWithoutReducingDay === 22 ||
    lifePathWithoutReducingDay === 33 ||
    (lifePath === 22 && isImpure22(day, month, year, reducedDay)) ||
    (lifePath === 33 && isImpure33(day, month, year, reducedDay));

  const universalMonth = numberReducer(reducedMonth + reducedYear);

  const today = new Date();
  const currentYear = today.getFullYear();
  const thisYearsBirthday = new Date(
    `${currentYear}-${date.getMonth() + 1}-${day}`
  );

  const astrolabeCurrentYear = astro.astrolabeBySolarDate(
    `${currentYear}-08-08`,
    hour,
    "male",
    true,
    "en-US"
  );

  const easternZodiacCurrentYear = translateMandarimZodiac(
    astrolabeCurrentYear.rawDates.chineseDate.yearly
  );

  const astrolabeNextYear = astro.astrolabeBySolarDate(
    `${currentYear + 1}-08-08`,
    hour,
    "male",
    true,
    "en-US"
  );

  const easternZodiacNextYear = translateMandarimZodiac(
    astrolabeNextYear.rawDates.chineseDate.yearly
  );

  const alreadyWentThroughBirthDay = today > thisYearsBirthday;

  const personalYearForCalculation = alreadyWentThroughBirthDay
    ? today.getFullYear()
    : today.getFullYear() - 1;

  const personalYear = lifePathReducer(
    reducedDay + reducedMonth + numberReducer(personalYearForCalculation)
  );

  const firstStage = lifePathReducer(reducedDay + reducedMonth);

  const secondStage = lifePathReducer(reducedDay + reducedYear);

  const thirdStage = lifePathReducer(firstStage + secondStage);

  const fourthStage = lifePathReducer(reducedMonth + reducedYear);

  const currentAge = alreadyWentThroughBirthDay
    ? today.getFullYear() - date.getFullYear()
    : today.getFullYear() - date.getFullYear() - 1;

  const lifePathToStage = lifePathToStageMap[lifePath];

  const lifePathStage = lifePathToStage.find((stage) => currentAge <= stage);

  const lifePathStageIndex = lifePathToStage.indexOf(lifePathStage);

  const lifePathStageNumber =
    lifePathStageIndex === -1 ? 4 : lifePathStageIndex + 1;

  const [first, second, third] = lifePathToStage;

  const lifeStage =
    lifePathStageNumber === 1
      ? firstStage
      : lifePathStageNumber === 2
      ? secondStage
      : lifePathStageNumber === 3
      ? thirdStage
      : fourthStage;

  // const stagesString = `1st stage 0-${first}, 2nd stage ${
  //   first + 1
  // }-${second}, 3rd stage ${second + 1}-${third}, 4th stage ${third + 1}+`;

  const lifePathCompatibility = numberCompatibilityMap[lifePath];

  const dayCompatibility = numberCompatibilityMap[reducedDay];

  //let lowerCaseNameValue = null;
  //let upperCaseNameValue = null;

  if (body.name) {
    // const firstCharacter = body.name[0];
    // const firstCharacterLowercaseNumber =
    //   firstCharacter.toLocaleLowerCase().charCodeAt(0) - 96;
    // const firstCharacterUppercaseNumber = firstCharacterLowercaseNumber + 26;
    // const reducedLower = numberReducer(firstCharacterLowercaseNumber);
    // const reducedUpper = numberReducer(firstCharacterUppercaseNumber);
    // lowerCaseNameValue =
    //   firstCharacterLowercaseNumber !== reducedLower
    //     ? `${firstCharacterLowercaseNumber}/${reducedLower}`
    //     : reducedLower
    // upperCaseNameValue = firstCharacterUppercaseNumber !== reducedUpper
    //     ? `${firstCharacterUppercaseNumber}/${reducedUpper}`
    //     : reducedUpper
  }

  try {
    return NextResponse.json<ReadingResponseType>(
      {
        numerology: {
          lifePathUnreduced,
          lifePath,
          isImpureMasterNumber,
          partialEnergyUnreduced: day as NumberEnergy,
          partialEnergy: reducedDay,
          lifeStage,
          personalYear,
          lifePathCompatibility,
          dayCompatibility,
        },
        zodiac: {
          easternZodiacYear,
          trine,
          easternEnemy,
          easternAvoid,
          friendSigns,
          friendMonths,
          enemyMonth,
          friendHours,
          enemyHour,
          easternZodiacCurrentYear: easternZodiacCurrentYear.sign,
          easternZodiacNextYear: easternZodiacNextYear.sign,
        },
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Algo deu errado" }, { status: 500 });
  }
}
