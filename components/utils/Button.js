import { Pressable, StyleSheet, Text } from "react-native"
import { colors } from "./colors"

const MyButton = ({ title, onPress, variant }) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case "primary":
        return colors.primary
      case "secondary":
        return colors.secondary
      case "warning":
        return colors.warning
      default:
        return colors.primary
    }
  }

  return (
    <Pressable
      style={{ ...styles.pressable, backgroundColor: getBackgroundColor() }}
      android_ripple={{ color: "#919090" }}
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
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
})

export { MyButton }
