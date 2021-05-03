import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Navigator from "./Components/MainComponents/Navigator";

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    MontserratBold: require("./assets/fonts/MontserratBold.ttf"),
    MontserratRegular: require("./assets/fonts/MontserratRegular.ttf"),
    MontserratLight: require("./assets/fonts/MontserratLight.ttf"),
    MontserratSemiBold: require("./assets/fonts/MontserratSemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  }
}

export default App;
