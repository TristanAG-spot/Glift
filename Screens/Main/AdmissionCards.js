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
  //you are repeating the same shit
  testName,
  image,
  goTo,
  mainColor,
  accentColor,
  textColorMain,
  textColorSecondary,
  item,
}) => {
  const navigation = useNavigation();

  const mC = mainColor;
  const aC = accentColor;
  const tCM = textColorMain;
  const tCS = textColorSecondary;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(goTo, item)}
      style={[styles.topCards, { backgroundColor: mC }]}
    >
      <Image source={image} style={styles.cardImage} />
      <Text style={[styles.title, { color: tCM }]}>{testName}</Text>
      <View style={[styles.dateBlock, { backgroundColor: aC }]}>
        <Text style={[styles.dateText, { color: tCS }]}>April 23, 2021</Text>
      </View>
    </TouchableOpacity>
  );
};

function AdmissionCards() {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      testName={item.testName}
      item={item}
      image={item.image}
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
      horizontal={true}
      keyExtractor={(item) => item.id}
      style={styles.FlatList}
    />
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
  },
  HeadWrapper: { padding: 30 },
  searchBar: {
    borderRadius: 15,
  },
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
    height: 170,
    width: 125,
    padding: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 15,
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
  title: {
    fontSize: 20,
    fontFamily: "MontserratBold",
  },
  cardImage: { height: 80, width: 80, marginBottom: 10 },

  FlatList: {
    paddingLeft: 30,
  },
  dateText: {
    fontFamily: "MontserratBold",
  },
  dateBlock: {
    height: 20,
    width: 110,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AdmissionCards;
