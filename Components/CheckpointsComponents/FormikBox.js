import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Formik, Field, Form } from "formik";
import { Checkbox } from "react-native-paper";

function FormikBox(props) {
  return (
    <View>
      <Formik
        initialValues={{
          status: false,
          checked: [],
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleSubmit, handleChange, setFieldValue }) => (
          <Form>
            {/* 
            This first checkbox will result in a boolean value being stored. Note that the `value` prop
            on the <Field/> is omitted
          */}
            <label>
              <Field type="checkbox" name="toggle" />
              {`${values.toggle}`}
            </label>

            {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a singl  e array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
            <div id="checkbox-group">Checked</div>
            <View>
              <Checkbox.Item
                label="SomethingHere"
                status={values.status ? "checked" : "unchecked"}
                onPress={() => {
                  setFieldValue("status", !values.status);
                }}
              />
              {/* //WORKING */}
              {/* <Checkbox
                status={values.checked ? "checked" : "unchecked"}
                onPress={() => setFieldValue("checked", !values.checked)}
                label={"English"}
              /> */}

              {/* <Field type="checkbox" name="checked" value="Two" />
              Two
              <Field type="checkbox" name="checked" value="Three" />
              Three */}
            </View>
            <TouchableOpacity onPress={handleSubmit}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </Form>
        )}
      </Formik>
    </View>
  );
}

export default FormikBox;
