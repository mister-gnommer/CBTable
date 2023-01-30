import { View, Text, TextInput, StyleSheet } from "react-native"
import Slider from "@react-native-community/slider"

import { globalStyles } from "../../globalStyles"
import { stepsDescriptions } from "./stepsDescriptions"

const StepInput = ({ step, setThoughtDetails, thoughtDetails }) => {
  const handleInputChange = (text) => {
    setThoughtDetails((prev) => ({ ...prev, [step]: text }))
  }
  const handleSliderInput = (value) => {
    setThoughtDetails((prev) => ({
      ...prev,
      [`${step}Intensity`]: value,
    }))
  }

  const renderSlider = () => {
    if (step === "emotions" || step === "altEmotions") {
      return (
        <View style={styles.sliderContainer}>
          <Text style={globalStyles.text}>oceń natężenie:</Text>
          <Slider
            minimumValue={1}
            maximumValue={10}
            step={1}
            minimumTrackTintColor="#999"
            maximumTrackTintColor="#999"
            onSlidingComplete={handleSliderInput}
          />
        </View>
      )
    }
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
      {renderSlider()}
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
  sliderContainer: {},
  textInput: {
    color: "white",
  },
})

export { StepInput }
