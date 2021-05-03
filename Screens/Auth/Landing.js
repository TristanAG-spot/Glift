import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

function landing({ navigation }) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.one}
        onPress={() => {
          navigation.navigate("Landing");
        }}
      >
        <Image
          style={styles.icons}
          source={require("../../assets/images/facebook.png")}
        />
        <Text style={styles.text}>Take a Test</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.one}
        oonPress={() => {
          navigation.navigate("Landing");
        }}
      >
        <Image
          style={styles.icons}
          source={require("../../assets/images/facebook.png")}
        />
        <Text style={styles.text}>Take a Test</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.one}
        onPress={() => {
          navigation.navigate("Landing");
        }}
      >
        <Image
          style={styles.icons}
          source={require("../../assets/images/facebook.png")}
        />
        <Text style={styles.text}>Take a Test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "space-around",
    // backgroundColor: "red",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 150,
    paddingBottom: 150,
  },
  one: {
    // backgroundColor: "blue",
    flexDirection: "row",

    alignItems: "center",
    height: 70,
    width: 200,
  },
  text: {
    marginLeft: 20,
    fontSize: 15,
    fontFamily: "MontserratBold",
  },
  icons: {
    height: 75,
    width: 75,
  },
});

export default landing;
