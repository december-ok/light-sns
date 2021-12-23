import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { DbPost, DbUser, Post } from "../@types/types";

export function useWritePost() {
  const navigate = useNavigate();
  const [ended, setEnded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const doWrite = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      const auth = getAuth();
      const db = getFirestore();
      try {
        if (content === "") {
          throw new Error("Blank contents");
        }
        await addDoc(collection(db, "posts"), {
          content,
          createdAt: new Date(Date.now()),
          heart: 0,
          author: auth.currentUser?.uid,
        });
        setEnded(true);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    },
    [content]
  );

  useEffect(() => {
    if (ended) {
      navigate("/main/timeLine");
    }
  }, [ended, navigate]);

  return [onChange, doWrite, loading, error] as [
    typeof onChange,
    typeof doWrite,
    typeof loading,
    typeof error
  ];
}

export function useGetPosts() {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const db = getFirestore();
      const queryResult = await query(collection(db, "posts"));
      const querySnapshot = await getDocs(queryResult);

      let tempPosts: DbPost[] = [];
      let returnPosts: Post[] = [];
      querySnapshot.forEach((document) => {
        tempPosts.push(document.data() as DbPost);
      });
      const promises = tempPosts.map((post: DbPost) => {
        return (async () => {
          const userSnap = await getDoc(doc(db, "users", post.author));
          returnPosts.push({ ...post, author: userSnap.data() } as Post);
        })();
      });
      await Promise.all(promises);

      setPosts(returnPosts);
      setLoading(false);
    })();
  }, []);

  return [posts, loading] as [typeof posts, typeof loading];
}

export function useUserPage() {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<DbUser | undefined>();

  useEffect(() => {}, []);

  return [user, loading, error] as [typeof user, typeof loading, typeof error];
}
