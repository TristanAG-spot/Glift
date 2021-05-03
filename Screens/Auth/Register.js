import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "../../assets/styles/logReg";
import { setStatusBarHidden } from "expo-status-bar";

export default function Login({ navigation }) {
  setStatusBarHidden(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (val) => {
    setEmail(val);
  };

  const passwordHandler = (val) => {
    setPassword(val);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.logoHeadWrapper}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/GradeLift.png")}
        />
        <View style={styles.altSignInContainer}>
          <Text style={styles.altSignInTitle}>Express Login</Text>
          <View style={styles.altSignInClickables}>
            <Image
              style={styles.altSignInLogo}
              source={require("../../assets/images/facebook.png")}
            />
            <Image
              style={styles.altSignInLogo}
              source={require("../../assets/images/google.png")}
            />
          </View>
        </View>
      </View>
      <Text style={styles.topText}>Proceed with your</Text>
      <Text style={styles.bottomText}>Register</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Email</Text>
        <TextInput
          style={styles.fieldTextFieldEmail}
          onChangeText={emailHandler}
          placeholder="Type your Email"
          keyboardType="default"
        />
        <Text style={styles.fieldTitle}>Password</Text>
        <TextInput
          style={styles.fieldTextFieldPassword}
          onChangeText={passwordHandler}
          placeholder="Type your Password"
          keyboardType="default"
        />

        <TouchableOpacity
          style={styles.fieldForgot}
          onPress={() => navigation.navigate("Forgot")}
        >
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </View>

      <TouchableOpacity
        style={styles.createAccountText}
        onPress={() => navigation.navigate("Register")}
      ></TouchableOpacity>
    </View>
  );
}
