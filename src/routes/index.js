import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/Login";
import DashboardScreen from "../screens/Dashboard";
import GarageScreen from "../screens/Garage";
import AddCarScreen from "../screens/AddCar";
import AddReviewScreen from "../screens/AddReview";

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Garage"
          component={GarageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddCar"
          component={AddCarScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddReview"
          component={AddReviewScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
