import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

//Navigation
import MainNavigation from "./app/routes/MainNavigation";

//Components
import Loading from "./app/components/Loading";

//Helpers
import { AuthProvider } from "./app/helpers/AuthContext";

//Config
import { API } from "./app/settings/config";

const App = () => {

  useEffect(() => {
    configureAxios();
  },[]);
  const [fontLoaded] = useFonts({
    Ionicons: require("./node_modules/react-native-ionicons/fonts/Ionicons.ttf"),
    "Almarai-Light": require("./app/assets/fonts/Almarai-Light.ttf"),
    "Almarai-Regular": require("./app/assets/fonts/Almarai-Regular.ttf"),
    "Almarai-Bold": require("./app/assets/fonts/Almarai-Bold.ttf"),
    "Almarai-ExtraBold": require("./app/assets/fonts/Almarai-ExtraBold.ttf"),
  });

  const configureAxios = async () => {
    //Axios configuration
    const accessToken = await SecureStore.getItemAsync("access_token");
    axios.defaults.baseURL = API;
    axios.defaults.headers.post["autherization"] = `Bearer ${JSON.parse(accessToken)}`;
    axios.defaults.headers.post["Accept"] = "application/json";
  };

  return (
    <AuthProvider>
      {!fontLoaded ? <Loading /> : <MainNavigation />}
    </AuthProvider>
  );
};

export default App;
