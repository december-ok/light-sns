import { FormEvent, useCallback, useEffect, useState } from "react";
import { useInput } from "./useInput";
import { useBoolean } from "./useBoolean";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAppDispatch } from "../modules/hooks";
import { setLoaded, setLoggedIn, setUid } from "../modules/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [onEmailChange, emailValue] = useInput();
  const [onPasswordChange, passwordValue] = useInput();
  const { onChange, value } = useBoolean(false);

  const doLogin = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const auth = getAuth();
      try {
        setLoading(true);

        //자동로그인
        await setPersistence(
          auth,
          value ? browserLocalPersistence : browserSessionPersistence
        );

        await signInWithEmailAndPassword(auth, emailValue, passwordValue);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [emailValue, passwordValue, value]
  );

  return [
    onEmailChange,
    onPasswordChange,
    onChange,
    doLogin,
    loading,
    error,
  ] as [
    typeof onEmailChange,
    typeof onPasswordChange,
    typeof onChange,
    typeof doLogin,
    typeof loading,
    typeof error
  ];
}

export function useJoin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isSame, setIsSame] = useState<boolean>(false);
  const [onEmailChange, emailValue] = useInput();
  const [onNameChange, nameValue] = useInput();
  const [onPasswordChange, passwordValue] = useInput();
  const [onPasswordCheckChange, passwordCheckValue] = useInput();
  const { onChange, value } = useBoolean(false);

  useEffect(() => {
    if (passwordValue === passwordCheckValue) {
      setIsSame(true);
    } else {
      setIsSame(false);
    }
  }, [passwordValue, passwordCheckValue]);

  const doJoin = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const auth = getAuth();
      const db = getFirestore();
      try {
        setLoading(true);
        if (isSame === false || value === false) {
          throw new Error("Somthing is wrong!");
        }

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
        await setDoc(doc(db, "users", userCredential.user.uid), {
          nickName: nameValue,
          quote: "Hello!",
          profileImg: "https://i.stack.imgur.com/l60Hf.png",
          uid: userCredential.user.uid,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    },
    [emailValue, passwordValue, nameValue, value, isSame]
  );

  return [
    onEmailChange,
    onPasswordChange,
    onPasswordCheckChange,
    onNameChange,
    onChange,
    doJoin,
    isSame,
    loading,
    error,
  ] as [
    typeof onEmailChange,
    typeof onPasswordChange,
    typeof onPasswordCheckChange,
    typeof onNameChange,
    typeof onChange,
    typeof doJoin,
    typeof isSame,
    typeof loading,
    typeof error
  ];
}

export function useLoginCheck() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUid(user.uid));
        dispatch(setLoggedIn(true));
      } else dispatch(setLoggedIn(false));
      dispatch(setLoaded(true));
    });
  }, [dispatch]);
}
