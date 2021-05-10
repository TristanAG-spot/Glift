import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";

import { Banner } from "react-native-paper";
import Question from "./Question";

function Exam({ navigation }) {
  const Questions = [
    {
      sectionID: 1,
      sectionTitle: "General Science",
      sectionInstruction:
        " Choose the letter of the best answer from the given choices.",
      questionSet: [
        {
          question: "What is the Capital of the Philippines?",
          choices: ["Manila", "Zamboanga", "Cebu", "Bataan"],
          correctAnswer: "Manila",
        },
        {
          question: "What is an Apple?",
          choices: ["Red", "Green", "Blue", "Black"],
          correctAnswer: "Green",
        },
        {
          question: "Who is the president of The Philippines",
          choices: ["Bloom", "Kent", "Luigi", "Mario"],
          correctAnswer: "Mario",
        },
        {
          question:
            "Let X^2 equals 5 what is the average height of the most valuable player?",
          choices: ["Bloom", "Kent", "Luigi", "Mario"],
          correctAnswer: "Mario",
        },
      ],
    },
  ];

  const Answers = {};

  const handleAnswers = (questionID, answer) => {
    Answers[questionID] = answer;
  };

  const handleSubmit = ({ navigation }) => {
    let correct = 0;

    Questions &&
      Questions.map((query) => {
        query.questionSet.forEach((item, index) => {
          if (item.correctAnswer == Answers[index + 1]) {
            correct++;
          }
        });
      });

    navigation.navigate("Score", { correct });
    console.log("Correct Answer: ", correct);
  };
  const [visible, setVisible] = React.useState(true);
  return (
    <SafeAreaView>
      <ScrollView>
        <Banner
          visible={visible}
          actions={[
            {
              label: "OK, Got It.",
              onPress: () => setVisible(false),
            },
          ]}
          style={{ paddingTop: 15 }}
        >
          <Text style={styles.title}>
            Instructions:{" "}
            <Text style={{ fontFamily: "MontserratRegular" }}>
              {Questions[0].sectionInstruction}
            </Text>
          </Text>
        </Banner>
        {Questions &&
          Questions.map((query) => {
            return query.questionSet.map((item, index) => {
              return (
                <Question
                  index={index + 1}
                  question={item.question}
                  choices={item.choices}
                  correctAnswer={item.correctAnswer}
                  handleAnswers={handleAnswers}
                />
              );
            });
          })}
        <Button title="Submit" onPress={() => handleSubmit({ navigation })} />
      </ScrollView>
    </SafeAreaView>
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
  },
  formDetails: {
    paddingHorizontal: 30,
  },
  title: {
    marginVertical: 10,
    fontSize: 25,
    fontFamily: "MontserratBold",
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
    elevation: 2,
  },
});

export default Exam;
