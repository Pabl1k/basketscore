export const initialHeader = [
  {
    id: 12,
    name: "NBA",
    type: "League",
    logo: "https://media-1.api-sports.io/basketball/leagues/12.png",
    country: {
      id: 5,
      name: "USA",
      code: "US",
      flag: "https://media-3.api-sports.io/flags/us.svg"
    }
  },
  {
    id: 120,
    name: "Euroleague",
    type: "cup",
    logo: "https://media-1.api-sports.io/basketball/leagues/120.png",
    country: {
      id: 55,
      name: "Europe",
      code: null,
      flag: null
    }
  },
  {
    id: 194,
    name: "Eurocup",
    type: "cup",
    logo: "https://media-1.api-sports.io/basketball/leagues/194.png",
    country: {
      id: 55,
      name: "Europe",
      code: " ",
      flag: "https://media-1.api-sports.io/flags/ .svg"
    }
  },
  {
    id: 202,
    name: "Champions League",
    type: "cup",
    logo: "https://media-3.api-sports.io/basketball/leagues/202.png",
    country: {
      id: 55,
      name: "Europe",
      code: " ",
      flag: "https://media-2.api-sports.io/flags/ .svg"
    }
  }
];

export const calculateItemWidth = (itemsCount: number) => {
  return `${100 / itemsCount}%`;
};
