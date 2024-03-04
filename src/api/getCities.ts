import { cities } from "data/worldcities/cities";
import type { CityRaw } from "data/worldcities/cities";

type SearchOptions = Partial<{
  limit: number;
  offset: number;
  searchTerm: string;
  sortField: string | null;
  sortDirection: "asc" | "desc" | null;
}>;

export type City = {
  id: number;
  name: string;
  nameAscii: string;
  country: string;
  countryIso3: string;
  capital: string;
  population: number;
};

const collator = new Intl.Collator("en", { sensitivity: "base" });

const fieldToIndexMap: { [key: string]: number } = {
  id: 0,
  name: 1,
  nameAscii: 2,
  country: 3,
  countryIso3: 4,
  capital: 5,
  population: 6,
};

export const getCities = async ({
  limit = 10000,
  offset = 0,
  searchTerm,
  sortField = null,
  sortDirection = null,
}: SearchOptions = {}): Promise<City[]> => {
  let sortedList: CityRaw[] = [...cities];

  if (sortField && sortDirection) {
    const sortIndex = fieldToIndexMap[sortField];
    if (sortIndex !== undefined) {
      sortedList.sort((a, b) => {
        const aValue = a[sortIndex];
        const bValue = b[sortIndex];
        if (aValue < bValue) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
  }

  let filteredList: CityRaw[];

  if (!searchTerm) {
    filteredList = sortedList;
  } else {
    if (collator.compare(searchTerm, "error") === 0) {
      throw new Error("Something terrible just happened!");
    }

    filteredList = sortedList.filter(
      (c: CityRaw): boolean =>
        // City name
        collator.compare(c[2], searchTerm) === 0 ||
        // Country name
        collator.compare(c[3], searchTerm) === 0
    );
  }

  const slicedList =
    limit < 0 ? filteredList : filteredList.slice(offset, offset + limit);

  return slicedList.map((row: CityRaw) => ({
    id: row[0],
    name: row[1],
    nameAscii: row[2],
    country: row[3],
    countryIso3: row[4],
    capital: row[5],
    population: row[6],
  }));
};
