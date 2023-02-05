import { View, Text, TextInput, StyleSheet, Image } from "react-native"
import Slider from "@react-native-community/slider"

import { globalStyles } from "../../globalStyles"
import { stepsDescriptions } from "../../stepsDescriptions"

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
          <View style={styles.innerSliderContainer}>
            <Image
              source={require("../../assets/water.png")}
              style={styles.icon}
            />
            <Slider
              minimumValue={1}
              maximumValue={10}
              step={1}
              minimumTrackTintColor="#999"
              maximumTrackTintColor="#999"
              onSlidingComplete={handleSliderInput}
              value={thoughtDetails[`${step}Intensity`] || 1}
              style={styles.slider}
            />
            <Image
              source={require("../../assets/fire.png")}
              style={styles.icon}
            />
          </View>
        </View>
      )
    }
  }

  // show user what he entered in appropiate step
  const renderHint = () => {
    const hintsDict = {
      thought: "situation",
      emotions: "situation",
      args: "thought",
      counterArgs: "thought",
      altThought: "situation",
      altEmotions: "counterArgs",
    }

    if (thoughtDetails[hintsDict[step]]) {
      return (
        <Text style={[globalStyles.text, styles.hintText]}>
          "{thoughtDetails[hintsDict[step]]}"
        </Text>
      )
    }
  }

  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepHeader}>{stepsDescriptions[step].title}</Text>
      <Text style={globalStyles.text}>
        {stepsDescriptions[step].description}
      </Text>
      {renderHint()}
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
    width: "100%",
    // backgroundColor: "yellow",
  },
  stepHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  textInputContainer: {
    backgroundColor: "#333",
    maxHeight: 80,
    flex: 4,
    marginTop: 20,
    minHeight: 30,
    // backgroundColor: "red",
  },
  sliderContainer: {
    // backgroundColor: "red",
    flex: 1,
    width: "100%",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  innerSliderContainer: {
    // backgroundColor: "green",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  slider: {
    flexGrow: 1,
    marginTop: 6,
  },
  textInput: {
    // backgroundColor: "lightblue",
    color: "white",
  },
  hintText: {
    color: "#999",
    fontStyle: "italic",
    marginTop: 5,
  },

  icon: {
    // backgroundColor: "lightblue",
    width: 30,
    height: 30,
  },
})

export { StepInput }
