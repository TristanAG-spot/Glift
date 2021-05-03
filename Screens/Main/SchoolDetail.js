import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { List } from "react-native-paper";

function SchoolDetail({ route, navigation }) {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const {
    testName,
    title,
    examDescription,
    mainColor,
    subjects,
  } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { backgroundColor: mainColor }]}>
        <Text style={styles.category}>CET Library</Text>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.sectionWrapper}>
        <Text style={styles.title}>Take Mock Exam</Text>
        <Text style={styles.body}></Text>
        <View style={styles.detailsWrapper}>
          <Text
            style={{
              fontFamily: "MontserratBold",
              fontSize: 15,
              marginBottom: 2,
            }}
          >
            Subjects:{" "}
          </Text>
          <Text style={{ fontFamily: "MontserratRegular" }}>
            Math, Science, Reading Comprehension and Language Proficiency
          </Text>
          <Text style={{ fontFamily: "MontserratBold", marginTop: 12 }}>
            Difficulty: 70%
          </Text>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("TestTimeType", { subjects });
              }}
            >
              <Text style={styles.buttonText}>Take Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Review</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 20 }}>
          More Information
        </Text>
        <View style={{ paddingVertical: 10 }}>
          {/* TURN THIS INTO  A SINGLE COMPONENT AND USE CONDITIONAL RENDERING FOR LIST OF ITEMS */}
          <List.AccordionGroup>
            <List.Accordion
              title={`What is ${testName}?`}
              titleStyle={styles.AccordionTitle}
              style={styles.AccordionWrapper}
              id="1"
            >
              <List.Item
                title="This is the Title"
                descriptionNumberOfLines={500}
                titleStyle={{ fontFamily: "MontserratBold", fontSize: 25 }}
                description={examDescription}
              />
            </List.Accordion>
            <List.Accordion
              title="Admission Details"
              titleStyle={{ fontFamily: "MontserratBold", fontSize: 25 }}
              style={{ padding: 0 }}
              id="2"
            >
              <List.Item
                title="This is the Title"
                descriptionNumberOfLines={500}
                titleStyle={{ fontFamily: "MontserratBold", fontSize: 25 }}
                description="hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
              />
            </List.Accordion>
            <List.Accordion
              title="Requirements"
              titleStyle={{ fontFamily: "MontserratBold", fontSize: 25 }}
              style={{ padding: 0 }}
              id="3"
            >
              <List.Item
                title="This is the Title"
                descriptionNumberOfLines={500}
                titleStyle={{ fontFamily: "MontserratBold", fontSize: 30 }}
                description="hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
              />
            </List.Accordion>
            <List.Accordion
              title="Tips & Tricks"
              titleStyle={{ fontFamily: "MontserratBold", fontSize: 25 }}
              style={{ padding: 0 }}
              id="4"
            >
              <List.Item
                title="This is the Title"
                descriptionNumberOfLines={500}
                titleStyle={{ fontFamily: "MontserratBold", fontSize: 30 }}
                description="hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
              />
            </List.Accordion>
          </List.AccordionGroup>
        </View>
        {/* <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#7B113A",
    padding: 30,
  },
  image: {
    width: 100,
    height: 100,
  },
  sectionWrapper: {
    margin: 20,
  },
  title: { fontFamily: "MontserratBold", fontSize: 25 },
  category: { fontSize: 15, fontFamily: "MontserratBold" },
  headerTitle: {
    color: "white",
    fontFamily: "MontserratBold",
    fontSize: 30,
  },

  buttonWrapper: {
    margin: 30,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
    height: 50,
    width: 120,

    elevation: 1.25,
  },
  buttonText: {
    fontFamily: "MontserratBold",
  },
  AccordionTitle: { fontFamily: "MontserratBold", fontSize: 25 },
  AccordionWrapper: {
    padding: 0,
    borderWidth: 3,
    borderRadius: 20,
  },
});

export default SchoolDetail;
