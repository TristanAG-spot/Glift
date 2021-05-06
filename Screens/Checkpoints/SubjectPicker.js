import React from "react";
import {
  Pressable,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";
import { Button } from "react-native-paper";
import SubjectCards from "../../Components/CheckpointsComponents/SubjectCards";
function SubjectPicker({ route, navigation }) {
  const { subjects } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.headerTitleWrapper}>
        <Text style={styles.cardTitle}>`Choose subjects to take`</Text>
      </View>
      {/* USE A MAPPING FUNCTION TO MAP FOR SUBJECTS */}
      <View style={styles.cardWrapper}>
        {subjects.map((items) => {
          return <SubjectCards subjectName={items} />;
        })}
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          Exam
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },

  cardTitle: {
    fontSize: 20,
    fontFamily: "MontserratBold",
  },
  headerTitleWrapper: {
    marginTop: 100,
  },
  cardWrapper: { marginTop: 70 },
  paragraph: { fontFamily: "MontserratRegular", fontSize: 10 },
});

export default SubjectPicker;
