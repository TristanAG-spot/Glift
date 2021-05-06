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
import TimerCards from "../../Components/CheckpointsComponents/TimerCards";

function TestTimeType({ route, navigation }) {
  const { subjects } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerTitleWrapper}>
        <Text style={styles.cardTitle}>Choose a Timer for UPCAT Mock Exam</Text>
      </View>
      {/* MAKE THIS INTO A SINGLE CARD COMPONENT */}
      <View style={styles.cardWrapper}>
        <TimerCards
          type={"Standard"}
          subjects={subjects}
          navigation={navigation}
          description={
            "A Standard Timer allows for resuming and pausing forms."
          }
        />
        <TimerCards
          type={"Strict"}
          subjects={subjects}
          description={
            "A Strict Timer automatically submits your form when you run out of time."
          }
        />
        <TimerCards
          type={"School Standard"}
          subjects={subjects}
          description={
            "Replicates the time frame administered by the entrance exam."
          }
        />

        {/* <TimerCards
          type={"Strict"}
          subjects={subjects}
          description={"automatically submits your form when time runs out."}
        />
        <TimerCards
          type={"Timeless"}
          subjects={subjects}
          description={"disables the time for reviewing purposes."}
        />
        <TimerCards
          type={"Timeless"}
          subjects={subjects}
          description={"disables the time for reviewing purposes."}
        /> */}
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
