import { RegionSchema, type Country as CountryI } from '../types'

const REST_COUNTRIES_API = 'https://restcountries.com/v2/all'
const response = await fetch(REST_COUNTRIES_API)
const countries: CountryI[] = await response.json()

export const Country = {
  getAll () {
    return countries
  },
  getAllCodes (countriesToGetCodes: CountryI[] = countries) {
    const codes = countriesToGetCodes.map(country => country.alpha3Code)
    return codes
  },
  getAllRegions () {
    return RegionSchema.options
  },
  getByCode ({ code }: {
    code: CountryI['alpha3Code']
  }) {
    const country = countries.find(country => country.alpha3Code === code)
    return country ?? null
  },
  getByFields ({ name, region }: Partial<CountryI>) {
    const validateRegion = RegionSchema.safeParse(region)
    const newCountries = countries.filter((country) => (
      (
        validateRegion.success
          ? country.region === validateRegion.data
          : true
      ) &&
      (
        typeof name === 'string' &&
        (
          name.trim() !== ''
            ? country.name.toLowerCase().includes(name.toLowerCase())
            : true
        )
      )
    ))
    return newCountries
  }
}
