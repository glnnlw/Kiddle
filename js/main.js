//  Copyright © 2024. All Rights Reserved. //
const wordList = [
  {
    word: "ace",
    hint: "Excellent or expert",
  },
  {
    word: "add",
    hint: "Put together",
  },
  {
    word: "aid",
    hint: "Support",
  },
  {
    word: "aim",
    hint: "Point at",
  },
  {
    word: "air",
    hint: "What we breathe",
  },
  {
    word: "all",
    hint: "Everything",
  },
  {
    word: "and",
    hint: "Join two words",
  },
  {
    word: "ant",
    hint: "Small insect",
  },
  {
    word: "any",
    hint: "No matter how many",
  },
  {
    word: "ape",
    hint: "Chimpanzee or gorilla",
  },
  {
    word: "are",
    hint: "Many",
  },
  {
    word: "ark",
    hint: "Wooden boat",
  },
  {
    word: "arm",
    hint: "Hand",
  },
  {
    word: "art",
    hint: "Drawing",
  },
  {
    word: "ash",
    hint: "Burned paper",
  },
  {
    word: "ask",
    hint: "When you need an answer",
  },
  {
    word: "axe",
    hint: "Chop wood",
  },
  {
    word: "bad",
    hint: "Not ‘good’ but ___",
  },
  {
    word: "bar",
    hint: "Long rod",
  },
  {
    word: "bat",
    hint: "Nocturnal animal",
  },
  {
    word: "bay",
    hint: "Sea meeting land",
  },
  {
    word: "bed",
    hint: "Sleep",
  },
  {
    word: "bee",
    hint: "Insect that makes honey",
  },
  {
    word: "bow",
    hint: "Ribbon",
  },
  {
    word: "box",
    hint: "Put things inside",
  },
  {
    word: "boy",
    hint: "Young man",
  },
  {
    word: "bun",
    hint: "Bread roll",
  },
  {
    word: "bus",
    hint: "Vehicle",
  },
  {
    word: "but",
    hint: "While just the opposite",
  },
  {
    word: "buy",
    hint: "Use money to",
  },
  {
    word: "cab",
    hint: "Vehicle",
  },
  {
    word: "can",
    hint: "Able to",
  },
  {
    word: "cap",
    hint: "Wear on your head",
  },
  {
    word: "car",
    hint: "Vehicle",
  },
  {
    word: "cat",
    hint: "Animal that purrs",
  },
  {
    word: "cop",
    hint: "Police",
  },
  {
    word: "cot",
    hint: "Where babies sleep in",
  },
  {
    word: "cow",
    hint: "Farm animal",
  },
  {
    word: "cry",
    hint: "When you are sad",
  },
  {
    word: "cub",
    hint: "Baby animal",
  },
  {
    word: "cup",
    hint: "Drink",
  },
  {
    word: "cut",
    hint: "Scissors",
  },
  {
    word: "dad",
    hint: "Family",
  },
  {
    word: "day",
    hint: "Morning",
  },
  {
    word: "den",
    hint: "Where wild animals stay",
  },
  {
    word: "dew",
    hint: "Water droplet",
  },
  {
    word: "dig",
    hint: "Garden soil",
  },
  {
    word: "din",
    hint: "Loud noise",
  },
  {
    word: "dog",
    hint: "Animal that woofs",
  },
  {
    word: "dot",
    hint: "Small round spot",
  },
  {
    word: "dry",
    hint: "In the desert",
  },
  {
    word: "ear",
    hint: "Hear",
  },
  {
    word: "eat",
    hint: "When you are hungry",
  },
  {
    word: "eel",
    hint: "Animal that lives in the sea",
  },
  {
    word: "elf",
    hint: "Santa’s helper",
  },
  {
    word: "elk",
    hint: "Large deer",
  },
  {
    word: "end",
    hint: "Finish",
  },
  {
    word: "eye",
    hint: "See",
  },
  {
    word: "fan",
    hint: "Blows wind",
  },
  {
    word: "few",
    hint: "Not ‘many’ but ___",
  },
  {
    word: "fit",
    hint: "Strong and ___",
  },
  {
    word: "fly",
    hint: "Birds and planes",
  },
  {
    word: "fog",
    hint: "Misty",
  },
  {
    word: "for",
    hint: "This present is ___ my friend",
  },
  {
    word: "fox",
    hint: "Sly and cunning animal",
  },
  {
    word: "fry",
    hint: "Cook using hot oil",
  },
  {
    word: "fun",
    hint: "Enjoyable",
  },
  {
    word: "fur",
    hint: "Soft animal hair",
  },
  {
    word: "gem",
    hint: "Precious stone",
  },
  {
    word: "get",
    hint: "To receive",
  },
  {
    word: "gum",
    hint: "Thick liquid from trees",
  },
  {
    word: "gym",
    hint: "Where you work out",
  },
  {
    word: "hat",
    hint: "Wear on your head",
  },
  {
    word: "hay",
    hint: "What horses eat",
  },
  {
    word: "hen",
    hint: "Female chicken",
  },
  {
    word: "her",
    hint: "Describe a female",
  },
  {
    word: "him",
    hint: "Describe a male",
  },
  {
    word: "his",
    hint: "Describe a male",
  },
  {
    word: "hit",
    hint: "Strike",
  },
  {
    word: "hop",
    hint: "Jump",
  },
  {
    word: "hot",
    hint: "Sunny",
  },
  {
    word: "how",
    hint: "Question",
  },
  {
    word: "hut",
    hint: "Straw house",
  },
  {
    word: "ice",
    hint: "Water after freezing",
  },
  {
    word: "ink",
    hint: "Pen",
  },
  {
    word: "jam",
    hint: "Bread and strawberry ___",
  },
  {
    word: "jar",
    hint: "Store in a glass ___",
  },
  {
    word: "jet",
    hint: "Fast airplane",
  },
  {
    word: "jog",
    hint: "Slow run",
  },
  {
    word: "joy",
    hint: "Happy",
  },
  {
    word: "jug",
    hint: "Store water",
  },
  {
    word: "lab",
    hint: "Where scientists work",
  },
  {
    word: "lay",
    hint: "Put down",
  },
  {
    word: "leg",
    hint: "Feet",
  },
  {
    word: "let",
    hint: "Allow",
  },
  {
    word: "lid",
    hint: "Cover",
  },
  {
    word: "lie",
    hint: "Not telling the truth",
  },
  {
    word: "lot",
    hint: "Large number",
  },
  {
    word: "low",
    hint: "Short",
  },
  {
    word: "man",
    hint: "Male",
  },
  {
    word: "map",
    hint: "To find out where you are",
  },
  {
    word: "mat",
    hint: "Sit on a ___",
  },
  {
    word: "may",
    hint: "Month",
  },
  {
    word: "mom",
    hint: "Family",
  },
  {
    word: "mop",
    hint: "Clean the floor",
  },
  {
    word: "mow",
    hint: "Cut grass",
  },
  {
    word: "mud",
    hint: "Soil and water",
  },
  {
    word: "mug",
    hint: "A big cup",
  },
  {
    word: "mum",
    hint: "Family",
  },
  {
    word: "net",
    hint: "Catch fish",
  },
  {
    word: "nod",
    hint: "Agree with",
  },
  {
    word: "not",
    hint: "Used to make words negative",
  },
  {
    word: "now",
    hint: "At this time",
  },
  {
    word: "nut",
    hint: "Dry seed",
  },
  {
    word: "oak",
    hint: "Tree with acorns",
  },
  {
    word: "oar",
    hint: "Paddle a boat",
  },
  {
    word: "oat",
    hint: "Cereal",
  },
  {
    word: "odd",
    hint: "Strange or weird",
  },
  {
    word: "off",
    hint: "Switch ___ the lights",
  },
  {
    word: "oil",
    hint: "For frying",
  },
  {
    word: "old",
    hint: "Grey hair",
  },
  {
    word: "one",
    hint: "Number",
  },
  {
    word: "our",
    hint: "Belong to one or more people",
  },
  {
    word: "out",
    hint: "Not ‘in’ but ___",
  },
  {
    word: "owl",
    hint: "Animal that goes “hoot hoot”",
  },
  {
    word: "own",
    hint: "Belongs to you",
  },
  {
    word: "pad",
    hint: "Move quietly",
  },
  {
    word: "pat",
    hint: "Tap gently",
  },
  {
    word: "paw",
    hint: "Foot of an animal",
  },
  {
    word: "pea",
    hint: "Green seed",
  },
  {
    word: "peg",
    hint: "Used to hang clothes",
  },
  {
    word: "pen",
    hint: "Draw",
  },
  {
    word: "pet",
    hint: "Animals you keep at home",
  },
  {
    word: "pie",
    hint: "Baked pastry",
  },
  {
    word: "pig",
    hint: "Animal that rolls in the mud",
  },
  {
    word: "pin",
    hint: "Sharp piece of metal",
  },
  {
    word: "pod",
    hint: "Where peas can be found",
  },
  {
    word: "pop",
    hint: "Explode or burst open",
  },
  {
    word: "pot",
    hint: "Keep soil",
  },
  {
    word: "put",
    hint: "Leave something on the table",
  },
  {
    word: "rag",
    hint: "Old cloth",
  },
  {
    word: "rat",
    hint: "Big mouse",
  },
  {
    word: "raw",
    hint: "Uncooked",
  },
  {
    word: "ray",
    hint: "A line of light",
  },
  {
    word: "red",
    hint: "Colour",
  },
  {
    word: "rig",
    hint: "Make ready to set sail",
  },
  {
    word: "rod",
    hint: "Straight stick",
  },
  {
    word: "rot",
    hint: "Leave food outside for a long time",
  },
  {
    word: "row",
    hint: "Things in a straight line",
  },
  {
    word: "rub",
    hint: "Press and move back and forth",
  },
  {
    word: "rug",
    hint: "Carpet",
  },
  {
    word: "run",
    hint: "Faster than a jog",
  },
  {
    word: "sad",
    hint: "Cry",
  },
  {
    word: "saw",
    hint: "Cut wood",
  },
  {
    word: "say",
    hint: "Tell using words",
  },
  {
    word: "see",
    hint: "Eyes",
  },
  {
    word: "sew",
    hint: "Needle and thread",
  },
  {
    word: "shy",
    hint: "Timid and quiet",
  },
  {
    word: "sit",
    hint: "Chair",
  },
  {
    word: "six",
    hint: "Number",
  },
  {
    word: "sky",
    hint: "Clouds",
  },
  {
    word: "sly",
    hint: "Like a fox",
  },
  {
    word: "sob",
    hint: "Cry",
  },
  {
    word: "son",
    hint: "Family",
  },
  {
    word: "sow",
    hint: "Plant seeds",
  },
  {
    word: "tag",
    hint: "Chase and touch",
  },
  {
    word: "tap",
    hint: "Lightly hit",
  },
  {
    word: "tan",
    hint: "Become brown in colour",
  },
  {
    word: "tea",
    hint: "Coffee and ___",
  },
  {
    word: "the",
    hint: "___ sky is blue",
  },
  {
    word: "tie",
    hint: "Make a knot or bow",
  },
  {
    word: "tin",
    hint: "Metal box",
  },
  {
    word: "tip",
    hint: "Pointed end",
  },
  {
    word: "toe",
    hint: "Feet",
  },
  {
    word: "ton",
    hint: "Heavy weight",
  },
  {
    word: "top",
    hint: "Above",
  },
  {
    word: "tow",
    hint: "Truck pulling a car",
  },
  {
    word: "toy",
    hint: "Play things",
  },
  {
    word: "try",
    hint: "Attempt to do something",
  },
  {
    word: "tub",
    hint: "Where babies bathe in",
  },
  {
    word: "two",
    hint: "Number",
  },
  {
    word: "van",
    hint: "Vehicle to carry goods",
  },
  {
    word: "vow",
    hint: "Solemn promise",
  },
  {
    word: "wag",
    hint: "Dog’s tail",
  },
  {
    word: "wax",
    hint: "What bees use to build honeycombs",
  },
  {
    word: "way",
    hint: "How something is done",
  },
  {
    word: "web",
    hint: "Spider’s home",
  },
  {
    word: "wet",
    hint: "In the rain",
  },
  {
    word: "who",
    hint: "Question",
  },
  {
    word: "why",
    hint: "Question",
  },
  {
    word: "win",
    hint: "Victory",
  },
  {
    word: "wit",
    hint: "Smart",
  },
  {
    word: "wow",
    hint: "Amazing",
  },
  {
    word: "yay",
    hint: "Excited and happy",
  },
  {
    word: "yes",
    hint: "Agree",
  },
  {
    word: "yet",
    hint: "In spite of",
  },
  {
    word: "you",
    hint: "Not ‘me’ but ___",
  },
  {
    word: "zap",
    hint: "With a laser beam",
  },
  {
    word: "zip",
    hint: "Fasten your jacket",
  },
  {
    word: "zoo",
    hint: "Where wild animals are kept",
  },
];

