import React from "react"
import { Button, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const DevComponent = () => {
  const logAllThoughts = async () => {
    const keys = await AsyncStorage.getAllKeys()
    const thoughts = await AsyncStorage.multiGet(keys)
    console.log(thoughts)
  }
  const logAllThoughtsKeys = async () => {
    const keys = await AsyncStorage.getAllKeys()
    console.log(keys)
  }

  return (
    <View>
      <Button title="console.log all thoughts" onPress={logAllThoughts} />
      <Button
        title="console.log all thoughts keys"
        onPress={logAllThoughtsKeys}
      />
    </View>
  )
}
export { DevComponent }
