import React, { useEffect } from "react";
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
  NewChat,
  SuccessRegister,
  Rate,
} from "../screens/index";

const Stack = createStackNavigator();

const MainNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="NewChat"
          component={NewChat}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="ChatCreated"
          component={ChatCreated}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="Rate"
          component={Rate}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="SuccessRegister" component={SuccessRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
