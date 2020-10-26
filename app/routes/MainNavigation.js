import React from "react";

//Navigation
import AuthNavigation from "./AuthNavigation";
import UserNavigation from "./UserNavigation";
import ChatUserNavigation from "./ChatUserNavigation";

//Helpers
import { useIsLoggedIn, useIsChatLoggedIn } from "../helpers/AuthContext";

const MainNavigation = () => {
  const isLoggedIn = useIsLoggedIn();
  const isChatLoggedIn = useIsChatLoggedIn();


  return isChatLoggedIn ? (
    <ChatUserNavigation />
  ) : isLoggedIn ? (
    <UserNavigation />
  ) : (
    <AuthNavigation />
  );
};

export default MainNavigation;
