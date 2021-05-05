import React from "react";
import { SafeAreaView, View, StyleSheet, Button } from "react-native";

import Question from "./Question";

function Exam() {
  const Questions = [
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
  ];

  const Answers = {};

  const handleAnswers = (questionID, answer) => {
    Answers[questionID] = answer;
  };

  const handleSubmit = () => {
    let correct = 0;

    for (let i = 0; i < Questions.length; i++) {
      if (Questions[i].correctAnswer == Answers[i + 1]) {
        correct++;
      }
    }

    console.log("Correct Answer: ", correct);
  };

  return (
    <SafeAreaView>
      <View>
        {Questions &&
          Questions.map((query, index) => {
            return (
              <Question
                index={index + 1}
                question={query.question}
                choices={query.choices}
                correctAnswer={query.correctAnswer}
                handleAnswers={handleAnswers}
              />
            );
          })}
      </View>

      <Button title="Submit" onPress={() => handleSubmit()} />
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
