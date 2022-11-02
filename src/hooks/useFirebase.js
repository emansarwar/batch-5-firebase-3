import { useEffect, useState } from "react";
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
  const [user, setUser] = useState({});
    
  
  const signInWithGoogle = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
    .catch(error =>{
        console.error( error)
    })
  }

  const handleSignOut = () =>{
    signOut(auth)
    .then( () =>{})
  }

  useEffect( () =>{
    onAuthStateChanged(auth, user =>{
        setUser(user)
    })
  }, [])
//   return [user, setUser];
return {
    user, 
    signInWithGoogle,
    handleSignOut
}
} 
export default useFirebase;