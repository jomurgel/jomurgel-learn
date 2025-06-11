export type Tags = Array<string>

export type Languages = Array<string>

export interface PostDate {
  dateString: string;
}

export interface BlogPost {
  content: string;
  coverImage?: string;
  coverAlt?: string;
  date: string;
  description?: string;
  related?: string;
  external?: string;
  id: string;
  isFeatured?: boolean;
  url?: string;
  languages?: Languages
  slug: string;
  tags: Tags
  title: string;
  subfolder: string;
}
