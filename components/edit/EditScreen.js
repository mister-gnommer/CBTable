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

const EditScreen = ({ setScreen, thoughtSelected }) => {
  const [step, setStep] = useState("situation")

  //! when handling edit mode, this should be set to the thought object
  const [thoughtDetails, setThoughtDetails] = useState({
    situation: "",
    thought: "",
    emotions: "",
    args: "",
    counterArgs: "",
    altThought: "",
    altEmotions: "",
  })

  const changeStep = (direction) => {
    const currentStepIndex = steps.indexOf(step)
    const nextStepIndex = currentStepIndex + direction

    if (nextStepIndex < 0 || nextStepIndex > steps.length - 1) {
      return
    }

    setStep(steps[nextStepIndex])
  }

  const handleSave = async () => {
    const timestamp = Date.parse(new Date())
    const jsonVal = JSON.stringify({
      ...thoughtDetails,
      timestamp,
    })
    await AsyncStorage.setItem(`thought-${timestamp}`, jsonVal)
  }

  return (
    <>
      <View style={{ flex: 2 }}>
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
          <Button title="<<" onPress={() => changeStep(-1)} />
        </View>
        <View style={styles.stepBtn}>
          <Button title=">>" onPress={() => changeStep(1)} />
        </View>
      </View>
      <View style={globalStyles.footerContainer}>
        <Button title="Anuluj" onPress={() => setScreen("home")} />
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
    marginVertical: 50,
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
