import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

import { globalStyles } from "../../globalStyles"
import { stepsDescriptions } from "../../stepsDescriptions"

const DetailsScreen = ({ thought, setScreen }) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={globalStyles.screenHeader}>Podgląd myśli</Text>
      </View>
      <View style={styles.thoughtDetailsContainer}>
        {renderThoughtDetails(thought)}
      </View>
      <View style={globalStyles.footerContainer}>
        <Button title="Wróć" onPress={() => setScreen("home")} />
      </View>
    </>
  )
}

const renderThoughtDetails = (thought) => {
  const renderEmotionsIntensity = (step) => {
    if (step === "emotions") {
      return (
        <Text style={globalStyles.sectionHeader}>
          {"  -  "} {thought.emotionsIntensity}/10
        </Text>
      )
    }
    if (step === "altEmotions") {
      return (
        <Text style={globalStyles.sectionHeader}>
          {"  -  "}
          {thought.altEmotionsIntensity}/10
        </Text>
      )
    }
  }

  return Object.keys(thought).map((key) => {
    if (stepsDescriptions[key]) {
      return (
        <React.Fragment key={key}>
          <View style={styles.thoughtTitleContainer}>
            <Text style={globalStyles.sectionHeader}>
              {stepsDescriptions[key].title}
              {renderEmotionsIntensity(key)}
            </Text>
          </View>
          <Text style={globalStyles.text}>{thought[key]}</Text>
        </React.Fragment>
      )
    }
  })
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  thoughtDetailsContainer: {
    flex: 6,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  thoughtTitleContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
})

export { DetailsScreen }
