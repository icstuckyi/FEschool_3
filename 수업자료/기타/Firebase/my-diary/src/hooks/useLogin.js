import { useState } from "react";
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    setIsPending(true);

    // 로그인을 진행하는 함수입니다.
    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        
        setError(null);
        setIsPending(false);

        dispatch({ type: "login", payload: user });

        if (!user) {
          throw new Error("로그인에 실패했습니다.");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      });
  };

  return { error, isPending, login };
};
