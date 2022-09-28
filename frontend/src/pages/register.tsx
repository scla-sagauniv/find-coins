import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import firebaseApp from '../firebase/firebase';
import { useRouter } from 'next/router'

const Register = () =>{

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    //firebaseのインポート
    const auth = getAuth(firebaseApp);

    const router = useRouter();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
    
        try {
          await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword,
          );

          //ログイン画面に遷移
          router.push({
            pathname: "/login",
            
        });

        } catch (error) {
          alert('正しく入力してください');
        }
      };

    return <>
        <h1>新規登録ページ</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <input type="email" autoComplete='off' onChange={(e) => setRegisterEmail(e.target.value)}/>
            <input type="password" autoComplete='off' onChange={(e) => setRegisterPassword(e.target.value)}/>
            <button type="submit">送信</button>
            </div>
        </form>
    </>
}

export default Register;