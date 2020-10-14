import React, { useState } from "react";
import MainNavigation from "./app/routes/MainNavigation";
import { useFonts } from "expo-font";

//Components
import Loading from "./app/components/Loading";

const App = () => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [fontLoaded] = useFonts({
    "Ionicons": require("./node_modules/react-native-ionicons/fonts/Ionicons.ttf"),
    "Almarai-Light": require("./app/assets/fonts/Almarai-Light.ttf"),
    "Almarai-Regular": require("./app/assets/fonts/Almarai-Regular.ttf"),
    "Almarai-Bold": require("./app/assets/fonts/Almarai-Bold.ttf"),
    "Almarai-ExtraBold": require("./app/assets/fonts/Almarai-ExtraBold.ttf"),
  });

  return fontLoaded ? <MainNavigation isLoggedIn={isLoggedIn}/> : <Loading />;
};

export default App;
