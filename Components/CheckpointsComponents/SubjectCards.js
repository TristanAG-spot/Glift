import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Surface, Checkbox } from "react-native-paper";
function SubjectCards({ subjectName }) {
  const [checked, setChecked] = React.useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setChecked(!checked);
      }}
    >
      <Surface style={styles.bigCards}>
        <View style={{ marginLeft: 40 }}>
          <Text style={styles.cardTitle}>{subjectName}</Text>
          <Text style={styles.paragraph}>
            A Standard Timer can be paused at any time.
          </Text>
        </View>

        <Checkbox testID="2" status={checked ? "checked" : "unchecked"} />
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
    height: 50,
    width: 300,
    borderRadius: 20,
    marginVertical: 10,
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
  paragraph: { fontFamily: "MontserratRegular", fontSize: 10 },
});
export default SubjectCards;
