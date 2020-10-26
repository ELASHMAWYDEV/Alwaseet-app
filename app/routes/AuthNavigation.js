import React, { useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

//Screens
import { Login, MediatorLogin, MediatorRegister } from "../screens/index";

const Stack = createStackNavigator();

const AuthNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MediatorLogin" component={MediatorLogin}/>
        <Stack.Screen name="MediatorRegister" component={MediatorRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
