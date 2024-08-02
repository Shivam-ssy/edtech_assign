import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, updateProfile } from "firebase/auth";
import { signOut } from "firebase/auth";
import {auth,app} from "./firebaseConfig";
import { getFirestore, collection, addDoc,getDocs  } from 'firebase/firestore';
import { useState } from "react";
import {getDatabase} from "firebase/database"
import { db } from "./firebaseConfig";


const signup=async (name,email,password)=>{
    try {
       const user= await createUserWithEmailAndPassword(auth, email, password)
       await updateProfile(user.user,{displayName:name})
      //  console.log(user);
       return user
      } catch (error) {
        const err=error
        console.log(error)
        return err

      }
}

const signin=async (email,password)=>{
    try {
       const user= await signInWithEmailAndPassword(auth, email, password) 
          return user   
      } catch (error) {
        const err=error
        return err
      }
}
const logout=async()=>{
  try {
    await signOut(auth);
    return true
  } catch (error) {
    console.error("Error logging out: ", error);
    return false
  }
}

const getCurrentUser = async()=>{
    const auth= await getAuth(app)
    console.log("at service ",auth.currentUser);
    return auth.currentUser

}

const getValueFromDatabase=async (col)=>{
  
  try {
    const querySnapshot = await getDocs(collection(db, col));
    const dataArray = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return dataArray
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
const write_to_database=async(col,details)=>{

    // Create a new document in a collection
    const usersCollection = collection(db, col);
    addDoc(usersCollection, {
      details
    })
      .then((docRef) => {
        console.log('Document written with ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document:', error);
      });

}


export {signin,signup,logout,getCurrentUser,getValueFromDatabase,write_to_database}