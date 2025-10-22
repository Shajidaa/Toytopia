import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    signInWithGoogle,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
