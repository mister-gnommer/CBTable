import React from "react"
import { Button, Share, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { generateThought } from "./fixtures"
import { parseThought } from "../utils/parseThought"

const DevComponent = ({ setRefreshCounter, thoughtSelected }) => {
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

  const handleShareAll = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const thoughts = await AsyncStorage.multiGet(keys)
      const thoughtsString = thoughts
        .map((thought) => parseThought(thought[1]))
        .join("\n")

      await Share.share({ message: thoughtsString })
    } catch (err) {
      console.log("err", err)
    }
  }

  return (
    <View>
      <Button title="console.log all thoughts" onPress={logAllThoughts} />
      <Button
        title="console.log all thoughts keys"
        onPress={logAllThoughtsKeys}
      />
      <Button title="make fixture" onPress={addFixture} />
      <Button
        title="console.log thoughtsSelected"
        onPress={() => console.log(thoughtSelected)}
      />
      <Button title="share all" onPress={handleShareAll} />
    </View>
  )
}
export { DevComponent }
