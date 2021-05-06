import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Surface, TouchableRipple } from "react-native-paper";
import ResultCard from "../../Components/ExamComponents/ResultCard";

function ResultButtons({ label, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Main")}>
      <Surface
        style={{
          width: 100,
          height: 100,
          marginTop: 50,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "MontserratBold" }}>
          {label}
        </Text>
      </Surface>
    </TouchableOpacity>
  );
}

const Score = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View>
        <ResultCard />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <ResultButtons label={"Home"} navigation={navigation} />
          <ResultButtons label={"Share"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Score;
