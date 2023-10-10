export type NumberEnergy =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 11
  | 22
  | 33
  | number;
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

export const lifePathInfoMap: Record<LifePath, string> = {
  [1]: "Quando em harmonia: Energia masculina, Líder, Agressivo, Atleta, Corpo atlético, Inícios, Força de vontade, Ativo, Ambicioso, Confiante, Executor, Trabalhador árduo, Mente focada, Inteligência média, Alto desejo sexual, Lutador, Debatedor, Independente. Quando em desarmonia: Arrogante, Desagradável, Problemas de raiva, Gosta de discutir, Teimoso, Egoísta, Antagonista, Bully, Ama beber (pode ser alcoólatra), Faz muitos inimigos.",
  [3]: "Quando em harmonia: Criança, Comediante, Social, Criativo, Comunicação, Promoção, Escritor, Palestrante, Pessoa simples, Odeia responsabilidades. Quando em desarmonia: Traidor, Falta de lógica, Falta de disciplina, Imaturo, Temperamental, Mentalidade criminosa, Ganancioso, Fofoqueiro, Ódio, Ciúmes, Infantil, Mesquinho, 'Ama muito as crianças'.",
  [4]: "Quando em harmonia: Lei e ordem, Militar, Governo, Soldado, Policial, Trabalhador árduo, Próspero, Disciplinado, Organizado, Inteligente, Pouco criativo, Lógico, Fisicamente musculoso, Prático, Alta libido, Severo, Emocionalmente reservado. Quando em desarmonia: Ciumento, Violento, Teimoso, Chamará a polícia e processará os outros.",
  [5]: "Quando em harmonia: Viagem, Sexo, Beleza, Mudança, Saúde, Boa sorte, Entretenimento, Festa, Hospitalidade, Liberdade, Aventureiro, Encantador, Social, Muito sexual, Sagaz, Vendedor nato. Quando em desarmonia: Toma riscos sem pensar muito, Indeciso, Irresponsável, Inquieto, Imprevisível, Destruidor de lares, Guerra, Ciumento, Míope, Festeiro: Viciado em drogas ou alcoólatra.",
  [6]: "Quando em harmonia: Família, Lar, Amizade, Fertilidade, Caseiro, Ermitão, Nutridor, Amoroso, Responsável, Moral, Orientado para a família, Inteligência baixa na média (10% são gênios). Quando em desarmonia: Preguiçoso, Teimoso, Precisa de apreciação, Gula.",
  [7]: "Quando em harmonia: Solitário, Gênio, Muito inteligente, Introvertido, Intuitivo, Professor, Azarado, Silencioso, Espiritual, Erudito. Quando em desarmonia: Problema com jogos de azar, Má comunicação, Ruim em relacionamentos, Frio, Vive no passado, Cético, Direto, Desonesto, Descrente, Fofoqueiro, Mal, Esconde seus motivos, Sarcástico, Pervertido, Psicopata, Paranoico.",
  [8]: "Quando em harmonia: Dinheiro, Poder, Karma, Equilíbrio, Empresário, Habilidade executiva, Líder, Materialista, Vigor, Bom julgamento. Quando em desarmonia: Agressivo, Insensível, Abusivo, Cruel, Ignorante, Possessivo, Controlador, Vingativo, Ganancioso, Abusa do poder, Oportunista, Leva Vantagem.",
  [9]: "Quando em harmonia: Se adapta a tudo, Finalizações, Morte, Realidade, Ilusão, Vice presidente: lidera por trás dos panos, Bom líder, Bom seguidor, Trás a melhor versão dos outros, Artístico, Compassivo. Quando em desarmonia: Introvertido, A ovelha negra, Guarda rancor, Problemas com vícios e maus hábitos, Emocional, Dramático, O Ego toma conta, Amargo, Mentiroso, Possessivo, Violento, Rancoroso.",
  [11]: "Quando em harmonia: Mestre Visionário, Psíquico, Emocional, Consegue fazer os outros emocionais. Carismático, Atleta, Masculino, Líder espiritual, Vendedor nato. Quando em desarmonia: Emocionalmente instável, Instinto assassino, Continuação de guerras (5)",
  [22]: "Quando em harmonia: Mestre Construtor/Destruidor, Mestre Conquistador, Poderoso, Manifestação, Auto confiante, Body builder, Bom com detalhes, Líder, Restrições. Quando em desarmonia: Esconde seus motivos, Complexo de inferioridade, Malvado, Líder de gangues, Sensível, Fecha portas para coisas/relacionamentos, Teimoso, Impiedoso, Não gosta de receber conselhos.",
  [33]: "Quando em harmonia: Mestre Professor, Mestre Influenciador: Tem o poder de mudar a opinião pública, Líder, QI alto, Iluminado, Alma avançada, Maior nível da consciência humana: Conexão com Corpo, Mente e Alma, Conhece muito, Orientado para a família, Muito criativo. Quando em desarmonia: O Ego toma conta/egoísta, Tirano, Ditador, Paranoico, Teimoso, Descuidado, Conta 'mentiras brancas', Raramente dá segundas chances.",
};

