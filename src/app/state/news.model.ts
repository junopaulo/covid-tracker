export interface News {
  title: string,
  description: string,
  summary: string,
  pubDate: string,
  link: string,
  author: string
}

export function createNews(params: Partial<News>) {
  return {

  } as News;
}
