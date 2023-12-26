import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const Authprovider = ({children}) => {
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
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)

    }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(currentuser)=>{
            setLoading(false)
             setUser(currentuser);
         });
         return()=>{
             unsubscribe();
         }
     },[])

    const authInfo = {user,loading,signupUser,signinUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;

