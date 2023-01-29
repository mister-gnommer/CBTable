import { useState, useEffect } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import dayjs from "dayjs"

import { globalStyles } from "../../globalStyles"

const ThoughtsList = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    const getThoughts = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys()
        const thoughts = await AsyncStorage.multiGet(keys)

        const thoughtsParsed = thoughts.map((thought) => {
          return JSON.parse(thought[1])
        })
        setThoughts(thoughtsParsed)
      } catch (err) {
        console.log("err", err)
      }
    }
    getThoughts()
  }, [])

  const renderThoughts = () => {
    if (thoughts.length === 0) {
      return <Text style={globalStyles.text}>Brak myśli</Text>
    } else {
      return (
        <>
          {/* <Text style={styles.situationText}>test</Text> */}
          <FlatList
            data={thoughts}
            renderItem={({ item }) => <ThoughtLine thought={item} />}
            keyExtractor={(item) => item.timestamp || Math.random().toString()}
          />
        </>
      )
    }
  }

  return <View style={styles.listContainer}>{renderThoughts()}</View>
}

const ThoughtLine = ({ thought }) => {
  return (
    <View style={styles.thoughtContainer}>
      <Text style={styles.situationText}>{thought.situation}</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {dayjs(thought.timestamp).format("YYYY-MM-DD")}
        </Text>
        <Text style={styles.dateText}>
          {dayjs(thought.timestamp).format("HH:mm")}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 2,
    width: "100%",
  },
  thoughtContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#212121",
    marginVertical: 5,
    width: "90%",
  },
  dateContainer: {
    flex: 1,
    flexDirection: "column",
  },
  situationText: {
    ...globalStyles.text,
    flex: 2,
  },
  dateText: {
    ...globalStyles.text,
    flex: 1,
  },
})

export { ThoughtsList }
