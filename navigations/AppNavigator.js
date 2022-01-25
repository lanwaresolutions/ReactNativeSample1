import * as React from "react";

import DetailScreen from "../screens/DetailScreen";
import Header from "../components/Header";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
