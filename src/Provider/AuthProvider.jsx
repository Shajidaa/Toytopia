import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileFunc = (updateData) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };
  // const updateEditProfileFunc = (updateData) => {
  //   setLoading(true);
  //   return updateProfile(auth.currentUser, updateData);
  // };
  //login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //sign out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //forget password

  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  const value = {
    user,
    setUser,
    loading,
    setLoading,
    signInWithGoogle,
    logOut,
    createUser,
    updateProfileFunc,
    logIn,
    forgetPassword,
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
