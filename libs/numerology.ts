export type NumberEnergy = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22 | 33;
export type LifePath = 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22 | 33;

export type NumberCompatibility = {
  soulmate: number[];
  enemies: number[];
  friends: number[];
  loveAndHates: number[];
  "66And33": number[];
  syphonsEnergyFrom?: number;
};

// Maps a life path number to which age it's stage is active
// Eg. Life path 1's first stage is active until age 35, second stage until age 44, third stage until age 53 and forth stage until death
export const lifePathToStageMap: Record<LifePath, [number, number, number]> = {
  [1]: [35, 44, 53],
  [3]: [33, 42, 51],
  [4]: [32, 41, 50],
  [5]: [31, 40, 49],
  [6]: [30, 39, 48],
  [7]: [29, 38, 47],
  [8]: [28, 37, 46],
  [9]: [27, 36, 45],
  [11]: [34, 43, 52],
  [22]: [32, 41, 50],
  [33]: [30, 39, 48],
};

export const numberCompatibilityMap: Record<NumberEnergy, NumberCompatibility> =
  {
    [1]: {
      soulmate: [9],
      enemies: [4, 6, 7, 11],
      friends: [2, 3],
      loveAndHates: [8],
      ["66And33"]: [],
      syphonsEnergyFrom: undefined,
    },
    [2]: {
      soulmate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33],
      enemies: [],
      friends: [1, 3, 9],
      loveAndHates: [],
      ["66And33"]: [],
      syphonsEnergyFrom: undefined,
    },
    [3]: {
      soulmate: [],
      enemies: [],
      friends: [3, 1, 2, 9],
      loveAndHates: [],
      ["66And33"]: [4, 22],
      syphonsEnergyFrom: undefined,
    },
    [4]: {
      soulmate: [8],
      enemies: [1, 7, 9],
      friends: [22],
      loveAndHates: [],
      ["66And33"]: [3],
      syphonsEnergyFrom: 7,
    },
    [5]: {
      soulmate: [11],
      enemies: [8],
      friends: [7, 9, 33],
      loveAndHates: [6],
      ["66And33"]: [],
      syphonsEnergyFrom: 4,
    },
    [6]: {
      soulmate: [33],
      enemies: [1, 7],
      friends: [8, 9],
      loveAndHates: [5],
      ["66And33"]: [],
      syphonsEnergyFrom: 4,
    },
    [7]: {
      soulmate: [],
      enemies: [1, 2, 3, 4, 6, 7, 8, 22, 33],
      friends: [5, 9, 11],
      loveAndHates: [],
      ["66And33"]: [],
      syphonsEnergyFrom: undefined,
    },
    [8]: {
      soulmate: [4],
      enemies: [5, 7],
      friends: [6, 9, 22, 33],
      loveAndHates: [1],
      ["66And33"]: [],
      syphonsEnergyFrom: undefined,
    },
    [9]: {
      soulmate: [1],
      enemies: [4, 11, 22, 33],
      friends: [1, 2, 3, 4, 5, 6, 7, 8],
      loveAndHates: [],
      ["66And33"]: [],
      syphonsEnergyFrom: undefined,
    },
    [11]: {
      soulmate: [5],
      enemies: [1, 9],
      friends: [7, 22, 33],
      loveAndHates: [],
      ["66And33"]: [],
      syphonsEnergyFrom: undefined,
    },
    [22]: {
      soulmate: [],
      enemies: [7, 9],
      friends: [4, 8, 11, 33],
      loveAndHates: [],
      ["66And33"]: [3],
      syphonsEnergyFrom: undefined,
    },
    [33]: {
      soulmate: [6],
      enemies: [7, 9],
      friends: [5, 8, 11, 22],
      loveAndHates: [],
      ["66And33"]: [],
      syphonsEnergyFrom: undefined,
    },
  };

export const numberReducer = (number: number): NumberEnergy => {
  const isMasterNumber = number === 11 || number === 22 || number === 33;

  // Master numbers aren't reduced
  if (isMasterNumber) {
    return number;
  }

  // 20 is a hidden 11.
  if (number === 20) {
    return 11;
  }

  const numberString = number.toString();
  const numberArray = numberString.split("");
  const numberArrayNumber = numberArray.map((number) => Number(number));
  const numberSum = numberArrayNumber.reduce((acc, number) => acc + number, 0);

  if (numberSum === 20) {
    return 11;
  }

  return numberSum as NumberEnergy;
};

export const lifePathReducer = (number: number): LifePath => {
  const reducedNumber = numberReducer(number);

  //There's no 2 lifepath
  if (reducedNumber === 2) {
    return 11;
  }

  if (reducedNumber > 9) {
    return lifePathReducer(reducedNumber);
  }

  return reducedNumber as LifePath;
};

export const isImpure22 = (
  day: number,
  month: number,
  year: number,
  reducedDay: number
) => {
  const hasZerosRegex = /0/g;

  return (
    reducedDay === 4 ||
    hasZerosRegex.test(day.toString()) ||
    hasZerosRegex.test(month.toString()) ||
    hasZerosRegex.test(year.toString())
  );
};

export const isImpure33 = (
  day: number,
  month: number,
  year: number,
  reducedDay: number
) => {
  const hasZerosRegex = /0/g;

  return (
    reducedDay === 6 ||
    hasZerosRegex.test(day.toString()) ||
    hasZerosRegex.test(month.toString()) ||
    hasZerosRegex.test(year.toString()) ||
    day > 9 ||
    (month > 9 && month !== 11)
  );
};
