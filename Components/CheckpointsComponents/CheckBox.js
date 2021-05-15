import React from "react";

function CheckBox() {
  return (
    <Checkbox.Item
      label="SomethingHere"
      status={values.status ? "checked" : "unchecked"}
      onPress={() => {
        setFieldValue("status", !values.status);
      }}
    />
  );
}

export default CheckBox;
