export type User = {
  id: number;
  email: string;
  name: string;
  profileImgSrc: string;
  quote: string;
};

export type Post = {
  auther: number;
  content: string;
};
