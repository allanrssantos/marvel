export interface Url {
  type: string;
  url: string;
}

export interface Image {
  path: string;
  extension: string;
}

export interface Resource {
  id: number;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
}

export interface ResourceList {
  available: number;
  collectionURI: string;
  items: ResourceSummary[];
}

export interface ResourceSummary {
  resourceURI: string;
  name: string;
}

export interface SeriesSummary extends ResourceSummary {
  type: string;
}

export interface ComicDate {
  type: string;
  date: Date;
}

export interface ComicPrice {
  type: string;
  price: number;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface ComicSummary extends ResourceSummary {
  resourceURI: string;
  name: string;
}

export interface Character extends Resource {
  name: string;
  description: string;
  comics: ResourceList;
  stories: ResourceList;
  events: ResourceList;
  series: ResourceList;
}

export interface Comic extends Resource {
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  series: SeriesSummary;
  variants: ComicSummary[];
  collections: ComicSummary[];
  collectedIssues: ComicSummary[];
  dates: ComicDate[];
  prices: ComicPrice[];
  images: Image[];
  creators: ResourceList;
  characters: ResourceList;
  stories: ResourceList;
  events: ResourceList;
}

export interface Creator extends Resource {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  series: ResourceList;
  stories: ResourceList;
  comics: ResourceList;
  events: ResourceList;
}
