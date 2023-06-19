interface Source {
  code: string;
  name: string;
  url: string;
}

interface BaseArticle {
  title: string;
  link: string;
  description?: string;
  pubDate: string;
}

interface Article extends BaseArticle {
  source: string;
}
