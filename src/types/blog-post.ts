export type Tags = Array<String>

export interface PostDate {
  dateString: string;
}

export interface BlogPost {
  content: string;
  coverImage?: string;
  date: string;
  description?: string;
  id: string;
  slug: string;
  tags?: Tags
  title: string;
}
