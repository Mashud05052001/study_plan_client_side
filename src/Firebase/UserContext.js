import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './firebase.init';


const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);
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
    const emailVerification = () => sendEmailVerification(auth.currentUser);
    const updateUserProfile = (profile) => updateProfile(auth.currentUser, profile);
    const logOut = () => signOut(auth);



    useEffect(() => {
        // currentUser?.providerData[0].providerId
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser?.providerData[0].providerId === 'github.com');
            if (currentUser === null || currentUser.emailVerified || currentUser?.providerData[0].providerId === 'github.com') {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])


    const value = { user, setUser, darkMode, setDarkMode, loading, setLoading, register, login, googleLogin, githubLogin, emailVerification, updateUserProfile, logOut };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;