import React, { useState, useEffect } from "react";
import ShowContext from "./Showcontext";
import {  getValueFromDatabase, write_to_database } from "../../BackendAsService/Services";
import { getAuth } from "firebase/auth";

function ShowContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [allCourses, setAllCourses] = useState(null);
  const [purchasedCourses, setPurchasedCourses] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      setIsLoading(true)
      const user = getAuth()
      const data1= await getValueFromDatabase("/cources")
      setAllCourses(data1)
      const data2=await getValueFromDatabase("/purchase")
      setPurchasedCourses(data2)
      if (user) {
        setUserData(user.currentUser);
      }
      setIsLoading(false)
    };
    
    dataFetch();
  },[]);
  // console.log("user data at api",userData);
  return (
    <ShowContext.Provider value={{ userData, isLoading, setIsLoading, allCourses, purchasedCourses, setUserData }}>
      {children}
    </ShowContext.Provider>
  );
}

export default ShowContextProvider;
