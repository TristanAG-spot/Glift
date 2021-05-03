import { setStatusBarHidden } from "expo-status-bar";
import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

import {
  Card,
  Title,
  Paragraph,
  RadioButton,
  Searchbar,
} from "react-native-paper";
import AdmissionCards from "./AdmissionCards";
import TestCards from "./TestCards";

function main({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  setStatusBarHidden(true);

  return (
    <ScrollView>
      <SafeAreaView style={styles.Container}>
        <View style={styles.HeadWrapper}>
          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <Text style={styles.firstTitle}>On Going College Admissions</Text>
        </View>
        <AdmissionCards />
        <View style={styles.HeadWrapper}>
          <Text style={styles.firstTitle}>Review/Take Mock Exams</Text>
        </View>

        <TestCards />
      </SafeAreaView>
    </ScrollView>
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

  firstTitle: {
    marginTop: 25,
    fontSize: 24,
    fontFamily: "MontserratBold",
    alignSelf: "flex-start",
  },
});

export default main;
