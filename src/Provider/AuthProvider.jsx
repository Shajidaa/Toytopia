import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { useState } from "react";
import auth from "../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //sign out
  const logOut = () => {
    setLoading(true);
    return signOut();
  };
  const value = {
    user,
    setUser,
    loading,
    setLoading,
    signInWithGoogle,
    logOut,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
