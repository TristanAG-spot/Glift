import * as React from "react";
import { TextInput } from "react-native-paper";
import { View } from "react-native";

const FieldInput = ({ label }) => {
  const [text, setText] = React.useState("");

  return (
    <View
      style={{
        padding: 30,
      }}
    >
      <TextInput
        label={label}
        value={text}
        mode="outlined"
        dense={true}
        theme={{
          colors: { primary: "#7B113A", underlineColor: "transparent" },
        }}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default FieldInput;
