var settings =
{
  // The language of the quiz
  language: "en", // "sr",
  // Number of questions in a quiz
  n_questions: 4,
  // Whether the user can specify the number of questions
  can_enter_n_questions: true,
  // Whether questions are shuffled
  has_random_questions: true,
  // Whether answers are shuffled
  has_random_answers: true,
};

var questions_text = {};

questions_text.en = [
  {
    question: '<img id="img-element" src="img/co.png" class="img-fluid" alt="Co Cobalt">',
    answers: ["Coperniclum", "Chromium", "Cobalt", "Copper"],
    correct_answer: "Cobalt"
  },
  {
    question: '<img id="img-element" src="img/ni.png" class="img-fluid" alt="Ni Nickel">',
    answers: ["Nitrogen", "Niobium", "Nihonium", "Nickel"],
    correct_answer: "Nickel"
  },
  {
    question: '<img id="img-element" src="img/ne.png" class="img-fluid" alt="Ne Neon">',
    answers: ["Neon", "Neptuniun", "Neodymium", "Nobelium"],
    correct_answer: "Neon"
  },
  {
    question: '<img id="img-element" src="img/ru.png" class="img-fluid" alt="Ru Ruthenium">',
    answers: ["Radium", "Ruthenium", "Rubidium", "Rhodium"],
    correct_answer: "Ruthenium"
  },
  {
    question: '<img id="img-element" src="img/pa.png" class="img-fluid" alt="Pa Protactinium">',
    answers: ["Protactinium", "Praseodymium", "Platinum", "Palladium"],
    correct_answer: "Protactinium"
  },
  {
    question: '<img id="img-element" src="img/ga.png" class="img-fluid" alt="Ga Gallium">',
    answers: ["Germanium", "Gold", "Oganesson", "Gallium"],
    correct_answer: "Gallium"
  },
  {
    question: '<img id="img-element" src="img/sn.png" class="img-fluid" alt="Sn Tin">',
    answers: ["Strontium", "Scandium", "Tin", "Sillicon"],
    correct_answer: "Tin"
  },
  {
    question: '<img id="img-element" src="img/i.png" class="img-fluid" alt="I Iodine">',
    answers: ["Iridium", "Iodine", "Indium", "Iron"],
    correct_answer: "Iodine"
  },
  {
    question: '<img id="img-element" src="img/au.png" class="img-fluid" alt="Au Gold">',
    answers: ["Gold", "Actinium", "Americium", "Aluminium"],
    correct_answer: "Gold"
  },
  {
    question: '<img id="img-element" src="img/br.png" class="img-fluid" alt="Br Bromine">',
    answers: ["Berillium", "Barium", "Bromine", "Bohrium"],
    correct_answer: "Bromine"
  }
];

