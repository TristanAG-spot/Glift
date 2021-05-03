import React from "react";
import styles from "../../assets/styles/mainStyles";
import { View, Text, Image } from "react-native";

function Header() {
  return (
    <View style={styles.headerWrapper}>
      <Image
        style={styles.headerButton}
        source={require("../../assets/images/Menu.png")}
      />
      <Text style={styles.headerTitle}>Dashboard</Text>
      <Image
        style={styles.headerButton}
        source={require("../../assets/images/needHelp.png")}
      />
    </View>
  );
}

export default Header;
