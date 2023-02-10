import React from "react"
import { Alert, Button, StyleSheet, Text, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { globalStyles } from "../../globalStyles"
import { stepsDescriptions } from "../../stepsDescriptions"
import { MyButton } from "../utils/Button"

const DetailsScreen = ({ thought, setScreen, setThoughtSelected }) => {
  const handleGoBack = () => {
    setScreen("home")
    setThoughtSelected(null)
  }

  const handleDeletingThought = async () => {
    try {
      await AsyncStorage.removeItem(`thought-${thought.timestamp}`)
      setScreen("home")
    } catch (err) {
      Alert.alert("Błąd", "Nie udało się usunąć wpisu.")
    }
  }

  const showDeleteAlert = () => {
    Alert.alert("Usuń wpis", "Czy na pewno chcesz usunąć ten wpis?", [
      {
        text: "Anuluj",
      },
      {
        text: "Usuń",
        onPress: handleDeletingThought,
      },
    ])
  }

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={globalStyles.screenHeader}>Podgląd myśli</Text>
      </View>
      <View style={styles.thoughtDetailsContainer}>
        {renderThoughtDetails(thought)}
      </View>
      <View style={globalStyles.footerContainer}>
        <MyButton title="Wróć" onPress={handleGoBack} />
        <MyButton title="Usuń" onPress={showDeleteAlert} />
        <MyButton title="Edytuj" onPress={() => setScreen("edit")} />
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
