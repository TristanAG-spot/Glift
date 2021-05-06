import React, { Children } from "react";
import { Surface } from "react-native-paper";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function TimerCards({ subjects, type, navigation, description, Children }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SubjectPicker", { subjects })}
    >
      <Surface style={styles.bigCards}>
        <Text style={styles.cardTitle}>{type}</Text>
        <Text style={styles.paragraph}>{description}</Text>
      </Surface>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },

  bigCards: {
    justifyContent: "center",

    elevation: 3,
    padding: 30,
    height: 100,
    width: 300,
    borderRadius: 20,
    marginVertical: 20,
  },
  Title: {},
  cardTitle: {
    fontSize: 20,
    fontFamily: "MontserratBold",
  },
  headerTitleWrapper: {
    marginTop: 100,
  },
  cardWrapper: { marginTop: 70 },
  paragraph: { fontFamily: "MontserratRegular", fontSize: 15 },
});
export default TimerCards;