function populateDefinition(wordHints, index) {
  addOverlayOpenButtonEvent();
  addOverlayCloseButtonEvent();

  // const definition = await fetchDefinition(word);
  const wordDefinition = document.getElementById("word-definition");
  wordDefinition.textContent = wordHints[index].hint;
}

function addOverlayOpenButtonEvent() {
  let overlayClose = document.getElementById("hint-button");
  overlayClose.addEventListener("click", () => {
    const overlay = document.getElementById("overlay");
    overlay.style.opacity = 100;
  });
}

function addOverlayCloseButtonEvent() {
  const hint = document.getElementById("hint-button");
  hint.addEventListener("blur", () => {
    const overlay = document.getElementById("overlay");
    overlay.style.opacity = 0;
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  createSquares();

  let guessedWords = [[]];
  let availableSpace = 1;

  // let wordHintJson = await importWordList();
  let wordHintJson = wordList;

  const index = Math.floor(Math.random() * wordHintJson.length);
  let word = wordHintJson[index].word;

  populateDefinition(wordHintJson, index);

  let guessedWordCount = 0;

  const keys = document.querySelectorAll(".keyboard-row button");

  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1];
  }

  function updateGuessedWords(letter) {
    const currentWordArr = getCurrentWordArr();

    if (currentWordArr && currentWordArr.length < 3) {
      currentWordArr.push(letter);

      const availableSpaceEl = document.getElementById(String(availableSpace));
      availableSpaceEl.textContent = letter;

      availableSpace = availableSpace + 1;
    }
  }

  function getTileColor(letter, index) {
    const isCorrectLetter = word.includes(letter);

    if (!isCorrectLetter) {
      return "rgb(240, 240, 240)";
    }

    const letterInThatPosition = word.charAt(index);
    const isCorrectPosition = letter === letterInThatPosition;

    if (isCorrectPosition) {
      return "rgb(170, 242, 0)";
    }

    return "rgb(255, 197, 148)";
  }

  function handleSubmitWord() {
    const currentWordArr = getCurrentWordArr();
    if (currentWordArr.length !== 3) {
      window.alert("Use more letters");
    }

    const currentWord = currentWordArr.join("");

    fetch(`https://wordsapiv1.p.rapidapi.com/words/${currentWord}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "5a23451553msh5f1c33f80b83dd3p1e7593jsn91325d766dd1",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }

        const firstLetterId = guessedWordCount * 3 + 1;
        const interval = 200;
        currentWordArr.forEach((letter, index) => {
          setTimeout(() => {
            const tileColor = getTileColor(letter, index);

            const letterId = firstLetterId + index;
            const letterEl = document.getElementById(letterId);
            letterEl.classList.add("animate__flipInX");
            letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
          }, interval * index * 1.5);
        });

        guessedWordCount += 1;

        const delay = 900;
        setTimeout(() => {
          if (currentWord === word) {
            alert("Well done!");
            window.location.reload();
            return;
          }

          if (guessedWordCount === 6) {
            alert(`The word is "${word}".`);
            window.location.reload();
            return;
          }
        }, delay);

        guessedWords.push([]);
      })
      .catch(() => {
        window.alert("Try another word.");
      });
  }

  function createSquares() {
    const gameBoard = document.getElementById("board");

    for (let index = 0; index < 18; index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate__animated");
      square.setAttribute("id", index + 1);
      gameBoard.appendChild(square);
    }
  }

  function handleDeleteLetter() {
    const currentWordArr = getCurrentWordArr();
    currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr;

    const lastLetterIdx = availableSpace - 1;
    if (lastLetterIdx === guessedWordCount * 3) {
      return;
    }

    const lastLetterEl = document.getElementById(String(lastLetterIdx));

    lastLetterEl.textContent = "";
    availableSpace = availableSpace - 1;
  }

  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const letter = target.getAttribute("data-key");

      if (letter === "enter") {
        handleSubmitWord();
        return;
      }

      if (letter === "del") {
        handleDeleteLetter();
        return;
      }

      updateGuessedWords(letter);
    };
  }

  document.addEventListener("keyup", (e) => {
    if (e.key === undefined) {
      return;
    }

    const letter = e.key;
    if (letter.toLowerCase() === "enter") {
      handleSubmitWord();
      return;
    }

    if (letter.toLowerCase() === "backspace") {
      handleDeleteLetter();
      return;
    }

    if (e.code !== `Key${e.key.toUpperCase()}`) return;

    updateGuessedWords(letter);
  });
});
