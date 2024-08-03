
// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { getAuth } from "firebase/auth/cordova";
// import { addDoc, collection, getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBqsd9zkzGouamiFs85SnPAD14JRJVyg_Q",
  authDomain: "netflix-clone-92f6a.firebaseapp.com",
  projectId: "netflix-clone-92f6a",
  storageBucket: "netflix-clone-92f6a.appspot.com",
  messagingSenderId: "804765395758",
  appId: "1:804765395758:web:9791f2e7dd918f7afca8bf"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signup = async (name,email,password) =>{
    try {
      const res=  await createUserWithEmailAndPassword(auth,email,password);

      const user = res.user;
      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
      })
        
    } catch (error) {

        console.log(error);
       
    }


}


const login = async (email,password) =>{
    try {
      await  signInWithEmailAndPassword(auth,email,password)


        
    } catch (error) {
        console.log(error);
       
    
    }

}

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};
