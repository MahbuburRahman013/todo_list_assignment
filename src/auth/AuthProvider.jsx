import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { useEffect } from "react";
import { auth } from "../../firebase.config";

export const ContextProvider = createContext()

const googleProvider = new GoogleAuthProvider()
const faceBookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

 
    const createUser = (email, password) =>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password);
        
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, faceBookProvider);
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=> {
          const unSubsCriber = onAuthStateChanged(auth, currentUser=> {
               setUser(currentUser);
               setLoading(false);
          });
         
          return()=>{
            return unSubsCriber();
          }
          
    }, [])


const authInfo = {
      createUser,
      signInUser,
      signInGoogle,
      loading,
      user,
      logOutUser,
      signInFacebook
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;