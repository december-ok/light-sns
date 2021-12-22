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
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

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

        const user = await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
        console.log(user);
        setLoading(false);

        navigate("/main/timeLine");
      } catch (error) {
        setError(true);
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
      try {
        setLoading(true);
        if (isSame === false || value === false) {
          throw new Error("Somthing is wrong!");
        }
        await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, { displayName: nameValue });
        }
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

export function useLoginCheck(needAuth: boolean) {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    if (needAuth) {
      if (!auth.currentUser) {
        navigate("/");
      }
    } else {
      if (auth.currentUser) {
        navigate("/main/timeLine");
      }
    }
  }, [navigate, needAuth]);
}
