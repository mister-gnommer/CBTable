import { useState, useEffect } from "react"
import { View, Text } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { globalStyles } from "../../globalStyles"

const ThoughtsList = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    const getThoughts = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys()
        const thoughts = await AsyncStorage.multiGet(keys)
        console.log("thoughts", thoughts)
        const thoughtsJSON = thoughts.map((thought) => JSON.parse(thought[1]))
        console.log("thoughtsJSON", thoughtsJSON)
        setThoughts(thoughtsJSON)
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
      return thoughts.map((thought) => {
        return <ThoughtLine key={Math.random()} thought={thought} />
      })
    }
  }

  return <View>{renderThoughts()}</View>
}

const ThoughtLine = ({ thought }) => {
  return (
    <View>
      <Text style={globalStyles.text}>{thought.situation}</Text>
    </View>
  )
}
export { ThoughtsList }
