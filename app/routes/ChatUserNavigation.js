import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

//Screens
import { Chat, Rate } from "../screens/index";

const Stack = createStackNavigator();

const ChatUserNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName={"Chat"}
      >
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen
          name="Rate"
          component={Rate}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ChatUserNavigation;