export const partialEnergyInfoMap: Record<NumberEnergy, string> = {
  ...lifePathInfoMap,
  [2]: "Quando em harmonia: Energia feminina, Pacífico, Equilibrado, Passivo, Amigável, Suave, Protetor, Útil, Intuitivo, Modesto, Arrumado, Diplomático, Sensível, Vê ambos os lados, Bom pai, Bom seguidor. Quando em desarmonia: Facilmente machucado, Tímido, Inseguro, Introvertido, Falha quando usa violência, Má liderança, Mesquinho, Promíscuo.",
};

export const personalYearInfoMap: Record<LifePath, string> = {
  [1]: "O início de um novo ciclo de 9 anos. Este ano é tudo sobre novos começos, tomar ação, ser agressivo. Alta possibilidade de brigas, discussões e disputas. Ótimo ano para começar novas coisas: empresa, casamento, relacionamentos, uma família, comprar uma nova casa/carro, etc. Qualquer coisa iniciada este ano tem um grande potencial.",
  [3]: "Um ótimo ano para todas as formas de comunicação: escrita, fala em público, promoção, networking. Você será mais sociável este ano, não é uma época para ser um eremita. Bom ano para ter um filho. Tenha relações sexuais seguras, as chances são maiores para DSTs.",
  [4]: "Este ano é tudo sobre trabalhar duro, manifestar e construir. Você será menos social este ano. Não quebre a lei este ano, pois você tem uma chance maior de ir para a prisão ou de se meter em problemas este ano. 4 é lei e ordem.",
  [5]: "Este ano é sobre mudança - muita mudança, viajar e ter relações sexuais, mais tentações este ano (mesmo que você esteja em um relacionamento). Não passe muito tempo nos mesmos lugares (causa problemas). Bom momento para ter um filho.",
  [6]: "Tudo sobre família, ficar em casa, ser responsável, as pessoas podem jogar suas responsabilidades em você, pedir dinheiro. A família pode precisar ou pedir sua ajuda ou você pode precisar da ajuda da sua família mais do que o habitual.",
  [7]: "O ano solitário, você estará sozinho mais do que o habitual. NÃO se case nem comece um relacionamento neste ano ou no 7º, 16º ou 25º de qualquer mês ou ano. Qualquer relacionamento iniciado este ano ou sob energia 7 falhará (também dias ou anos pessoais de energia 9). Este é um momento para trabalhar a mente, pois ela pensará em um nível mais elevado. Evite brigas, pois seu corpo estará mais fraco com maior chance de se ferir (propenso a lesões) e também propenso a doenças (incluindo DSTs).",
  [8]: "Dinheiro, Poder e Karma. Tudo sobre fazer movimentos e cuidar de negócios, comprar carros, casas, etc. Você pode ganhar mais dinheiro do que jamais ganhou este ano (guarde-o). Também pode perder tudo este ano, dependendo do seu karma.",
  [9]: "Este ano é tudo sobre encerramentos e conclusões, terminando maus hábitos, relacionamentos e cortando pessoas de sua vida que não servem mais a um propósito. Não é um momento para começar uma empresa, relacionamento, etc. Anos 9 podem ser estressantes.",
  [11]: "Um ano muito emocional e um ano para controlar suas emoções, maior chance de disputas, pessoas te provocando emocionalmente, 11 vai te testar emocional/fisicamente e forçar você a evoluir, sonhos vívidos, sua perspectiva de vida muda nesses anos, muitos entram ou se aprofundam no conhecimento oculto.",
  [22]: "Um ano para construir e destruir coisas grandiosas. Muito trabalho (energia 4). Trump quando estava no poder e num ano pessoal 22 quis construir 'O Muro'. Bastante energia para conquistar coisas.",
  [33]: "Um ano ótimo para influenciar as pessoas, mudar a opinião pública, liderar, ensinar, escrever, falar em público, etc. Criar coisas que influenciarão no futuro. Grandes energias te afetarão. Eminem criou o Slim Shady no seu ano pessoal 33",
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

  if (numberSum === 10) {
    return 1;
  }

  return numberSum as NumberEnergy;
};

export const impureMasterNumberReducer = (
  impureMasterNumber: NumberEnergy
): NumberEnergy => {
  if (impureMasterNumber === 22) return 4;

  return 6;
};

export const lifePathReducer = (number: number): LifePath => {
  const reducedNumber = numberReducer(number);

  //There's no 2 lifepath
  if (reducedNumber === 2) {
    return 11;
  }

  const isMasterNumber =
    reducedNumber === 11 || reducedNumber === 22 || reducedNumber === 33;

  // Master numbers aren't reduced
  if (isMasterNumber) {
    return reducedNumber;
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
