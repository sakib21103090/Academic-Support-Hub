import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AuthContext= createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password) ;
     
    }
    
    
    
    const SignIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const profileUpdate=(displayName,photoURL)=>{
        return updateProfile(auth.currentUser,{displayName,photoURL})
    }
    
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
         setUser(currentUser);
         setLoading(false);
    
        });
    
        return () =>{
           return unSubscribe();
        }
    },[])
    
    
        const AuthInfo={
    
            user,
            loading,
            createUser,
            SignIn,
            logOut,
            profileUpdate
           
           
        }
        return (
            <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
        );
    };

export default AuthProvider;