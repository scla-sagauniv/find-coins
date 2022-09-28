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

    const router = useRouter();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
    
        try {
          await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
          console.log(loginEmail,loginPassword)
          router.push({
            pathname: "/test"
            // query: { user_email:loginEmail } // ココ
          });
          

        } catch (error) {
          console.log(error)
        }
      };
  
    return (

        <>
        <h1>Googleログイン</h1>

        <form onClick={handleSubmit}>
            <div className={styles.container}>
            
            <input type="email" onChange={(e) => setLoginEmail(e.target.value)}/>
            <input type="password" onChange={(e) => setLoginPassword(e.target.value)}/>
            <button type="submit">送信</button>
            </div>
        </form>
      </>
    )
  }

export default Login;


