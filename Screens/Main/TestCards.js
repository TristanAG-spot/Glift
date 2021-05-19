import { setStatusBarHidden } from "expo-status-bar";
import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import schoolData from "../../src/schoolData"; //DUMMY DATA
import Header from "./header";
import { useNavigation } from "@react-navigation/native";

import {
  Card,
  Title,
  Paragraph,
  RadioButton,
  Searchbar,
} from "react-native-paper";

//school cards
const Item = ({
  title,
  testName,
  image,
  goTo,
  mainColor,
  accentColor,
  textColorMain,
  textColorSecondary,
}) => {
  const navigation = useNavigation();

  //not optimized
  const mC = mainColor;
  const aC = accentColor;
  const tCM = textColorMain;
  const tCS = textColorSecondary;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(goTo)}
      style={[styles.topCards, { backgroundColor: mC }]}
    >
      <View style={styles.detailWrapper}>
        <Text>Review: </Text>
        <View style={styles.schoolContext}>
          <Text style={[styles.title, { color: tCM }]}>{testName}</Text>
          <Image source={image} style={styles.cardImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

function AdmissionCards() {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      image={item.image}
      testName={item.testName}
      goTo={item.path}
      mainColor={item.mainColor}
      accentColor={item.accentColor}
      textColorMain={item.textColorMain}
      textColorSecondary={item.textColorSecondary}
    />
  );
  return (
    <FlatList
      data={schoolData}
      renderItem={renderItem}
      horizontal={false}
      keyExtractor={(item) => item.id}
      style={styles.FlatList}
      numColumns={1}
    />
  );
}

//place me in a single file together with Admission Card styling
const styles = StyleSheet.create({
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
  },
  firstTitle: {
    marginTop: 25,
    fontSize: 24,
    fontFamily: "MontserratBold",
    alignSelf: "flex-start",
  },
  topCards: {
    height: 150,

    flexGrow: 1,
    padding: 20,

    marginBottom: 20,
    borderRadius: 15,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontFamily: "MontserratBold",
  },
  cardImage: { height: 30, width: 30, marginLeft: 10 },

  FlatList: {
    marginTop: 10,
    marginRight: 10,
  },
  detailWrapper: {
    flexDirection: "column",
  },
  schoolContext: {
    flexDirection: "row",
  },
});
export default AdmissionCards;
