import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

//Screens
import {
  Chat,
  ChatCreated,
  Home,
  Login,
  MediatorLogin,
  MediatorRegister,
  NewChat,
  SuccessRegister,
} from "../screens/index";

const Stack = createStackNavigator();

const MainNavigation = ({ isLoggedIn }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName={isLoggedIn ? "Home" : "Login"}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MediatorLogin" component={MediatorLogin} />
        <Stack.Screen name="MediatorRegister" component={MediatorRegister} />
        <Stack.Screen
          name="NewChat"
          component={NewChat}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen
          name="ChatCreated"
          component={ChatCreated}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen name="SuccessRegister" component={SuccessRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
