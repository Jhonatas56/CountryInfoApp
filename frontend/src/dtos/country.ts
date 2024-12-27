export type Country = {
  countryCode: string;
  name: string;
};

export interface CountryData {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[];
  population: Population[];
  flagUrl: string;
}

export interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: unknown;
}

export interface Population {
  year: number;
  value: number;
}
