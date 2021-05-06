import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Surface } from "react-native-paper";

function Score({ subject, score, items }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",

        marginVertical: 10,
      }}
    >
      <View style={resultStyles.line}></View>
      <Text style={{ fontSize: 20, fontFamily: "MontserratBold" }}>
        <Text style={{ fontSize: 30 }}>{score}</Text>
        {items}{" "}
      </Text>
      <Text style={{ fontFamily: "MontserratBold" }}>in {subject}</Text>
    </View>
  );
}

function ResultCard() {
  return (
    <Surface style={resultStyles.container}>
      <Text style={{ fontSize: 30, fontFamily: "MontserratBold" }}>
        Results
      </Text>
      <Score score={"45"} items={"/60"} subject={"English"} />
      <Score score={"12"} items={"/60"} subject={"Mathematics"} />
      <Score score={"34"} items={"/60"} subject={"English"} />
      <Score score={"22"} items={"/60"} subject={"English"} />
      <View
        style={{
          flexGrow: 1,
          marginVertical: 10,
          height: 2,
          backgroundColor: "black",
        }}
      ></View>
      <Text style={{ fontFamily: "MontserratBold" }}>
        <Text style={{ fontSize: 30 }}>13:00 </Text>Time Left
      </Text>
    </Surface>
  );
}

const resultStyles = StyleSheet.create({
  container: {
    width: 400,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    padding: 20,
  },
  line: {
    height: 25,
    width: 3,
    backgroundColor: "green",
    marginRight: 5,
  },
});
export default ResultCard;
