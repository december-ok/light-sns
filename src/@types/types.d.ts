import { User } from "firebase/auth";

export type DbPost = {
  content: string;
  createdAt: Date;
  heart: number;
  author: string;
};

export type Post = {
  content: string;
  createdAt: Date;
  heart: number;
  author: DbUser;
};

export type DbUser = {
  uid: string;
  nickName: string;
  profileImg: string;
};
