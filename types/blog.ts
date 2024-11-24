export type Blog = BodyBlog & {
  id: string;
  created_at: string | Date;
  slug: string;
  writer: string;
};

export type BodyBlog = {
  image: string;
  category: string;
  title: string;
  description: string;
};
