import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import { useLogin } from "./../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, login } = useLogin();

  // handleData는 eventListener이다.
  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
    console.log(email, password);
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>로그인</legend>

        <label htmlFor="myEmail">email : </label>
        <input
          type="email"
          id="myEmail"
          value={email}
          onChange={handleData}
          required
        />

        <label htmlFor="myPassWord">password : </label>
        <input
          type="password"
          id="myPassWord"
          value={password}
          onChange={handleData}
          required
        />

        {/* && 연산자를 이용한 조건부 렌더링 */}
        {!isPending && (
          <button type="submit" className={styles.btn}>
            로그인
          </button>
        )}
        {isPending && <strong>로그인 중입니다...</strong>}
        {error && <strong>{error}</strong>}
      </fieldset>
    </form>
  );
}
