import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import { HomeScreen } from "./components/main/HomeScreen"
import { EditScreen } from "./components/edit/EditScreen"
import { ThoughtsList } from "./components/list/ThoughtsList"

/* 
TODO:

- handle saving thoughts to async storage (1 thought - 1 entry or 1 entry - all thoughts???)
- handle showing thoughts (ThoughtsList)
- handle editing thoughts

*/

export default function App() {
  const [screen, setScreen] = useState("home")

  // set to thought id/object to edit:
  const [thoughtSelected, setThoughtSelected] = useState(null)

  const renderScreen = () => {
    switch (screen) {
      case "home":
        return (
          <>
            <HomeScreen setScreen={setScreen} />
            <ThoughtsList />
          </>
        )
      case "edit":
        return (
          <EditScreen setScreen={setScreen} thoughtSelected={thoughtSelected} />
        )
      default:
        return <HomeScreen setScreen={setScreen} />
    }
  }

  return <View style={styles.container}>{renderScreen()}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
})
