import { View, Text, TextInput, StyleSheet } from "react-native"
import { globalStyles } from "../../globalStyles"
import { stepsDescriptions } from "./stepsDescriptions"

const StepInput = ({ step, setThoughtDetails, thoughtDetails }) => {
  const handleInputChange = (text) => {
    setThoughtDetails((prev) => ({ ...prev, [step]: text }))
  }

  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepHeader}>{stepsDescriptions[step].title}</Text>
      <Text style={globalStyles.text}>
        {stepsDescriptions[step].description}
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={3}
          onChangeText={handleInputChange}
          value={thoughtDetails[step] || ""}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  stepContainer: {
    justifyContent: "flex-start",
    flex: 4,
    // backgroundColor: "red",
  },
  stepHeader: {
    fontSize: 30,
    color: "#ffffff",
  },
  textInputContainer: {
    backgroundColor: "#333",
    maxHeight: 80,
    flex: 3,
    marginTop: 20,
  },
  textInput: {
    color: "white",
  },
})

export { StepInput }
