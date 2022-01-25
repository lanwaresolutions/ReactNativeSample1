import * as React from "react";

import DetailScreen from "../screens/DetailScreen";
import Header from "../components/Header";
import MapScreen from "../screens/MapScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/**
 * AppNavigator
 * Add screen routes here
 */
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
