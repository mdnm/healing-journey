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

export const elementToEmojiMap: Record<EarthElement, string> = {
  Fogo: "🔥",
  Terra: "🌱",
  Metal: "🔩",
  Água: "💧",
  Madeira: "🪵",
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

export const signToCharacteristicsMap: Record<Animal, string> = {
  Rato: "Quando em harmonia: Inteligente, Adaptável, Perspicaz, Determinado, Astuto, Versátil, Riqueza, Fortuna. Quando em desarmonia: Conta meias-verdades, Muito manipulador, Joga dos dois lados, Teimoso, Nervosismo, Instabilidade, Ardiloso, Ganancioso",
  Boi: "Quando em harmonia: Forte, Confiável, Franco, Leal, Determinado, Honesto, Responsável, Lutador. Quando em desarmonia: Gosta de manipular, Mesquinho, Teimoso, Má comunicação, Egoísta, Violento, Julgador, Pudico, Obstinado, Lento (como uma tartaruga)",
  Tigre:
    "Quando em harmonia: Franco, Corajoso, Competitivo, Confiante, Imprevisível, Muito atraente. Quando em desarmonia: Falsamente inteligente, Temperamento curto, Arrogante, Ansioso, Imprudente, Lobo solitário, Malvado, Teimoso, Egoista, Excesso de confiança",
  Gato: "Quando em harmonia: O gênio, Psicólogo natural, Inteligente, Fiel, Intuitivo, Boa fortuna, Quieto, Responsável, Sagaz, Vigilante, Sobrevivente. Quando em desarmonia: Joga jogos mentais, Vaidoso, Inseguro, Pessimista, Hesitante, Tende a desperdiçar dinheiro, Medo (Daí o termo 'Scaredy-cat' ou Gato medroso)",
  Dragão:
    "Quando em harmonia: Confiante, Inteligente, Alfa, Apaixonado, Carismático, Energético, Poderoso. Quando em desarmonia: Hipócrita, Rude, Mandão, Impetuoso, Elusivo, Inflexível, Exigente, Complicado, Enérgico, Arrogante, Implacável",
  Serpente:
    "Quando em harmonia: Signo mais sábio, Inteligente, Intuitivo, Enigmático, Hipnotizante, Observador calmo, Furtivo, Estável, Simpático, Intuitivo. Quando em desarmonia: Usa manipulação, Guarda rancores, Busca vingança, Materialista, Vaidoso, Sorrateiro, Ciumento, Ganancioso, Exagera",
  Cavalo:
    "Quando em harmonia: Honesto, Franqueza, Animado, Positivo, Sagaz, Ativo, Determinado, Resistência, Energético, Caloroso, Vívido. Quando em desarmonia: Negação, Inconsistente, Egoísta, Impaciente, Impulsivo, Superficial, Iludido",
  Bode: "Quando em harmonia: Inteligente, Bonita, Romântica, Calma, Encantadora, Pateta/engraçado, Equilibrado. Quando em desarmonia: O signo mais frouxo, Usa manipulação emocional, Indeciso, Preguiçoso, Tímido, Crédulo, Promíscuo, Seguidor, Sempre tem uma vida difícil, Tímido, Temperamental, Preocupa-se demais",
  Macaco:
    "Quando em harmonia: Popular, Humorístico, Confiante, Inteligente, Curioso, Brincalhão, Social, Corajoso. Quando em desarmonia: Mentiroso patológico, Desconfiado, Oportunista, Manipulador, Ciumento, Egoísta, Intrometido, Vaidoso, Autoabsorvido",
  Galo: "Quando em harmonia: Observador, Honesto, Humorístico, Muito leal, Trabalhador, Encantador, Corajoso, Independente, Falador, Extrovertido, Lutador. Quando em desarmonia: Narcisista, Hipócrita, Convencido, Arrogante, Imprudente, Temperamento ruim, Controlador, De mente fechada, Excessivamente agressivo, Exigente",
  Cão: "Quando em harmonia: Signo mais leal, Agradável, Honesto, Comprometido, Protetor, Sincero, Útil, Sagaz, Cooperativo, Confiável, Trabalhador. Quando em desarmonia: Exagera, Falso, Paranoico, Teimoso, Excessivamente agressivo, Morde a língua",
  Porco:
    "Quando em harmonia: Signo mais sortudo, Inteligente, Criativo, Elegante, Compassivo, Generoso, Amigável, Honesto, Sensual, Responsável, Humilde. Quando em desarmonia: Volúvel, Inseguro, Traidor, Crédulo, Infiel, Materialista, Impulsivo, Ingênuo, Emocional, Autoindulgente, Facilmente influenciado, Preguiçoso, Despreza os outros.",
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

export const easternTrineInfoMap: Record<
  keyof typeof easternTrines,
  { characteristics: string; together: string }
> = {
  trine1: {
    characteristics:
      "Quando em harmonia: Os Fazedores, Poderosos, Bons Líderes, Inteligentes, Eloquentes, Imprevisíveis, Carismáticos, Autoritários, Confiantes, Artísticos. Quando em desarmonia: Agressivos, Eloquentes, Vingativos, Ciumentos, Enganosos, Egoístas, Manipuladores.",
    together:
      "Sozinhos: O Macaco é Preguiçoso, O Dragão é Insensível, O Rato Tem o Boi como alma gêmea. Juntos: São Criativos e Inovadores, O Rato Traz Todas As Ideias, O Dragão Traz Poder, o Macaco Ajuda a Executar os Planos.",
  },
  trine2: {
    characteristics:
      "Quando em harmonia: Leais, Trabalhadores, Pacientes, Líderes, Resistentes, Firmes, Determinados, Filosóficos, Moralmente Íntegros, Modestos, Muito Trabalhadores. Quando em desarmonia: Super-Agressivos, Mesquinhos, Opiniões Fixas, Egoístas, Autojustos, Vaidosos, De Mente Fechada, Julgadores.",
    together:
      "Sozinhos: O Galo Tem Visão Estreita, A Cobra Busca Vingança, O Boi Está Junto do Rato. Juntos: Tem Sucesso Profissional e Nos Negócios.",
  },
  trine3: {
    characteristics:
      "Quando em harmonia: Humanitários, Leais, Dinâmicos, Honrados, Independentes, Protetores, Produtivos. Quando em desarmonia: Impulsivos, Teimosos, Desagradáveis, Rebeldes, Excessivamente Sensíveis, Ansiosos, Briguentos, Desagradáveis.",
    together:
      "Sozinhos: O Tigre Está Por Conta Própria, O Cavalo É Teimoso Demais Para Cooperar, O Cão Está Correndo Por Aí. Juntos: São Guerreiros Competitivos e Lutadores Totalmente Voltados Para Ação.",
  },
  trine4: {
    characteristics:
      "Quando em harmonia: Pacificadores, Compassivos, De Natureza Calma, Bem-Educados, Artísticos, Criativos, Empáticos, Táticos, Sensatos, Prudentes. Quando em desarmonia: Ingênuos, Indecisos, Sensíveis, Pessimistas, Fazem Abnegação, Crédulos.",
    together:
      "Sozinhos: O Porco É O Diplomata Social/Capitalista, A Cabra Traz A Aparência & Dinheiro, O Gato Trás Tudo. Juntos: A Trindade Mais Bem-Sucedida E É A Única Trindade Que Realmente Trabalha Junta.",
  },
};

export const easternElementInfoMap: Record<EarthElement, string> = {
  Fogo: "Quando em harmonia: Líder, forte, aventureiro, inquieto, competitivo, otimista, dinâmico, entusiasmado, sedutor, afetuoso, dá tudo em relacionamentos, inspira outros com ações determinadas, atrai pessoas como um ímã. Quando em desarmonia: Estressado facilmente, impaciente, temperamento rápido, baixa tolerância à frustração, atitude do tipo 'aqui e agora'.",
  Terra:
    "Quando em harmonia: Estável, perfeccionista, sábio, paciente, cuidadoso, leal, confiável, coordenado, leva as responsabilidades a sério, sacrifica-se pelos outros, pensador claro, as pessoas vêm até você em busca de conselhos, confia na lógica em vez das emoções. Quando em desarmonia: Controlador, quer controlar o próprio destino, não confia na própria intuição, super analisa os parceiros românticos, mas uma vez que a confiança é conquistada, eles podem confiar em você para sempre.",
  Metal:
    "Quando em harmonia: Flexível, concentrado, determinado, perseverante, reservado, sofisticado, independente, cuida dos entes queridos, não pede ajuda aos outros, gosta de luxo, conforto e liberdade, cria seu próprio sucesso. Quando em desarmonia: Teimoso, exigente, retalia rapidamente, precisa que seu parceiro romântico siga sua liderança.",
  Água: "Quando em harmonia: Adaptável, empático, sensível, criativo, intuitivo, fala muito, calmo, passivo, ganha confiança/afeto dos outros facilmente, as pessoas seguem sua liderança, faz todos se sentirem especiais, influencia os pensamentos das pessoas. Quando em desarmonia: Manipulador, Indeciso, sempre tenta ser agradável e fazer todos felizes, o que leva à depressão.",
  Madeira:
    "Quando em harmonia: Social, ativo, autoconfiante, dinâmico, mantém uma atitude positiva, de mente aberta, profissionalmente organizado, excelente amigo ou colega, sempre crescendo e progredindo, orientado para casamento e família. Quando em desarmonia: Se apega rapidamente ao parceiro, trabalha demais, passivo, facilmente influenciado.",
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
