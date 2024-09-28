import * as z from 'zod'

export const RegionSchema = z.enum([
  'Africa',
  'Americas',
  'Antarctic',
  'Antarctic Ocean',
  'Asia',
  'Europe',
  'Oceania',
  'Polar'
])
export type Region = z.infer<typeof RegionSchema>

export const AcronymSchema = z.enum([
  'AL',
  'ASEAN',
  'AU',
  'CAIS',
  'CARICOM',
  'CEFTA',
  'EEU',
  'EFTA',
  'EU',
  'NAFTA',
  'PA',
  'SAARC',
  'USAN'
])
export type Acronym = z.infer<typeof AcronymSchema>

export const NameSchema = z.enum([
  'African Union',
  'Arab League',
  'Association of Southeast Asian Nations',
  'Caribbean Community',
  'Central American Integration System',
  'Central European Free Trade Agreement',
  'Eurasian Economic Union',
  'European Free Trade Association',
  'European Union',
  'North American Free Trade Agreement',
  'Pacific Alliance',
  'South Asian Association for Regional Cooperation',
  'Union of South American Nations'
])
export type Name = z.infer<typeof NameSchema>

export const OtherAcronymSchema = z.enum([
  'EAEU',
  'SICA',
  'UNASUL',
  'UNASUR',
  'UZAN'
])
export type OtherAcronym = z.infer<typeof OtherAcronymSchema>

export const OtherNameSchema = z.enum([
  'Accord de Libre-échange Nord-Américain',
  'Alianza del Pacífico',
  'Caribische Gemeenschap',
  'Communauté Caribéenne',
  'Comunidad del Caribe',
  'Jāmiʻat ad-Duwal al-ʻArabīyah',
  'League of Arab States',
  'Sistema de la Integración Centroamericana,',
  'South American Union',
  'Tratado de Libre Comercio de América del Norte',
  'Umoja wa Afrika',
  'Unie van Zuid-Amerikaanse Naties',
  'Union africaine',
  'União Africana',
  'União de Nações Sul-Americanas',
  'Unión Africana',
  'Unión de Naciones Suramericanas',
  'الاتحاد الأفريقي',
  'جامعة الدول العربية'
])
export type OtherName = z.infer<typeof OtherNameSchema>

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
  symbol: z.string()
})
export type Currency = z.infer<typeof CurrencySchema>

export const FlagsSchema = z.object({
  svg: z.string(),
  png: z.string()
})
export type Flags = z.infer<typeof FlagsSchema>

export const LanguageSchema = z.object({
  iso639_1: z.string().optional(),
  iso639_2: z.string(),
  name: z.string(),
  nativeName: z.string().optional()
})
export type Language = z.infer<typeof LanguageSchema>

export const RegionalBlocSchema = z.object({
  acronym: AcronymSchema,
  name: NameSchema,
  otherNames: z.array(OtherNameSchema).optional(),
  otherAcronyms: z.array(OtherAcronymSchema).optional()
})
export type RegionalBloc = z.infer<typeof RegionalBlocSchema>

export const TranslationsSchema = z.object({
  br: z.string(),
  pt: z.string(),
  nl: z.string(),
  hr: z.string(),
  fa: z.string().optional(),
  de: z.string(),
  es: z.string(),
  fr: z.string(),
  ja: z.string(),
  it: z.string(),
  hu: z.string()
})
export type Translations = z.infer<typeof TranslationsSchema>

export const CountrySchema = z.object({
  name: z.string(),
  topLevelDomain: z.array(z.string()),
  alpha2Code: z.string(),
  alpha3Code: z.string(),
  callingCodes: z.array(z.string()),
  capital: z.string().optional(),
  altSpellings: z.array(z.string()).optional(),
  subregion: z.string(),
  region: RegionSchema,
  population: z.number(),
  latlng: z.array(z.number()).optional(),
  demonym: z.string(),
  area: z.number().optional(),
  timezones: z.array(z.string()),
  borders: z.array(z.string()).optional(),
  nativeName: z.string(),
  numericCode: z.string(),
  flags: FlagsSchema,
  currencies: z.array(CurrencySchema).optional(),
  languages: z.array(LanguageSchema),
  translations: TranslationsSchema,
  flag: z.string(),
  regionalBlocs: z.array(RegionalBlocSchema).optional(),
  cioc: z.string().optional(),
  independent: z.boolean(),
  gini: z.number().optional()
})
export type Country = z.infer<typeof CountrySchema>
