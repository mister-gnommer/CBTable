import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import { HomeScreen } from "./components/main/HomeScreen"
import { EditScreen } from "./components/edit/EditScreen"
import { ThoughtsList } from "./components/list/ThoughtsList"
import { globalStyles } from "./globalStyles"

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
              Po zamknięciu pojemnika należy wyjść z pokoju poruszając się w
              taki sposób, aby nie przejść więcej niż pięć kroków w jedną stronę
              na raz. Pod absolutnie żadnym pozorem nie wolno iść w stronę
              północno-wschodnią! Po wyjściu pokój zaplombować korzystając z
              wosku pszczelego zebranego o północy pod krwawym księżycem.
            </Text>
            <Text style={globalStyles.text}>
              Ewentualnie można też sprawdzić kod aplikacji, bo pewnie gdzieś
              jest jakaś literówka.
            </Text>
          </View>
        )
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
