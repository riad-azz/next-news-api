interface Source {
  short: string;
  name: string;
  url: string;
}

interface BaseArticle {
  title: string;
  link: string;
  description?: string;
  publishDate: string;
}

interface Article {
  source: string;
  title: string;
  link: string;
  description?: string;
  publishDate: string;
}
