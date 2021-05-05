import React from "react";
import { View, StyleSheet } from "react-native";
import {
  RadioButton,
  Text,
  Surface,
  TouchableRipple,
} from "react-native-paper";

function Question(props) {
  const { index, question, choices, correctAnswer, handleAnswers } = props;

  const [value, setValue] = React.useState("");

  return (
    <View style={styles.formWrapper}>
      <Text style={styles.title}>
        QUESTION {index}: {question}
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => {
          setValue(newValue);
          handleAnswers(index, newValue);
        }}
        value={value}
      >
        <View style={styles.radioGroup}>
          {choices.map((item) => {
            return (
              <TouchableRipple
                borderless={true}
                style={{ marginVertical: 5, borderRadius: 20 }}
              >
                <Surface style={{ elevation: 5 }}>
                  <RadioButton.Item
                    value={item}
                    label={item}
                    style={{ flexDirection: "row" }}
                    labelStyle={{
                      marginVertical: 10,
                      marginRight: 20,
                      fontSize: 20,
                      fontFamily: "MontserratBold",
                      width: 0,
                    }}
                  />
                </Surface>
              </TouchableRipple>
            );
          })}
        </View>
      </RadioButton.Group>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,

    paddingHorizontal: 3,
  },
  timeWrapper: {
    height: 50,
    width: 200,
    marginVertical: 30,
    backgroundColor: "#caefd1",
  },
  formWrapper: {
    flex: 1,
    marginVertical: 70,
    paddingHorizontal: 30,
  },
  formDetails: {},
  title: {
    marginVertical: 10,
    fontSize: 25,
    fontFamily: "MontserratBold",
    flexWrap: "wrap",
  },
  question: {
    fontSize: 20,
    fontFamily: "MontserratRegular",
  },
  radioGroup: {
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    marginVertical: 50,
  },
  choiceContainer: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    elevation: 2,
    borderRadius: 10,
  },
});

export default Question;
