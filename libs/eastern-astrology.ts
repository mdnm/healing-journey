type IztroZodiac = [string, string];

export type EarthElement = "Fogo" | "Terra" | "Metal" | "Água" | "Madeira";

export type Animal =
  | "Rato"
  | "Boi"
  | "Tigre"
  | "Gato"
  | "Dragão"
  | "Serpente"
  | "Cavalo"
  | "Bode"
  | "Macaco"
  | "Galo"
  | "Cão"
  | "Porco";

export type Zodiac = {
  element: EarthElement;
  sign: Animal;
  numberEnergy: number;
};

export type AnimalHour =
  | "23:00 - 01:00 (00:59)"
  | "01:00 - 03:00 (02:59)"
  | "03:00 - 05:00 (04:59)"
  | "05:00 - 07:00 (06:59)"
  | "07:00 - 09:00 (08:59)"
  | "09:00 - 11:00 (10:59)"
  | "11:00 - 13:00 (12:59)"
  | "13:00 - 15:00 (14:59)"
  | "15:00 - 17:00 (16:59)"
  | "17:00 - 19:00 (18:59)"
  | "18:00 - 21:00 (20:59)"
  | "21:00 - 23:00 (22:59)";

export const ANIMAL_HOURS: readonly AnimalHour[] = Object.freeze([
  "23:00 - 01:00 (00:59)",
  "01:00 - 03:00 (02:59)",
  "03:00 - 05:00 (04:59)",
  "05:00 - 07:00 (06:59)",
  "07:00 - 09:00 (08:59)",
  "09:00 - 11:00 (10:59)",
  "11:00 - 13:00 (12:59)",
  "13:00 - 15:00 (14:59)",
  "15:00 - 17:00 (16:59)",
  "17:00 - 19:00 (18:59)",
  "18:00 - 21:00 (20:59)",
  "21:00 - 23:00 (22:59)",
]);

const mandarimToAnimalMap: Record<
  string,
  { sign: Animal; numberEnergy: number }
> = {
  yin: {
    sign: "Tigre",
    numberEnergy: 3,
  },
  wei: {
    sign: "Bode",
    numberEnergy: 8,
  },
  zi: {
    sign: "Rato",
    numberEnergy: 1,
  },
  shen: {
    sign: "Macaco",
    numberEnergy: 9,
  },
  you: {
    sign: "Galo",
    numberEnergy: 1,
  },
  woo: {
    sign: "Cavalo",
    numberEnergy: 7,
  },
  mao: {
    sign: "Gato",
    numberEnergy: 4,
  },
  si: {
    sign: "Serpente",
    numberEnergy: 6,
  },
  xu: {
    sign: "Cão",
    numberEnergy: 11,
  },
  chou: {
    sign: "Boi",
    numberEnergy: 2,
  },
  hai: {
    sign: "Porco",
    numberEnergy: 3,
  },
  chen: {
    sign: "Dragão",
    numberEnergy: 5,
  },
};

const mandarimToElementMap: Record<string, EarthElement> = {
  bing: "Fogo",
  ding: "Fogo",
  ji: "Terra",
  wu: "Terra",
  geng: "Metal",
  xin: "Metal",
  gui: "Água",
  ren: "Água",
  jia: "Madeira",
  yi: "Madeira",
};

export const easternEnemySignMap: Record<
  Animal,
  {
    enemy: Animal;
    avoid: Animal;
  }
> = {
  Rato: { enemy: "Cavalo", avoid: "Bode" },
  Boi: { enemy: "Bode", avoid: "Cavalo" },
  Tigre: { enemy: "Macaco", avoid: "Serpente" },
  Gato: { enemy: "Galo", avoid: "Dragão" },
  ["Dragão"]: { enemy: "Cão", avoid: "Gato" },
  Serpente: { enemy: "Porco", avoid: "Tigre" },
  Cavalo: { enemy: "Rato", avoid: "Boi" },
  Bode: { enemy: "Boi", avoid: "Rato" },
  Macaco: { enemy: "Tigre", avoid: "Porco" },
  Galo: { enemy: "Gato", avoid: "Cão" },
  Cão: { enemy: "Dragão", avoid: "Galo" },
  Porco: { enemy: "Serpente", avoid: "Macaco" },
};

export const easternTrines: {
  trine1: Animal[];
  trine2: Animal[];
  trine3: Animal[];
  trine4: Animal[];
} = {
  trine1: ["Rato", "Dragão", "Macaco"],
  trine2: ["Boi", "Serpente", "Galo"],
  trine3: ["Tigre", "Cavalo", "Cão"],
  trine4: ["Gato", "Bode", "Porco"],
};

export const easternTrineMap: Record<Animal, keyof typeof easternTrines> = {
  Rato: "trine1",
  Boi: "trine2",
  Tigre: "trine3",
  Gato: "trine4",
  Dragão: "trine1",
  Serpente: "trine2",
  Cavalo: "trine3",
  Bode: "trine4",
  Macaco: "trine1",
  Galo: "trine2",
  Cão: "trine3",
  Porco: "trine4",
};

export const signToEmojiMap: Record<Animal, string> = {
  Rato: "🐀",
  Boi: "🐂",
  Tigre: "🐅",
  Gato: "🐈",
  Dragão: "🐉",
  Serpente: "🐍",
  Cavalo: "🐎",
  Bode: "🐐",
  Macaco: "🐒",
  Galo: "🐓",
  Cão: "🐕",
  Porco: "🐖",
};

export const easternRulingMonthMap: Record<Animal, string> = {
  Rato: "6 de Dezembro - 5 de Janeiro",
  Boi: "6 de Janeiro - 3 de Fevereiro",
  Tigre: "4 de Fevereiro - 5 de Março",
  Gato: "6 de Março - 5 de Abril",
  Dragão: "6 de Abril - 5 de Maio",
  Serpente: "6 de Maio - 5 de Junho",
  Cavalo: "6 de Junho - 5 de Julho",
  Bode: "6 de Julho - 5 de Agosto",
  Macaco: "6 de Agosto - 5 de Setembro",
  Galo: "6 de Setembro - 5 de Outubro",
  Cão: "6 de Outubro - 5 de Novembro",
  Porco: "6 de Novembro - 5 de Dezembro",
};

export const easternRulingHourMap: Record<Animal, AnimalHour> = {
  Rato: "23:00 - 01:00 (00:59)",
  Boi: "01:00 - 03:00 (02:59)",
  Tigre: "03:00 - 05:00 (04:59)",
  Gato: "05:00 - 07:00 (06:59)",
  Dragão: "07:00 - 09:00 (08:59)",
  Serpente: "09:00 - 11:00 (10:59)",
  Cavalo: "11:00 - 13:00 (12:59)",
  Bode: "13:00 - 15:00 (14:59)",
  Macaco: "15:00 - 17:00 (16:59)",
  Galo: "17:00 - 19:00 (18:59)",
  Cão: "18:00 - 21:00 (20:59)",
  Porco: "21:00 - 23:00 (22:59)",
};

export const translateMandarimZodiac = (iztroZodiac: IztroZodiac): Zodiac => {
  const [element, animal] = iztroZodiac;

  return {
    element: mandarimToElementMap[element],
    ...mandarimToAnimalMap[animal],
  };
};

export const formatEasternZodiac = (zodiac: Zodiac) => {
  const { sign } = zodiac;

  return sign;
};
