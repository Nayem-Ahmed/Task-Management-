import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
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

    const authInfo = {user,signupUser,signinUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;

