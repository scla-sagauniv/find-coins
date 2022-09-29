import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import firebaseApp from "../firebase/firebase";
import { useRouter } from "next/router";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  //firebaseのインポート
  const auth = getAuth(firebaseApp);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      //ログイン画面に遷移
      router.push({
        pathname: "./",
      });
    } catch (error) {
      alert("正しく入力してください");
    }
  };

  return (
    <>
      <div className={styles.loginpage}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="email address"
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button>create</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
