const fixturesPool = {
  situation: [
    "gonił mnie krokodyl",
    "mucha wpadła mi do oka",
    "zjadłem kota",
    "nadepnąłem na lego",
    "nie działa wifi",
  ],
  thought: [
    "nie jest dobrze",
    "boję się",
    "brzydzi mnie to",
    "uważam, że to niesprawiedliwe",
    "niech mnie ktoś przytuli",
  ],
  emotions: ["ból", "strach", "wstręt", "złość", "smutek"],
  args: [
    "musi tak być",
    "świat jest głupi",
    "ludzie to idioci",
    "byłem głodny",
    "nie mam czasu",
  ],
  counterArgs: [
    "nie musi tak być",
    "świat nie jest głupi",
    "ludzie nie są idiotami",
    "nie byłem głodny",
    "mam czas",
  ],
  altThought: [
    "jest dobrze",
    "nie boję się",
    "nie brzydzi mnie to",
    "uważam, że to sprawiedliwe",
    "chyba kogoś przytulę",
  ],
  altEmotions: ["radość", "zadowolenie", "satysfakcja", "zauroczenie", "duma"],
}

const generateThought = () => {
  const thought = {}
  Object.keys(fixturesPool).forEach((key) => {
    thought[key] =
      fixturesPool[key][Math.floor(Math.random() * fixturesPool[key].length)]
  })
  thought.emotionsIntensity = Math.floor(Math.random() * 10)
  thought.altEmotionsIntensity = Math.floor(Math.random() * 10)
  thought.timestamp = Date.parse(new Date())
  return thought
}

export { generateThought }
