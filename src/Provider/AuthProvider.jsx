import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
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
  const value = {
    user,
    setUser,
    loading,
    setLoading,
    signInWithGoogle,
    logOut,
    createUser,
  };

  useEffect(() => {
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
