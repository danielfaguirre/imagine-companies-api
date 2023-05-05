export default class Article {
  id: string | number;
  name: string;
  companyNIT: string;

  constructor(
    id: string | number,
    name: string,
    companyNIT: string
  ) {
    this.id = id
    this.name = name
    this.companyNIT = companyNIT
  }
}
