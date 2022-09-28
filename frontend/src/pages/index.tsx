import styles from '../styles/Home.module.css';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react';
import firebaseApp from '../firebase/firebase';


const Login=()=> {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    //firebaseの取得
    const auth = getAuth(firebaseApp);


    //Routerをインスタンス化
    const router = useRouter();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
    
        try {
          await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
          console.log(loginEmail,loginPassword)

          //世界地図画面に遷移
          router.push({
            pathname: "/worldMap",
            // query: { user_email:loginEmail } // ココ
          });

          
        } catch (error) {
          console.log(error)
          alert("メールアドレスかパスワードが間違っています")
        }
    };

    const handleClick = () =>{
      router.push({
        pathname: "/register"
        
      });
    }

      
  
    return (

        <>
        <h1>トップページ</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.container}>
    
            <input type="email" onChange={(e) => setLoginEmail(e.target.value)}/>
            <input type="password" onChange={(e) => setLoginPassword(e.target.value)}/>
            
          </div>
        </form>

        <button type="submit">送信</button>
        <button type='button' onClick={handleClick}>新規登録</button>
      </>
    )
  }

export default Login;
