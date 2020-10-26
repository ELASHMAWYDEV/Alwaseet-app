import React from 'react';


//Navigation
import AuthNavigation from "./AuthNavigation";
import UserNavigation from "./UserNavigation";

//Helpers
import { useIsLoggedIn } from "../helpers/AuthContext";

const MainNavigation = () => {
  const isLoggedIn = useIsLoggedIn();



  return (
    isLoggedIn ? <UserNavigation /> : <AuthNavigation />
  );

  
}



export default MainNavigation;