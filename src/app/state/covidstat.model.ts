export interface Covidstat {
  Country: string,
  CountryCode: string,
  Lat: number,
  Lon: number,
  Confirmed: number,
  Deaths: number,
  Recovered: number,
  Active: number,
  Date: string
}

export function createCovidstat(params: Partial<Covidstat>) {
  return {

  } as Covidstat;
}
