import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Surface } from "react-native-paper";

function ExpressLoginButtons({ authVendor }) {
  return (
    <TouchableOpacity>
      <Surface style={styles.loginButton}>
        <Text style={styles.title}>Login with {authVendor}</Text>
      </Surface>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    elevation: 3,
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 20,
    borderColor: "#7B113A",
  },
  title: { fontFamily: "MontserratBold", fontSize: 15 },
});
export default ExpressLoginButtons;
