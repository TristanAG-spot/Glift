import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Navigator from "./Components/MainComponents/Navigator";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,

  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
    gliftRed: "#BF2C47",
    gliftLight: "#F2F2E9",
    gliftBlack: "#403F3E",
  },
};

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
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PaperProvider>
    );
  }
}

export default App;
