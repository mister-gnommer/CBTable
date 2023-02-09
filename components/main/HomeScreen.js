import React from "react"
import { Button, Text, View, StyleSheet } from "react-native"
import { MyButton } from "../utils/Button"

const HomeScreen = ({ setScreen, setShowDevTools }) => {
  return (
    <View style={styles.homeScreenContainer}>
      <View style={styles.headerContainer}>
        <View>
          <Text
            style={styles.header}
            onPress={() => setShowDevTools((prev) => !prev)}
          >
            CBTable
          </Text>
        </View>
        <View style={styles.addBtn}>
          <MyButton title="Dodaj" onPress={() => setScreen("edit")} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
  },
  header: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#ffffff",
  },
  headerContainer: {
    justifyContent: "flex-start",
    flex: 1,
    marginTop: 50,
  },
  addBtn: {
    marginTop: 20,
  },
})

export { HomeScreen }
