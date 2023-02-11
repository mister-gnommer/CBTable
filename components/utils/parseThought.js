import dayjs from "dayjs"
import { stepsDescriptions } from "../../stepsDescriptions"

const parseThought = (thought, addSeparator = true) => {
  const thoughtJson = JSON.parse(thought)

  let thoughtStr = `Data: ${dayjs(thoughtJson.timestamp).format(
    "YYYY-MM-DD HH:mm:ss"
  )}\n`
  for (const stepEng of Object.keys(thoughtJson)) {
    if (stepsDescriptions[stepEng]) {
      thoughtStr += `${stepsDescriptions[stepEng].title}: ${thoughtJson[stepEng]}\n`
    }
    if (stepEng === "emotions") {
      thoughtStr += `Natężenie emocji: ${
        thoughtJson.emotionsIntensity || "bd"
      }/10\n`
    }
    if (stepEng === "altEmotions") {
      thoughtStr += `Natężenie emocji alternatywnych: ${
        thoughtJson.emotionsIntensity || "bd"
      }/10\n`
    }
  }

  if (addSeparator) thoughtStr += `----------==========----------\n`

  return `${thoughtStr}`
}

export { parseThought }
