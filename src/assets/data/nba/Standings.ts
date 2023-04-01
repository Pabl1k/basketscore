export type Division =
  | "atlantic"
  | "central"
  | "northwest"
  | "pacific"
  | "southeast"
  | "southwest";

export type Conference = "east" | "west";

type League =
  | "africa"
  | "orlando"
  | "sacramento"
  | "standard"
  | "utah"
  | "vegas";

interface Team {
  id: number;
  name: string;
  nickname: string;
  code: string;
  logo: string | null;
}

export interface Standing {
  league: League;
  season: number;
  team: Team;
  conference: {
    name: Conference;
    rank: number;
    win: number;
    loss: number;
  };
  division: {
    name: Division;
    rank: number;
    win: number;
    loss: number;
    gamesBehind: string | null;
  };
  win: {
    home: number;
    away: number;
    total: number;
    percentage: string;
    lastTen: number;
  };
  loss: {
    home: number;
    away: number;
    total: number;
    percentage: string;
    lastTen: number;
  };
  gamesBehind: string | null;
  streak: number;
  winStreak: boolean;
  tieBreakerPoints: number | null;
}

export const Standings: Standing[] = [
  {
    league: "standard",
    season: 2022,
    team: {
      id: 2,
      name: "Boston Celtics",
      nickname: "Celtics",
      code: "BOS",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png"
    },
    conference: {
      name: "east",
      rank: 2,
      win: 52,
      loss: 24
    },
    division: {
      name: "atlantic",
      rank: 1,
      win: 52,
      loss: 24,
      gamesBehind: null
    },
    win: {
      home: 28,
      away: 24,
      total: 52,
      percentage: "0.684",
      lastTen: 7
    },
    loss: {
      home: 9,
      away: 15,
      total: 24,
      percentage: "0.316",
      lastTen: 3
    },
    gamesBehind: null,
    streak: 1,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 27,
      name: "Philadelphia 76ers",
      nickname: "76ers",
      code: "PHI",
      logo: "https://upload.wikimedia.org/wikipedia/fr/4/48/76ers_2016.png"
    },
    conference: {
      name: "east",
      rank: 3,
      win: 50,
      loss: 26
    },
    division: {
      name: "atlantic",
      rank: 2,
      win: 50,
      loss: 26,
      gamesBehind: "2"
    },
    win: {
      home: 27,
      away: 23,
      total: 50,
      percentage: "0.658",
      lastTen: 6
    },
    loss: {
      home: 11,
      away: 15,
      total: 26,
      percentage: "0.342",
      lastTen: 4
    },
    gamesBehind: "2",
    streak: 1,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 24,
      name: "New York Knicks",
      nickname: "Knicks",
      code: "NYK",
      logo: "https://upload.wikimedia.org/wikipedia/fr/3/34/Knicks_de_NY.png"
    },
    conference: {
      name: "east",
      rank: 5,
      win: 44,
      loss: 33
    },
    division: {
      name: "atlantic",
      rank: 3,
      win: 44,
      loss: 33,
      gamesBehind: "8.5"
    },
    win: {
      home: 22,
      away: 22,
      total: 44,
      percentage: "0.571",
      lastTen: 5
    },
    loss: {
      home: 17,
      away: 16,
      total: 33,
      percentage: "0.429",
      lastTen: 5
    },
    gamesBehind: "8.5",
    streak: 2,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 4,
      name: "Brooklyn Nets",
      nickname: "Nets",
      code: "BKN",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/130px-Brooklyn_Nets_newlogo.svg.png"
    },
    conference: {
      name: "east",
      rank: 6,
      win: 41,
      loss: 35
    },
    division: {
      name: "atlantic",
      rank: 4,
      win: 41,
      loss: 35,
      gamesBehind: "11"
    },
    win: {
      home: 20,
      away: 21,
      total: 41,
      percentage: "0.539",
      lastTen: 4
    },
    loss: {
      home: 16,
      away: 19,
      total: 35,
      percentage: "0.461",
      lastTen: 6
    },
    gamesBehind: "11",
    streak: 1,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 38,
      name: "Toronto Raptors",
      nickname: "Raptors",
      code: "TOR",
      logo: "https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png"
    },
    conference: {
      name: "east",
      rank: 8,
      win: 38,
      loss: 38
    },
    division: {
      name: "atlantic",
      rank: 5,
      win: 38,
      loss: 38,
      gamesBehind: "14"
    },
    win: {
      home: 26,
      away: 12,
      total: 38,
      percentage: "0.500",
      lastTen: 6
    },
    loss: {
      home: 14,
      away: 24,
      total: 38,
      percentage: "0.500",
      lastTen: 4
    },
    gamesBehind: "14",
    streak: 3,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 21,
      name: "Milwaukee Bucks",
      nickname: "Bucks",
      code: "MIL",
      logo: "https://upload.wikimedia.org/wikipedia/fr/3/34/Bucks2015.png"
    },
    conference: {
      name: "east",
      rank: 1,
      win: 55,
      loss: 21
    },
    division: {
      name: "central",
      rank: 1,
      win: 55,
      loss: 21,
      gamesBehind: null
    },
    win: {
      home: 30,
      away: 25,
      total: 55,
      percentage: "0.724",
      lastTen: 7
    },
    loss: {
      home: 7,
      away: 14,
      total: 21,
      percentage: "0.276",
      lastTen: 3
    },
    gamesBehind: null,
    streak: 2,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 7,
      name: "Cleveland Cavaliers",
      nickname: "Cavaliers",
      code: "CLE",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Cavs_de_Cleveland_logo_2017.png/150px-Cavs_de_Cleveland_logo_2017.png"
    },
    conference: {
      name: "east",
      rank: 4,
      win: 48,
      loss: 29
    },
    division: {
      name: "central",
      rank: 2,
      win: 48,
      loss: 29,
      gamesBehind: "7.5"
    },
    win: {
      home: 30,
      away: 18,
      total: 48,
      percentage: "0.623",
      lastTen: 7
    },
    loss: {
      home: 8,
      away: 21,
      total: 29,
      percentage: "0.377",
      lastTen: 3
    },
    gamesBehind: "7.5",
    streak: 1,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 6,
      name: "Chicago Bulls",
      nickname: "Bulls",
      code: "CHI",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Bulls_de_Chicago_logo.svg/1200px-Bulls_de_Chicago_logo.svg.png"
    },
    conference: {
      name: "east",
      rank: 10,
      win: 36,
      loss: 40
    },
    division: {
      name: "central",
      rank: 3,
      win: 36,
      loss: 40,
      gamesBehind: "19"
    },
    win: {
      home: 20,
      away: 16,
      total: 36,
      percentage: "0.474",
      lastTen: 6
    },
    loss: {
      home: 18,
      away: 22,
      total: 40,
      percentage: "0.526",
      lastTen: 4
    },
    gamesBehind: "19",
    streak: 2,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 15,
      name: "Indiana Pacers",
      nickname: "Pacers",
      code: "IND",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/cf/Pacers_de_l%27Indiana_logo.svg/1180px-Pacers_de_l%27Indiana_logo.svg.png"
    },
    conference: {
      name: "east",
      rank: 12,
      win: 33,
      loss: 44
    },
    division: {
      name: "central",
      rank: 4,
      win: 33,
      loss: 44,
      gamesBehind: "22.5"
    },
    win: {
      home: 19,
      away: 14,
      total: 33,
      percentage: "0.429",
      lastTen: 3
    },
    loss: {
      home: 19,
      away: 25,
      total: 44,
      percentage: "0.571",
      lastTen: 7
    },
    gamesBehind: "22.5",
    streak: 4,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 10,
      name: "Detroit Pistons",
      nickname: "Pistons",
      code: "DET",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Detroit_Pistons_primary_logo_2017.png/150px-Detroit_Pistons_primary_logo_2017.png"
    },
    conference: {
      name: "east",
      rank: 15,
      win: 16,
      loss: 60
    },
    division: {
      name: "central",
      rank: 5,
      win: 16,
      loss: 60,
      gamesBehind: "39"
    },
    win: {
      home: 9,
      away: 7,
      total: 16,
      percentage: "0.211",
      lastTen: 1
    },
    loss: {
      home: 30,
      away: 30,
      total: 60,
      percentage: "0.789",
      lastTen: 9
    },
    gamesBehind: "39",
    streak: 7,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 20,
      name: "Miami Heat",
      nickname: "Heat",
      code: "MIA",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1c/Miami_Heat_-_Logo.svg/1200px-Miami_Heat_-_Logo.svg.png"
    },
    conference: {
      name: "east",
      rank: 7,
      win: 40,
      loss: 37
    },
    division: {
      name: "southeast",
      rank: 1,
      win: 40,
      loss: 37,
      gamesBehind: null
    },
    win: {
      home: 25,
      away: 15,
      total: 40,
      percentage: "0.519",
      lastTen: 5
    },
    loss: {
      home: 14,
      away: 23,
      total: 37,
      percentage: "0.481",
      lastTen: 5
    },
    gamesBehind: null,
    streak: 3,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 1,
      name: "Atlanta Hawks",
      nickname: "Hawks",
      code: "ATL",
      logo: "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png"
    },
    conference: {
      name: "east",
      rank: 9,
      win: 38,
      loss: 38
    },
    division: {
      name: "southeast",
      rank: 2,
      win: 38,
      loss: 38,
      gamesBehind: "1.5"
    },
    win: {
      home: 22,
      away: 16,
      total: 38,
      percentage: "0.500",
      lastTen: 5
    },
    loss: {
      home: 16,
      away: 22,
      total: 38,
      percentage: "0.500",
      lastTen: 5
    },
    gamesBehind: "1.5",
    streak: 1,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 41,
      name: "Washington Wizards",
      nickname: "Wizards",
      code: "WAS",
      logo: "https://upload.wikimedia.org/wikipedia/fr/archive/d/d6/20161212034849%21Wizards2015.png"
    },
    conference: {
      name: "east",
      rank: 11,
      win: 34,
      loss: 42
    },
    division: {
      name: "southeast",
      rank: 3,
      win: 34,
      loss: 42,
      gamesBehind: "5.5"
    },
    win: {
      home: 18,
      away: 16,
      total: 34,
      percentage: "0.447",
      lastTen: 3
    },
    loss: {
      home: 19,
      away: 23,
      total: 42,
      percentage: "0.553",
      lastTen: 7
    },
    gamesBehind: "5.5",
    streak: 1,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 26,
      name: "Orlando Magic",
      nickname: "Magic",
      code: "ORL",
      logo: "https://upload.wikimedia.org/wikipedia/fr/b/bd/Orlando_Magic_logo_2010.png"
    },
    conference: {
      name: "east",
      rank: 13,
      win: 32,
      loss: 44
    },
    division: {
      name: "southeast",
      rank: 4,
      win: 32,
      loss: 44,
      gamesBehind: "7.5"
    },
    win: {
      home: 19,
      away: 13,
      total: 32,
      percentage: "0.421",
      lastTen: 5
    },
    loss: {
      home: 19,
      away: 25,
      total: 44,
      percentage: "0.579",
      lastTen: 5
    },
    gamesBehind: "7.5",
    streak: 1,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 5,
      name: "Charlotte Hornets",
      nickname: "Hornets",
      code: "CHA",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Hornets_de_Charlotte_logo.svg/1200px-Hornets_de_Charlotte_logo.svg.png"
    },
    conference: {
      name: "east",
      rank: 14,
      win: 26,
      loss: 51
    },
    division: {
      name: "southeast",
      rank: 5,
      win: 26,
      loss: 51,
      gamesBehind: "14"
    },
    win: {
      home: 13,
      away: 13,
      total: 26,
      percentage: "0.338",
      lastTen: 5
    },
    loss: {
      home: 24,
      away: 27,
      total: 51,
      percentage: "0.662",
      lastTen: 5
    },
    gamesBehind: "14",
    streak: 3,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 9,
      name: "Denver Nuggets",
      nickname: "Nuggets",
      code: "DEN",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Nuggets_de_Denver_2018.png/180px-Nuggets_de_Denver_2018.png"
    },
    conference: {
      name: "west",
      rank: 1,
      win: 51,
      loss: 24
    },
    division: {
      name: "northwest",
      rank: 1,
      win: 51,
      loss: 24,
      gamesBehind: null
    },
    win: {
      home: 32,
      away: 19,
      total: 51,
      percentage: "0.680",
      lastTen: 5
    },
    loss: {
      home: 6,
      away: 18,
      total: 24,
      percentage: "0.320",
      lastTen: 5
    },
    gamesBehind: null,
    streak: 4,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 22,
      name: "Minnesota Timberwolves",
      nickname: "Timberwolves",
      code: "MIN",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Timberwolves_du_Minnesota_logo_2017.png/200px-Timberwolves_du_Minnesota_logo_2017.png"
    },
    conference: {
      name: "west",
      rank: 7,
      win: 39,
      loss: 38
    },
    division: {
      name: "northwest",
      rank: 2,
      win: 39,
      loss: 38,
      gamesBehind: "13"
    },
    win: {
      home: 21,
      away: 18,
      total: 39,
      percentage: "0.506",
      lastTen: 5
    },
    loss: {
      home: 17,
      away: 21,
      total: 38,
      percentage: "0.494",
      lastTen: 5
    },
    gamesBehind: "13",
    streak: 1,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 25,
      name: "Oklahoma City Thunder",
      nickname: "Thunder",
      code: "OKC",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Thunder_d%27Oklahoma_City_logo.svg/1200px-Thunder_d%27Oklahoma_City_logo.svg.png"
    },
    conference: {
      name: "west",
      rank: 10,
      win: 38,
      loss: 39
    },
    division: {
      name: "northwest",
      rank: 3,
      win: 38,
      loss: 39,
      gamesBehind: "14"
    },
    win: {
      home: 23,
      away: 15,
      total: 38,
      percentage: "0.494",
      lastTen: 6
    },
    loss: {
      home: 16,
      away: 23,
      total: 39,
      percentage: "0.506",
      lastTen: 4
    },
    gamesBehind: "14",
    streak: 1,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 40,
      name: "Utah Jazz",
      nickname: "Jazz",
      code: "UTA",
      logo: "https://upload.wikimedia.org/wikipedia/fr/3/3b/Jazz_de_l%27Utah_logo.png"
    },
    conference: {
      name: "west",
      rank: 12,
      win: 36,
      loss: 40
    },
    division: {
      name: "northwest",
      rank: 4,
      win: 36,
      loss: 40,
      gamesBehind: "15.5"
    },
    win: {
      home: 22,
      away: 14,
      total: 36,
      percentage: "0.474",
      lastTen: 5
    },
    loss: {
      home: 16,
      away: 24,
      total: 40,
      percentage: "0.526",
      lastTen: 5
    },
    gamesBehind: "15.5",
    streak: 1,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 29,
      name: "Portland Trail Blazers",
      nickname: "Trail Blazers",
      code: "POR",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png"
    },
    conference: {
      name: "west",
      rank: 13,
      win: 32,
      loss: 44
    },
    division: {
      name: "northwest",
      rank: 5,
      win: 32,
      loss: 44,
      gamesBehind: "19.5"
    },
    win: {
      home: 17,
      away: 15,
      total: 32,
      percentage: "0.421",
      lastTen: 1
    },
    loss: {
      home: 22,
      away: 22,
      total: 44,
      percentage: "0.579",
      lastTen: 9
    },
    gamesBehind: "19.5",
    streak: 4,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 30,
      name: "Sacramento Kings",
      nickname: "Kings",
      code: "SAC",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
    },
    conference: {
      name: "west",
      rank: 3,
      win: 46,
      loss: 30
    },
    division: {
      name: "pacific",
      rank: 1,
      win: 46,
      loss: 30,
      gamesBehind: null
    },
    win: {
      home: 23,
      away: 23,
      total: 46,
      percentage: "0.605",
      lastTen: 6
    },
    loss: {
      home: 16,
      away: 14,
      total: 30,
      percentage: "0.395",
      lastTen: 4
    },
    gamesBehind: null,
    streak: 1,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 28,
      name: "Phoenix Suns",
      nickname: "Suns",
      code: "PHX",
      logo: "https://upload.wikimedia.org/wikipedia/fr/5/56/Phoenix_Suns_2013.png"
    },
    conference: {
      name: "west",
      rank: 4,
      win: 41,
      loss: 35
    },
    division: {
      name: "pacific",
      rank: 2,
      win: 41,
      loss: 35,
      gamesBehind: "5"
    },
    win: {
      home: 25,
      away: 16,
      total: 41,
      percentage: "0.539",
      lastTen: 4
    },
    loss: {
      home: 12,
      away: 23,
      total: 35,
      percentage: "0.461",
      lastTen: 6
    },
    gamesBehind: "5",
    streak: 3,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 16,
      name: "LA Clippers",
      nickname: "Clippers",
      code: "LAC",
      logo: "https://upload.wikimedia.org/wikipedia/fr/d/d6/Los_Angeles_Clippers_logo_2010.png"
    },
    conference: {
      name: "west",
      rank: 5,
      win: 41,
      loss: 36
    },
    division: {
      name: "pacific",
      rank: 3,
      win: 41,
      loss: 36,
      gamesBehind: "5.5"
    },
    win: {
      home: 21,
      away: 20,
      total: 41,
      percentage: "0.532",
      lastTen: 7
    },
    loss: {
      home: 18,
      away: 18,
      total: 36,
      percentage: "0.468",
      lastTen: 3
    },
    gamesBehind: "5.5",
    streak: 2,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 11,
      name: "Golden State Warriors",
      nickname: "Warriors",
      code: "GSW",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png"
    },
    conference: {
      name: "west",
      rank: 6,
      win: 40,
      loss: 37
    },
    division: {
      name: "pacific",
      rank: 4,
      win: 40,
      loss: 37,
      gamesBehind: "6.5"
    },
    win: {
      home: 31,
      away: 9,
      total: 40,
      percentage: "0.519",
      lastTen: 6
    },
    loss: {
      home: 8,
      away: 29,
      total: 37,
      percentage: "0.481",
      lastTen: 4
    },
    gamesBehind: "6.5",
    streak: 1,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 17,
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      code: "LAL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png"
    },
    conference: {
      name: "west",
      rank: 9,
      win: 38,
      loss: 38
    },
    division: {
      name: "pacific",
      rank: 5,
      win: 38,
      loss: 38,
      gamesBehind: "8"
    },
    win: {
      home: 21,
      away: 17,
      total: 38,
      percentage: "0.500",
      lastTen: 6
    },
    loss: {
      home: 18,
      away: 20,
      total: 38,
      percentage: "0.500",
      lastTen: 4
    },
    gamesBehind: "8",
    streak: 1,
    winStreak: true,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 19,
      name: "Memphis Grizzlies",
      nickname: "Grizzlies",
      code: "MEM",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png"
    },
    conference: {
      name: "west",
      rank: 2,
      win: 48,
      loss: 28
    },
    division: {
      name: "southwest",
      rank: 1,
      win: 48,
      loss: 28,
      gamesBehind: null
    },
    win: {
      home: 33,
      away: 15,
      total: 48,
      percentage: "0.632",
      lastTen: 8
    },
    loss: {
      home: 6,
      away: 22,
      total: 28,
      percentage: "0.368",
      lastTen: 2
    },
    gamesBehind: null,
    streak: 1,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 23,
      name: "New Orleans Pelicans",
      nickname: "Pelicans",
      code: "NOP",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/21/New_Orleans_Pelicans.png/200px-New_Orleans_Pelicans.png"
    },
    conference: {
      name: "west",
      rank: 8,
      win: 38,
      loss: 38
    },
    division: {
      name: "southwest",
      rank: 2,
      win: 38,
      loss: 38,
      gamesBehind: "10"
    },
    win: {
      home: 24,
      away: 14,
      total: 38,
      percentage: "0.500",
      lastTen: 6
    },
    loss: {
      home: 13,
      away: 25,
      total: 38,
      percentage: "0.500",
      lastTen: 4
    },
    gamesBehind: "10",
    streak: 1,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 8,
      name: "Dallas Mavericks",
      nickname: "Mavericks",
      code: "DAL",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Mavericks_de_Dallas_logo.svg/150px-Mavericks_de_Dallas_logo.svg.png"
    },
    conference: {
      name: "west",
      rank: 11,
      win: 37,
      loss: 40
    },
    division: {
      name: "southwest",
      rank: 3,
      win: 37,
      loss: 40,
      gamesBehind: "11.5"
    },
    win: {
      home: 22,
      away: 15,
      total: 37,
      percentage: "0.481",
      lastTen: 3
    },
    loss: {
      home: 16,
      away: 24,
      total: 40,
      percentage: "0.519",
      lastTen: 7
    },
    gamesBehind: "11.5",
    streak: 1,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 31,
      name: "San Antonio Spurs",
      nickname: "Spurs",
      code: "SAS",
      logo: "https://upload.wikimedia.org/wikipedia/fr/0/0e/San_Antonio_Spurs_2018.png"
    },
    conference: {
      name: "west",
      rank: 14,
      win: 19,
      loss: 57
    },
    division: {
      name: "southwest",
      rank: 4,
      win: 19,
      loss: 57,
      gamesBehind: "29"
    },
    win: {
      home: 13,
      away: 6,
      total: 19,
      percentage: "0.250",
      lastTen: 2
    },
    loss: {
      home: 26,
      away: 31,
      total: 57,
      percentage: "0.750",
      lastTen: 8
    },
    gamesBehind: "29",
    streak: 5,
    winStreak: false,
    tieBreakerPoints: null
  },
  {
    league: "standard",
    season: 2022,
    team: {
      id: 14,
      name: "Houston Rockets",
      nickname: "Rockets",
      code: "HOU",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Houston_Rockets_logo_2003.png/330px-Houston_Rockets_logo_2003.png"
    },
    conference: {
      name: "west",
      rank: 15,
      win: 18,
      loss: 59
    },
    division: {
      name: "southwest",
      rank: 5,
      win: 18,
      loss: 59,
      gamesBehind: "30.5"
    },
    win: {
      home: 12,
      away: 6,
      total: 18,
      percentage: "0.234",
      lastTen: 3
    },
    loss: {
      home: 26,
      away: 33,
      total: 59,
      percentage: "0.766",
      lastTen: 7
    },
    gamesBehind: "30.5",
    streak: 7,
    winStreak: false,
    tieBreakerPoints: null
  }
];
