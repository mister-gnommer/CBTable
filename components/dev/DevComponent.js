import React from "react"
import { Button, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { generateThought } from "./fixtures"

const DevComponent = ({ setRefreshCounter }) => {
  const logAllThoughts = async () => {
    const keys = await AsyncStorage.getAllKeys()
    const thoughts = await AsyncStorage.multiGet(keys)
    console.log(thoughts)
  }
  const logAllThoughtsKeys = async () => {
    const keys = await AsyncStorage.getAllKeys()
    console.log(keys)
  }

  const addFixture = async () => {
    const thought = generateThought()
    await AsyncStorage.setItem(
      `thought-${thought.timestamp}`,
      JSON.stringify(thought)
    )
    setRefreshCounter((prev) => prev + 1)
  }

  return (
    <View>
      <Button title="console.log all thoughts" onPress={logAllThoughts} />
      <Button
        title="console.log all thoughts keys"
        onPress={logAllThoughtsKeys}
      />
      <Button title="generuj fixtures" onPress={addFixture} />
    </View>
  )
}
export { DevComponent }
