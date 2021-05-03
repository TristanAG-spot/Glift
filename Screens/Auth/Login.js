import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../../assets/styles/logReg";
import { setStatusBarHidden } from "expo-status-bar";

import ExpressLoginButtons from "../../Components/AuthComponents/ExpressLoginButtons";

export default function Login({ navigation }) {
  setStatusBarHidden(true);

  return (
    <View style={styles.Container}>
      <View style={styles.logoHeadWrapper}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/GradeLift.png")}
        />
      </View>
      <Text style={styles.topText}>Proceed with your</Text>
      <Text style={styles.bottomText}>Login</Text>
      <View style={styles.fieldContainer}>
        <ExpressLoginButtons authVendor={"Facebook"} />
        <ExpressLoginButtons authVendor={"Google"} />
        <ExpressLoginButtons authVendor={"Glift Account"} />
      </View>
    </View>
  );
}
