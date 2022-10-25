import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';


const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = () => signOut(auth);



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
                setLoading(false);
            }
        })
        return () => unSubscribe();
    }, [])


    const value = { user, setUser, darkMode, setDarkMode, loading, setLoading, register, login, googleLogin, githubLogin, logOut };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;