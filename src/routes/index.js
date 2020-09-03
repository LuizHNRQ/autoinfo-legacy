import "react-native-gesture-handler";
import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackground,
  HeaderTitle,
} from "@react-navigation/stack";

import Colors from "../constants/Colors";

import LoginScreen from "../screens/Login";
import DashboardScreen from "../screens/Dashboard";
import GarageScreen from "../screens/Garage";
import AddCarScreen from "../screens/AddCar";
import AddReviewScreen from "../screens/AddReview";
import AddUserScreen from "../screens/AddUser";

function HeaderStyle() {
  return {
    title: "AutoInfo",
    headerShown: true,
    headerStyle: { backgroundColor: Colors.primario, height: 100 },
    headerTitleContainerStyle: {
      paddingLeft: 0,
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "600",
      fontSize: 70,
    },
  };
}

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ ...HeaderStyle(), title: "AutoInfo" }}
        />

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Garage"
          component={GarageScreen}
          options={{ ...HeaderStyle(), title: "Garagem" }}
        />
        <Stack.Screen
          name="AddCar"
          component={AddCarScreen}
          options={{ ...HeaderStyle(), title: "Adicionar" }}
        />
        <Stack.Screen
          name="AddReview"
          component={AddReviewScreen}
          options={{
            ...HeaderStyle(),

            title: `Adicionar Revisão`,
            headerStyle: {
              backgroundColor: Colors.primario,
              height: 200,
            },
          }}
        />
        <Stack.Screen
          name="AddUser"
          component={AddUserScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
