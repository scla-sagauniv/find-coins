import styles from "../styles/Home.module.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import firebaseApp from "../firebase/firebase";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //firebaseの取得
  const auth = getAuth(firebaseApp);

  //Routerをインスタンス化
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(loginEmail, loginPassword);

      //世界地図画面に遷移
      router.push({
        pathname: "/worldMap",
        // query: { user_email:loginEmail } // ココ
      });
    } catch (error) {
      console.log(error);
      alert("メールアドレスかパスワードが間違っています");
    }
  };

  const handleClick = () => {
    router.push({
      pathname: "/register",
    });
  };

  return (
    <>
      <div className={styles.loginpage}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="email address"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button>login</button>
            <p className={styles.message}>
              Already registered? <a onClick={handleClick}>Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
