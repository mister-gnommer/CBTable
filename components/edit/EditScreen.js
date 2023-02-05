import { useState } from "react"
import { Button, Text, View, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { globalStyles } from "../../globalStyles"
import { StepInput } from "./StepInput"

const steps = [
  "situation",
  "thought",
  "emotions",
  "args",
  "counterArgs",
  "altThought",
  "altEmotions",
]

const EditScreen = ({ setScreen, thoughtSelected, setThoughtSelected }) => {
  const [step, setStep] = useState("situation")

  const newThought = {
    situation: "",
    thought: "",
    emotions: "",
    args: "",
    counterArgs: "",
    altThought: "",
    altEmotions: "",
    emotionsIntensity: undefined,
    altEmotionsIntensity: undefined,
  }
  const [thoughtDetails, setThoughtDetails] = useState(
    thoughtSelected || newThought
  )

  const handleGoBack = () => {
    setScreen("home")
    setThoughtSelected(null)
  }

  const changeStep = (direction) => {
    const currentStepIndex = steps.indexOf(step)
    const nextStepIndex = currentStepIndex + direction

    if (nextStepIndex < 0 || nextStepIndex > steps.length - 1) {
      return
    }

    setStep(steps[nextStepIndex])
  }

  const handleSave = async () => {
    // when editing, use the same timestamp, else create new one
    const timestamp = thoughtSelected?.timestamp || Date.parse(new Date())
    const jsonVal = JSON.stringify({
      ...thoughtDetails,
      timestamp,
    })
    await AsyncStorage.setItem(`thought-${timestamp}`, jsonVal)
    setScreen("home")
  }

  return (
    <>
      <View style={{ flex: 1 }}>
        <Text style={globalStyles.screenHeader}>
          {thoughtSelected ? "Edycja" : "Nowa myśl"}
        </Text>
      </View>

      <StepInput
        step={step}
        setThoughtDetails={setThoughtDetails}
        thoughtDetails={thoughtDetails}
      />
      <View style={styles.stepButtonsContainer}>
        <View style={styles.stepBtn}>
          {step !== steps[0] ? (
            <Button title="poprzedni krok" onPress={() => changeStep(-1)} />
          ) : null}
        </View>
        <View style={styles.stepBtn}>
          {step !== steps[steps.length - 1] ? (
            <Button title="następny krok" onPress={() => changeStep(1)} />
          ) : null}
        </View>
      </View>
      <View style={globalStyles.footerContainer}>
        <Button title="Anuluj" onPress={handleGoBack} />
        <Button title="?" onPress={() => console.log(thoughtDetails)} />
        <Button title="Zapisz" onPress={() => handleSave()} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  stepButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  stepBtn: {
    width: 100,
    marginHorizontal: 10,
  },
})

export { EditScreen }

/* 
sytuacja - situation
myśl automatyczna - thought
Emocje i reakcje - emotions
argumenty za - args
argumenty przeciw - counterArgs
myśl alternatywna - altThought
Emocje i reakcja alternatywna - altEmotions


*/
