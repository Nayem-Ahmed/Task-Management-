import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import auth from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const Authprovider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)
    const [user,setUser] = useState()

    const signupUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signinUser = (email,password)=>{
        setLoading(true)
        return  signInWithEmailAndPassword(auth, email, password)

    }
    const signingoogle = (email,password)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)

    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)

    }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(currentuser)=>{
            setLoading(false)
             setUser(currentuser);
             console.log("currentuser-->",currentuser);
         });
         return()=>{
             unsubscribe();
         }
     },[])

    const authInfo = {user,loading,signupUser,signinUser,logOut,signingoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;

