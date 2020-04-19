export interface Covidstat {
  country: string,
  countryCode: string,
  lat: number,
  lon: number,
  confirmed: number,
  deaths: number,
  recovered: number,
  active: number,
  date: number
}

export function createCovidstat(params: Partial<Covidstat>) {
  return {

  } as Covidstat;
}