questions_text.sr = [
  {
    question: '<img id="img-element" src="img/co.png" class="img-fluid" alt="Co Cobalt">',
    answers: ["Coperniclum", "Chromium", "Cobalt", "Copper"],
    correct_answer: "Cobalt"
  },
  {
    question: '<img id="img-element" src="img/ni.png" class="img-fluid" alt="Ni Nickel">',
    answers: ["Nitrogen", "Niobium", "Nihonium", "Nickel"],
    correct_answer: "Nickel"
  },
  {
    question: '<img id="img-element" src="img/ne.png" class="img-fluid" alt="Ne Neon">',
    answers: ["Neon", "Neptuniun", "Neodymium", "Nobelium"],
    correct_answer: "Neon"
  },
  {
    question: '<img id="img-element" src="img/ru.png" class="img-fluid" alt="Ru Ruthenium">',
    answers: ["Radium", "Ruthenium", "Rubidium", "Rhodium"],
    correct_answer: "Ruthenium"
  },
  {
    question: '<img id="img-element" src="img/pa.png" class="img-fluid" alt="Pa Protactinium">',
    answers: ["Protactinium", "Praseodymium", "Platinum", "Palladium"],
    correct_answer: "Protactinium"
  },
  {
    question: '<img id="img-element" src="img/ga.png" class="img-fluid" alt="Ga Gallium">',
    answers: ["Germanium", "Gold", "Oganesson", "Gallium"],
    correct_answer: "Gallium"
  },
  {
    question: '<img id="img-element" src="img/sn.png" class="img-fluid" alt="Sn Tin">',
    answers: ["Strontium", "Scandium", "Tin", "Sillicon"],
    correct_answer: "Tin"
  },
  {
    question: '<img id="img-element" src="img/i.png" class="img-fluid" alt="I Iodine">',
    answers: ["Iridium", "Iodine", "Indium", "Iron"],
    correct_answer: "Iodine"
  },
  {
    question: '<img id="img-element" src="img/au.png" class="img-fluid" alt="Au Gold">',
    answers: ["Gold", "Actinium", "Americium", "Aluminium"],
    correct_answer: "Gold"
  },
  {
    question: '<img id="img-element" src="img/br.png" class="img-fluid" alt="Br Bromine">',
    answers: ["Berillium", "Barium", "Bromine", "Bohrium"],
    correct_answer: "Bromine"
  }
];

var text_messages = {};

text_messages.en = {
  title: '<h1 class="title">PERIODIC TABLE</h1>',
  subtitle: '<p class="subtitle">Guess the name of the element based on its symbol</p>',
  enter_n_questions: 'placeholder="Enter the number of questions"',
  start_quiz: "Start the Quiz",
  restart_quiz: "Restart the Quiz",
  show_answers: "Show answers",
  wrong_input_alert_pre: "Wrong input: ",
  wrong_input_alert_post: "! You must enter a number from 1 to 10.",
  wrong_input_message: '<p class="text-white uppercase">Try again</p>',
  quiz_finished_message_pre: "<p class='congrats text-center text-white uppercase'>Congratulations</p>",
  quiz_finished_message_post_1: "<p id='reward'><span class='text-white'>You won </span><span class='text-pink'></p>",
  quiz_finished_message_post_2: "&nbsp" + "<span class='text-white'>points</span></p>",
  correct_answer_message_pre: "<img src='img/corr.png' class='mx-auto mb-1' alt='correct icon'> &mdash; ",
  incorrect_answer_message_pre: "<img src='img/wrong.png' class='mx-auto mb-1' alt='wrong icon'> &mdash; ",
  incorrect_answer_message: "Correct answer &mdash; ",
};

text_messages.sr = {
  title: '<h1 class="title">PERIODNI SISTEM</h1>',
  subtitle: '<p class="subtitle">Pogodite ime elementa na osnovu njegovog simbola</p>',
  enter_n_questions: "Unesite broj pitanja:",
  start_quiz: "Počnite kviz",
  restart_quiz: "Ponovo počnite kviz",
  show_answers: "Prikažite odgovore",
  wrong_input_alert_pre: "Pogrešan unos: ",
  wrong_input_alert_post: "! Molim Vas, pokušajte ponovo.",
  wrong_input_message: '<p class="text-white uppercase">Pokušajte ponovo.</p>',
  quiz_finished_message_pre: "<p class='congrats text-center text-white uppercase'>Čestitamo</p>",
  quiz_finished_message_post_1: "<p id='reward'><span class='text-white'>Osvojili ste </span><span class='text-pink'>",
  quiz_finished_message_post_2: "&nbsp" + "<span class='text-white'>poena</span></p>",
  correct_answer_message_pre: "<img src='img/corr.png' class='mx-auto mb-1' alt='correct icon'> &mdash; ",
  incorrect_answer_message_pre: "<img src='img/wrong.png' class='mx-auto mb-1' alt='wrong icon'> &mdash; ",
  incorrect_answer_message: "Tačan odgovor &mdash; ",
};
