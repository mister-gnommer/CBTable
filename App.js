import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import { HomeScreen } from "./components/main/HomeScreen"
import { EditScreen } from "./components/edit/EditScreen"
import { ThoughtsList } from "./components/list/ThoughtsList"
import { globalStyles } from "./globalStyles"
import { DetailsScreen } from "./components/details/DetailsScreen"
import { DevComponent } from "./components/dev/DevComponent"

/* 
TODO:

- handle saving thoughts to async storage (1 thought - 1 entry or 1 entry - all thoughts???)
- handle showing thoughts (ThoughtsList)
- handle editing thoughts

*/

export default function App() {
  const [screen, setScreen] = useState("home")

  // set to thought object to show details
  const [thoughtSelected, setThoughtSelected] = useState(null)

  const [showDevTools, setShowDevTools] = useState(false)
  const [refreshCounter, setRefreshCounter] = useState(0)

  const handleShowDetails = (thought) => {
    setThoughtSelected(thought)
    setScreen("details")
  }

  const renderScreen = () => {
    if (screen === "home") {
      return (
        <>
          <HomeScreen setScreen={setScreen} setShowDevTools={setShowDevTools} />
          <ThoughtsList
            handleShowDetails={handleShowDetails}
            refreshCounter={refreshCounter}
          />
        </>
      )
    }
    if (screen === "edit") {
      return (
        <EditScreen setScreen={setScreen} thoughtSelected={thoughtSelected} />
      )
    }
    if (screen === "details") {
      return <DetailsScreen thought={thoughtSelected} setScreen={setScreen} />
    } else {
      return (
        <View style={{ margin: 10 }}>
          <Text style={globalStyles.text}>
            Nastąpił niewyobrażalny błąd tej wspaniałej aplikacji. Zaleca się
            umieszczenie urządzenia w pojemniku ze stopu miedzi i żelaza,
            ustawionym pośrodku pustego pokoju. Na ścianach pokoju powinny
            znajdować się lustra a na podłodze należy rozsypać mieszankę
            składającą się w równych proporcjach z soli, miału węglowego oraz
            mąki (koniecznie typ 480 lub drobniejsza).
          </Text>
          <Text style={globalStyles.text}>
            Po zamknięciu pojemnika należy wyjść z pokoju poruszając się w taki
            sposób, aby nie przejść więcej niż pięć kroków w jedną stronę na
            raz. Pod absolutnie żadnym pozorem nie wolno iść w stronę
            północno-wschodnią! Po wyjściu pokój zaplombować korzystając z wosku
            pszczelego zebranego o północy pod krwawym księżycem.
          </Text>
          <Text style={globalStyles.text}>
            Ewentualnie można też sprawdzić kod aplikacji, bo pewnie gdzieś jest
            jakaś literówka.
          </Text>
        </View>
      )
    }
  }

  return (
    <>
      <View style={styles.container}>{renderScreen()}</View>
      {showDevTools ? (
        <DevComponent setRefreshCounter={setRefreshCounter} />
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
})
