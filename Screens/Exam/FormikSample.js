// Formik x React Native example
import React from "react";
import { Button, TextInput, View } from "react-native";
import { Formik, Field } from "formik";

const RadioButton = () => {
  const [value, setValue] = React.useState("first");

  return (
    <RadioButton.Group
      onValueChange={(newValue) => setValue(newValue)}
      value={value}
    >
      <View>
        <Text>First</Text>
        <RadioButton value="first" />
      </View>
      <View>
        <Text>Second</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
  );
};

const FormikSample = (props) => (
  <Formik
    initialValues={{ email: "" }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
        />
        <Field name="Lemon" type="Lemon" component={RadioButton} />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default FormikSample;
