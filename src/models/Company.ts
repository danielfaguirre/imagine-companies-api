import Article from "./Article";

export default class CompanyModel {
  NIT: string;
  address: string;
  phone: string;
  name: string;
  articles: Article[];

  constructor(
    NIT: string,
    address: string,
    phone: string,
    name: string,
    articles: Article[]
  ) {
    this.NIT = NIT
    this.address = address
    this.phone = phone
    this.name = name
    this.articles = articles
  }
}
