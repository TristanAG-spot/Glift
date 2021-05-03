import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
  },

  logo: {
    marginTop: 72,
    marginLeft: 15,
    height: 100,
    width: 100,
  },

  altSignInContainer: {
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    top: 25,
    right: 30,
    height: 50,
    width: 85,
  },

  altSignInClickables: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    height: 30,
    width: 70,
  },
  topText: {
    marginTop: 15,
    fontSize: 20,
    marginLeft: 30,
  },
  bottomText: {
    fontFamily: "MontserratBold",
    fontSize: 25,
    marginLeft: 30,
    marginBottom: 30,
  },
  fieldContainer: {
    height: 160,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  fieldTitle: {
    fontFamily: "MontserratBold",
    height: 18,
    fontSize: 15,
    marginBottom: 14,
    marginTop: 5,
  },

  fieldTextFieldEmail: {
    fontSize: 15,
    fontFamily: "MontserratLight",
    height: 20,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 20,
    marginTop: 5,
  },
  fieldTextFieldPassword: {
    fontSize: 15,
    height: 20,
    fontFamily: "MontserratLight",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    marginTop: 5,
  },

  fieldForgot: {
    paddingTop: 4,
    alignSelf: "flex-end",
  },
  submitButton: {
    marginTop: 50,
    width: 170,
    height: 45,
    backgroundColor: "#7B113A",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 5,
  },

  submitText: {
    color: "white",
    fontSize: 15,
    fontFamily: "MontserratBold",
  },
  createAccountText: {
    fontSize: 12,

    alignSelf: "center",
    position: "absolute",
    bottom: 55,
  },
});

export default styles;
