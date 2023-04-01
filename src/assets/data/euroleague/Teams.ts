interface Country {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
  nationnal: boolean;
  country: Country;
}

const data: Team[] = [
  {
    id: 2329,
    name: "Barcelona",
    logo: "https://media-3.api-sports.io/basketball/teams/2329.png",
    nationnal: false,
    country: {
      id: 45,
      name: "Spain",
      code: "ES",
      flag: "https://media-1.api-sports.io/flags/es.svg"
    }
  },
  {
    id: 602,
    name: "Olympiacos B",
    logo: "https://media-1.api-sports.io/basketball/teams/602.png",
    nationnal: false,
    country: {
      id: 18,
      name: "Greece",
      code: "GR",
      flag: "https://media-3.api-sports.io/flags/gr.svg"
    }
  },
  {
    id: 2338,
    name: "Real Madrid",
    logo: "https://media-3.api-sports.io/basketball/teams/2338.png",
    nationnal: false,
    country: {
      id: 45,
      name: "Spain",
      code: "ES",
      flag: "https://media-3.api-sports.io/flags/es.svg"
    }
  },
  {
    id: 16,
    name: "Monaco",
    logo: "https://media-3.api-sports.io/basketball/teams/16.png",
    nationnal: false,
    country: {
      id: 4,
      name: "France",
      code: "FR",
      flag: "https://media-1.api-sports.io/flags/fr.svg"
    }
  },
  {
    id: 687,
    name: "Maccabi Tel Aviv",
    logo: "https://media-1.api-sports.io/basketball/teams/687.png",
    nationnal: false,
    country: {
      id: 22,
      name: "Israel",
      code: "IL",
      flag: "https://media-3.api-sports.io/flags/il.svg"
    }
  },
  {
    id: 1270,
    name: "Fenerbahce",
    logo: "https://media-2.api-sports.io/basketball/teams/1270.png",
    nationnal: false,
    country: {
      id: 48,
      name: "Turkey",
      code: "TR",
      flag: "https://media-3.api-sports.io/flags/tr.svg"
    }
  },
  {
    id: 1068,
    name: "Partizan",
    logo: "https://media-1.api-sports.io/basketball/teams/1068.png",
    nationnal: false,
    country: {
      id: 41,
      name: "Serbia",
      code: "RS",
      flag: "https://media-1.api-sports.io/flags/rs.svg"
    }
  },
  {
    id: 2331,
    name: "Baskonia",
    logo: "https://media-2.api-sports.io/basketball/teams/2331.png",
    nationnal: false,
    country: {
      id: 45,
      name: "Spain",
      code: "ES",
      flag: "https://media-2.api-sports.io/flags/es.svg"
    }
  },
  {
    id: 796,
    name: "Zalgiris Kaunas",
    logo: "https://media-1.api-sports.io/basketball/teams/796.png",
    nationnal: false,
    country: {
      id: 27,
      name: "Lithuania",
      code: "LT",
      flag: "https://media-1.api-sports.io/flags/lt.svg"
    }
  },
  {
    id: 1263,
    name: "Anadolu Efes",
    logo: "https://media-2.api-sports.io/basketball/teams/1263.png",
    nationnal: false,
    country: {
      id: 48,
      name: "Turkey",
      code: "TR",
      flag: "https://media-2.api-sports.io/flags/tr.svg"
    }
  },
  {
    id: 1065,
    name: "Crvena zvezda mts",
    logo: "https://media-3.api-sports.io/basketball/teams/1065.png",
    nationnal: false,
    country: {
      id: 41,
      name: "Serbia",
      code: "RS",
      flag: "https://media-2.api-sports.io/flags/rs.svg"
    }
  },
  {
    id: 2341,
    name: "Valencia",
    logo: "https://media-3.api-sports.io/basketball/teams/2341.png",
    nationnal: false,
    country: {
      id: 45,
      name: "Spain",
      code: "ES",
      flag: "https://media-2.api-sports.io/flags/es.svg"
    }
  },
  {
    id: 722,
    name: "Olimpia Milano",
    logo: "https://media-1.api-sports.io/basketball/teams/722.png",
    nationnal: false,
    country: {
      id: 23,
      name: "Italy",
      code: "IT",
      flag: "https://media-2.api-sports.io/flags/it.svg"
    }
  },
  {
    id: 732,
    name: "Virtus Bologna",
    logo: "https://media-2.api-sports.io/basketball/teams/732.png",
    nationnal: false,
    country: {
      id: 23,
      name: "Italy",
      code: "IT",
      flag: "https://media-3.api-sports.io/flags/it.svg"
    }
  },
  {
    id: 522,
    name: "Bayern",
    logo: "https://media-3.api-sports.io/basketball/teams/522.png",
    nationnal: false,
    country: {
      id: 17,
      name: "Germany",
      code: "DE",
      flag: "https://media-3.api-sports.io/flags/de.svg"
    }
  },
  {
    id: 614,
    name: "Panathinaikos",
    logo: "https://media-3.api-sports.io/basketball/teams/614.png",
    nationnal: false,
    country: {
      id: 18,
      name: "Greece",
      code: "GR",
      flag: "https://media-3.api-sports.io/flags/gr.svg"
    }
  },
  {
    id: 519,
    name: "Alba Berlin",
    logo: "https://media-2.api-sports.io/basketball/teams/519.png",
    nationnal: false,
    country: {
      id: 17,
      name: "Germany",
      code: "DE",
      flag: "https://media-3.api-sports.io/flags/de.svg"
    }
  },
  {
    id: 26,
    name: "Lyon-Villeurbanne",
    logo: "https://media-1.api-sports.io/basketball/teams/26.png",
    nationnal: false,
    country: {
      id: 4,
      name: "France",
      code: "FR",
      flag: "https://media-1.api-sports.io/flags/fr.svg"
    }
  }
];

export const teams = data.sort(
  (a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)
);
