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
  useTheme,
  Colors,
  IconButton,
} from "react-native-paper";
import AdmissionCards from "./AdmissionCards";
import TestCards from "./TestCards";

function main({ navigation, theme }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  setStatusBarHidden(true);

  const { colors, Container } = useTheme();

  const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: colors.gliftLight },
    searchBar: {
      borderRadius: 20,
      elevation: 2,
    },
    HeadWrapper: {
      marginVertical: 15,
      flexDirection: "row",
    },
    iconButton: { justifyContent: "center", flex: 2 / 12 },
    searchBar: {
      flex: 11 / 12,
      borderRadius: 15,
      backgroundColor: colors.gliftLight,
      marginLeft: 15,
    },
    flatListBG: {
      marginLeft: 15,
      backgroundColor: colors.gliftRed,
      height: 145,

      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,

      flexGrow: 1,

      paddingTop: 15,
    },

    lightTitle: {
      fontFamily: "MontserratBold",
      paddingLeft: 18,
      fontSize: 18,
      color: colors.gliftLight,
    },

    blackTitle: {
      fontFamily: "MontserratBold",
      paddingLeft: 18,
      fontSize: 18,
      color: colors.gliftBlack,
      paddingVertical: 15,
    },

    setWrapper: {
      marginLeft: 15,
    },
  });

  return (
    <ScrollView style={styles.Container}>
      <SafeAreaView>
        <View style={styles.HeadWrapper}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            iconColor={colors.gliftRed}
            style={styles.searchBar}
          />
          <IconButton
            icon="chess-bishop"
            color={colors.gliftRed}
            size={24}
            style={styles.iconButton}
            onPress={() => console.log("Pressed")}
          />
        </View>
        <View style={styles.flatListBG}>
          <Text style={styles.lightTitle}>Featured Schools</Text>
          <AdmissionCards />
        </View>
        <View style={styles.setWrapper}>
          <Text style={styles.blackTitle}>Reviewer Sets</Text>
        </View>

        {/* <View style={styles.HeadWrapper}>
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
        <TestCards /> */}
      </SafeAreaView>
    </ScrollView>
  );
}

export default main;
