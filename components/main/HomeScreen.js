import React from "react"
import { Button, Text, View, StyleSheet } from "react-native"

const HomeScreen = ({ setScreen }) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.header}>CBTable</Text>
        </View>
        <View style={styles.addBtn}>
          <Button title="Dodaj" onPress={() => setScreen("edit")} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
