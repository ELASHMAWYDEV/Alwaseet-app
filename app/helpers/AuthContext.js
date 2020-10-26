import React, { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

//Components
import Loading from "../components/Loading";

const AuthContext = createContext();
const LoginContext = createContext();
const LogoutContext = createContext();
const CheckLoggedInContext = createContext();
const IsLoadingContext = createContext();
const ChatLoginContext = createContext();
const IsChatLoggedInContext = createContext();
const CheckChatLoggedInContext = createContext();

//Export Custom Hooks
export const useIsLoggedIn = () => useContext(AuthContext);
export const useLogin = () => useContext(LoginContext);
export const useLogout = () => useContext(LogoutContext);
export const useCheckLoggedIn = () => useContext(CheckLoggedInContext);
export const useIsLoading = () => useContext(IsLoadingContext);
export const useChatLogin = () => useContext(ChatLoginContext);
export const useIsChatLoggedIn = () => useContext(IsChatLoggedInContext);
export const useCheckChatLoggedIn = () => useContext(CheckChatLoggedInContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatLoggedIn, setIsChatLoggedIn] = useState(false);

  useEffect(() => {
    checkLoggedIn();
    checkChatLoggedIn();
  }, []);

  const login = async (user, password) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/auth/login", { user, password });
      const data = await response.data;

      if (!data.success) {
        setIsLoading(false);
        return data;
      }

      //store access token
      await SecureStore.setItemAsync(
        "access_token",
        JSON.stringify(data.accessToken)
      );
      await SecureStore.setItemAsync("user", JSON.stringify(data.user));
      setIsAuthenticated(true);
      setIsLoading(false);
      return {
        success: true,
        messages: data.messages,
      };
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      //remove the access token & user from device
      await SecureStore.deleteItemAsync("access_token");
      await SecureStore.deleteItemAsync("user");
      setIsAuthenticated(false);
      setIsLoading(false);
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  };

  const checkLoggedIn = async () => {
    try {
      setIsLoading(true);
      const accessToken = await SecureStore.getItemAsync("access_token");
      const user = await SecureStore.getItemAsync("user");
      if (!user || !accessToken) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return false;
      } else {
        setIsAuthenticated(true);
        setIsLoading(false);
        return true;
      }
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  };

  const chatLogin = async (chatNumber, password) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/auth/chat-login", {
        chatNumber,
        password,
      });
      const data = await response.data;

      if (!data.success) {
        setIsLoading(false);
        return data;
      }

      //store access token
      await SecureStore.setItemAsync(
        "access_token",
        JSON.stringify(data.accessToken)
      );

      //store the chat user
      await SecureStore.setItemAsync("user", JSON.stringify(data.user));
      setIsAuthenticated(true);
      setIsLoading(false);
      return {
        success: true,
        messages: data.messages,
      };
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  };

  const checkChatLoggedIn = async () => {
    try {
      setIsLoading(true);
      const accessToken = await SecureStore.getItemAsync("access_token");
      const user = await SecureStore.getItemAsync("user");
      if (!user || !accessToken) {
        setIsChatLoggedIn(false);
        setIsLoading(false);
        return false;
      } else {
        //check if user is a chat user
        user = JSON.parse(user);
        if (!user.chatNumber) {
          setIsChatLoggedIn(false);
        } else {
          setIsChatLoggedIn(true);
        }
        setIsLoading(false);
        return true;
      }
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={isAuthenticated}>
      <LoginContext.Provider value={login}>
        <LogoutContext.Provider value={logout}>
          <CheckLoggedInContext.Provider value={checkLoggedIn}>
            <ChatLoginContext.Provider value={chatLogin}>
              <IsChatLoggedInContext.Provider value={isChatLoggedIn}>
                <CheckChatLoggedInContext.Provider value={checkChatLoggedIn}>
                  <IsLoadingContext.Provider value={isLoading}>
                    {isLoading && <Loading />}
                    {children}
                  </IsLoadingContext.Provider>
                </CheckChatLoggedInContext.Provider>
              </IsChatLoggedInContext.Provider>
            </ChatLoginContext.Provider>
          </CheckLoggedInContext.Provider>
        </LogoutContext.Provider>
      </LoginContext.Provider>
    </AuthContext.Provider>
  );
};
