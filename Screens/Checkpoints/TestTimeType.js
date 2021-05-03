import React from "react";
import {
  Pressable,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";
import { Surface } from "react-native-paper";

function TestTimeType({ route, navigation }) {
  const { subjects } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerTitleWrapper}>
        <Text style={styles.cardTitle}>Choose a Timer for UPCAT Mock Exam</Text>
      </View>
      {/* MAKE THIS INTO A SINGLE CARD COMPONENT */}
      <View style={styles.cardWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Examv3", { subjects })}
        >
          <Surface style={styles.bigCards}>
            <Text style={styles.cardTitle}>Standard</Text>
            <Text style={styles.paragraph}>
              A Standard Timer can be paused at any time.
            </Text>
          </Surface>
        </TouchableOpacity>

        <TouchableOpacity>
          <Surface style={styles.bigCards}>
            <Text style={styles.cardTitle}>Strict</Text>
            <Text style={styles.paragraph}>
              A Stricter Time exam will be discarded when you fail to submit in
              time.
            </Text>
          </Surface>
        </TouchableOpacity>
      </View>
    </View>
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

export default TestTimeType;
