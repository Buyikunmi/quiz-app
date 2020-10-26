const questions = [
  {
    id: 1,
    type: "multiple",
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    correct_answer: "Richard Branson",
    incorrect_answers: ["Alan Sugar", "Donald Trump", "Bill Gates"],
  },
  {
    id: 2,
    type: "multiple",
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    correct_answer: "HTC",
    incorrect_answers: ["Oculus", "Google", "Razer"],
  },
  {
    id: 3,
    type: "multiple",
    question:
      "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
    correct_answer: "Demolition",
    incorrect_answers: [
      "The Dream Team",
      "The Bushwhackers",
      "The British Bulldogs",
    ],
  },
  {
    id: 4,
    type: "multiple",
    question:
      "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    correct_answer: "Key",
    incorrect_answers: ["Sword", "Pen", "Cellphone"],
  },
  {
    id: 5,
    type: "multiple",
    question:
      "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    correct_answer: "Cabbage Patch Kids",
    incorrect_answers: ["Transformers", "Care Bears", "Rubik&rsquo;s Cube"],
  },
  {
    id: 6,
    type: "multiple",
    question: "What does a funambulist walk on?",
    correct_answer: "A Tight Rope",
    incorrect_answers: ["Broken Glass", "Balls", "The Moon"],
  },
  {
    id: 7,
    type: "multiple",
    question: "Area 51 is located in which US state?",
    correct_answer: "Nevada",
    incorrect_answers: ["Arizona", "New Mexico", "Utah"],
  },
  {
    id: 8,
    type: "multiple",
    question:
      "What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ",
    correct_answer: "Subscriber",
    incorrect_answers: ["Single", "Secure", "Solid"],
  },
  {
    id: 9,
    type: "multiple",
    question: "What geometric shape is generally used for stop signs?",
    correct_answer: "Octagon",
    incorrect_answers: ["Hexagon", "Circle", "Triangle"],
  },
  {
    id: 10,
    type: "multiple",
    question: "What is the name of the Jewish New Year?",
    correct_answer: "Rosh Hashanah",
    incorrect_answers: ["Elul", "New Year", "Succoss"],
  },
  {
    id: 11,
    type: "multiple",
    question: "Which one of the following rhythm games was made by Harmonix?",
    correct_answer: "Rock Band",
    incorrect_answers: [
      "Meat Beat Mania",
      "Guitar Hero Live",
      "Dance Dance Revolution",
    ],
  },
  {
    id: 12,
    type: "multiple",
    question: "How many colors are there in a rainbow?",
    correct_answer: "7",
    incorrect_answers: ["8", "9", "10"],
  },
  {
    id: 13,
    type: "multiple",
    question: "Red Vines is a brand of what type of candy?",
    correct_answer: "Licorice",
    incorrect_answers: ["Lollipop", "Chocolate", "Bubblegum"],
  },
  {
    id: 14,
    type: "multiple",
    question: "What is the nickname of the US state of California?",
    correct_answer: "Golden State",
    incorrect_answers: ["Sunshine State", "Bay State", "Treasure State"],
  },
  {
    id: 15,
    type: "multiple",
    question:
      "What is on display in the Madame Tussaud&#039;s museum in London?",
    correct_answer: "Wax sculptures",
    incorrect_answers: [
      "Designer clothing",
      "Unreleased film reels",
      "Vintage cars",
    ],
  },
  {
    id: 16,
    type: "multiple",
    question:
      "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    correct_answer: "Spruce Goose",
    incorrect_answers: ["Noah&#039;s Ark", "Fat Man", "Trojan Horse"],
  },
  {
    id: 17,
    type: "multiple",
    question: "What is the Spanish word for &quot;donkey&quot;?",
    correct_answer: "Burro",
    incorrect_answers: ["Caballo", "Toro", "Perro"],
  },
  {
    id: 18,
    type: "multiple",
    question: "What is the French word for &quot;hat&quot;?",
    correct_answer: "Chapeau",
    incorrect_answers: ["Bonnet", " &Eacute;charpe", " Casque"],
  },
  {
    id: 19,
    type: "multiple",
    question: "Who is depicted on the US hundred dollar bill?",
    correct_answer: "Benjamin Franklin",
    incorrect_answers: [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson",
    ],
  },
  {
    id: 20,
    type: "multiple",
    question:
      "According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;",
    correct_answer: "Truth",
    incorrect_answers: ["Answer", "Cause", "Source"],
  },
  {
    id: 21,
    type: "multiple",
    question: "What is the name of Poland in Polish?",
    correct_answer: "Polska",
    incorrect_answers: ["Pupcia", "Polszka", "P&oacute;land"],
  },
  {
    id: 22,
    type: "multiple",
    question: "What do the letters of the fast food chain KFC stand for?",
    correct_answer: "Kentucky Fried Chicken",
    incorrect_answers: [
      "Kentucky Fresh Cheese",
      "Kibbled Freaky Cow",
      "Kiwi Food Cut",
    ],
  },
  {
    id: 23,
    type: "multiple",
    question: "What color is the &quot;Ex&quot; in FedEx Ground?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Light Blue", "Orange"],
  },
  {
    id: 24,
    type: "multiple",
    question: "How tall is the Burj Khalifa?",
    correct_answer: "2,722 ft",
    incorrect_answers: ["2,717 ft", "2,546 ft", "3,024 ft"],
  },
  {
    id: 25,
    type: "multiple",
    question:
      "What machine element is located in the center of fidget spinners?",
    correct_answer: "Bearings",
    incorrect_answers: ["Axles", "Gears", "Belts"],
  },
  {
    id: 26,
    type: "multiple",
    question: "What is Tasmania?",
    correct_answer: "An Australian State",
    incorrect_answers: [
      "A flavor of Ben and Jerry&#039;s ice-cream",
      "A Psychological Disorder",
      "The Name of a Warner Brothers Cartoon Character",
    ],
  },
  {
    id: 27,
    type: "multiple",
    question: "In which fast food chain can you order a Jamocha Shake?",
    correct_answer: "Arby&#039;s",
    incorrect_answers: ["McDonald&#039;s", "Burger King", "Wendy&#039;s"],
  },
  {
    id: 28,
    type: "multiple",
    question: "Which of the following is the IATA code for Manchester Airport?",
    correct_answer: "MAN",
    incorrect_answers: ["EGLL", "LHR", "EGCC"],
  },
  {
    id: 29,
    type: "multiple",
    question: "What nuts are used in the production of marzipan?",
    correct_answer: "Almonds",
    incorrect_answers: ["Peanuts", "Walnuts", "Pistachios"],
  },
  {
    id: 30,
    type: "multiple",
    question:
      "The likeness of which president is featured on the rare $2 bill of USA currency?",
    correct_answer: "Thomas Jefferson",
    incorrect_answers: [
      "Martin Van Buren",
      "Ulysses Grant",
      "John Quincy Adams",
    ],
  },
  {
    id: 31,
    type: "multiple",
    question:
      "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
    correct_answer: "Plum",
    incorrect_answers: ["Apple", "Peach", "Pear"],
  },
  {
    id: 32,
    type: "multiple",
    question:
      "Terry Gilliam was an animator that worked with which British comedy group?",
    correct_answer: "Monty Python",
    incorrect_answers: [
      "The Goodies&lrm;",
      "The League of Gentlemen&lrm;",
      "The Penny Dreadfuls",
    ],
  },
  {
    id: 33,
    type: "multiple",
    question: "When someone is inexperienced they are said to be what color?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Blue", "Yellow"],
  },
  {
    id: 34,
    type: "multiple",
    question: "How many furlongs are there in a mile?",
    correct_answer: "Eight",
    incorrect_answers: ["Two", "Four", "Six"],
  },
  {
    id: 35,
    type: "multiple",
    question:
      "When someone is cowardly, they are said to have what color belly?",
    correct_answer: "Yellow",
    incorrect_answers: ["Green", "Red", "Blue"],
  },
  {
    id: 36,
    type: "multiple",
    question: "What is the name of NASA&rsquo;s most famous space telescope?",
    correct_answer: "Hubble Space Telescope",
    incorrect_answers: ["Big Eye", "Death Star", "Millenium Falcon"],
  },
];

export function getQuestions() {
  return questions;
}
