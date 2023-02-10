import { Pressable, StyleSheet, Text } from "react-native"
import { colors } from "./colors"

const MyButton = ({ title, onPress, variant }) => {
  const getBackgroundColor = (isPressed) => {
    console.log("isPressed: ", isPressed)
    switch (variant) {
      case "primary":
        return isPressed ? colors.primaryLight : colors.primary
      case "secondary":
        return isPressed ? colors.secondaryLight : colors.secondary
      case "warning":
        return isPressed ? colors.warningLight : colors.warning
      default:
        return isPressed ? colors.primaryLight : colors.primary
    }
  }

  return (
    <Pressable
      style={({ pressed }) => {
        return {
          ...styles.pressable,
          backgroundColor: getBackgroundColor(pressed),
        }
      }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1999FF",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  pressed: {
    backgroundColor: "#919090",
  },
})

export { MyButton }
