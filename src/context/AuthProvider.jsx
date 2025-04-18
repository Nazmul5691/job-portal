import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const socialLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser);
            //for create token
            if(currentUser?.email){
                const user = { email : currentUser.email}
                axios.post('https://job-portal-server-lilac-phi.vercel.app/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                    setLoading(false)
                })
            }
            else{
                axios.post('https://job-portal-server-lilac-phi.vercel.app/logout',{} , {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                    setLoading(false)
                })
            }
            
            
        })
        return() =>{
            unsubscribe()
        }
    },[])

   

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        socialLogIn,
        logOutUser
    }


    

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;