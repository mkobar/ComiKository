export interface IComic {
  id: number;
  name: string;
  issue_number: string;
  description: string;
  cover_date: string;
  date_added: string;
  api_detail_url: string;
  site_detail_url: string;
  image: {
    thumb_url: string;
    screen_url: string;
    screen_large_url: string;
  };
  volume: {
    id: number;
    name: string;
    site_detail_url: string;
  };
}
