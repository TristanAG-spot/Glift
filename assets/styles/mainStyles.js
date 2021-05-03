import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,

    flexDirection: "column",
    alignItems: "center",
  },

  headerWrapper: {
    flexDirection: "row",
    backgroundColor: "#7B113A",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    alignSelf: "stretch",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    paddingHorizontal: 20,
  },

  headerTitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
  },
  searchBar: {
    height: 40,
    width: 350,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",

    top: 5,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
  Text: {
    fontFamily: "MontserratSemiBold",
    marginLeft: 19,
  },
  schoolCards: {
    height: 140,
    width: 140,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },

  FlatlistAboveText: {
    marginTop: 25,
    fontSize: 25,
    fontFamily: "MontserratBold",
    alignSelf: "flex-start",
  },
});

export default styles;
