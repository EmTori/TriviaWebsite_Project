function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
  }

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}


function populate() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;

      // show options
      var choices = quiz.getQuestionIndex().choices;
      for(var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          guess("button" + i, choices[i]);
      }

      showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      populate();
  }
};


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
  var gameOverHTML = "<h1 id='result'>RESULTS . . .</h1>";
  gameOverHTML += "<h2 id='score'> YOUR SCORE IS : </h2>";
  gameOverHTML += "<h2 id='scoreNumber'>"+ quiz.score + " / " + quiz.questions.length +"</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
  new Question("Where Is The Avengers Tower Located?", ["Brooklyn", "Queens", "New York City", "Manhattan"], "New York City"),
  new Question("According To Tony Stark, What Is Phil Coulson's First Name?", ["Sergeant", "Agent", "Officer", "Director"], "Agent"),
  new Question("How Many Years Was Captain American Frozen In Ice?", ["70 Years", "60 Years", "100 Years", "90 Years"], "70 Years"),
  new Question("What Is Hawkeye's Real Name?", ["Clint Archer", "Oliver Queen", "Clint Barton", "Ronin"], "Clint Barton"),
  new Question("Who Pulls Captain America's Unconscious Body Out Of The Potomac River?", ["Sam Wilson", "Tony Stark", "Nick Fury", "The Winter Soldier"], "The Winter Soldier"),
  //new Question("What Is Howard Stark's “Greatest Creation?", ["Captain America's Shield", "His Child", "Arc Reactor", "Stark Industries"], "His Child"),
  new Question("What Year Was The First Iron Man Movie Released?", ["2009", "2007", "2008", "2006"], "2008"),
  new Question("What Is Captain America’s Shield Made Out Of?", ["Vibranium", "Titanium", "Adamantium", "Carbonadium"], "Vibranium"),
  new Question("What Country Are Scarlet Witch And Quicksilver From?", ["Russia", "Sokovia", "Germany", "Slovakia"], "Sokovia"),
  //new Question("Who Was The Last Holder Of The Space Stone Before Thanos?", ["Hydra", "The Collector", "Loki", "The Sorcerer Supreme"], "Loki"),
  //new Question("What Is NOT A Colour Of An Infinity Stone?", ["Black", "Orange", "Blue", "Green"], "Black"),
  new Question("What Is The Name Of The Universe Ant-Man Travels To When He Goes Subatomic?", ["The Astral Realm", "The Subatomic Realm", "The Quantum Realm", "The Atomic Realm"], "The Quantum Realm"),
  new Question("What Is The Name Of The Treaty Which Divides The Avengers Into Opposing Factions?", ["The Hero Accords", "The Sokovia Accords", "The S.H.I.E.L.D Accords", "The Wakanda Accords"], "The Sokovia Accords"),
  new Question("Which Of The Infinity Stones Is Hidden On Vormir?", ["The Soul Stone", "The  Mind Stone", "The Reality Stone", "The Power Stone"], "The Soul Stone"),
  new Question("What Does Dr.Strange Use To Control Time?", ["The Time Chair", "The Tesseract", "The Heart of the Universe", "The Eye Of Agamotto"], "The Eye Of Agamotto"),
  //new Question("How Tall Was Steve Rogers Before Taking The Super Soldier Serum?", ["5’7”", "5’9”", "5’6”", "5’4”"], "5’4”"),
  new Question("In “Thor: The Dark World”, Who Does Loki Turn Himself Into?", ["Black Widow", "Captain America", "Hawkeye", "Iron Man"], "Captain America"),
  //new Question("Who Destroys Thor's Hammer?", ["Hela", "Loki", "Thanos", "Ultron"], "Hela"),
  new Question("What Memento Does Peter Quill Have From His Mother?", ["A Teddy Bear", "A Photograph", "A Letter", "A Mix Tape"], "A Mix Tape"),
  new Question("What's The Name Of The AI Tony Stark Invented To Replace J.A.R.V.I.S.?",["E.D.I.T.H", "S.H.I.E.L.D", "F.R.I.D.A.Y", "U.L.T.R.O.N"], "F.R.I.D.A.Y"),
  new Question("In Which Film Did Black Widow First Appear?", ["Iron Man 2", "Thor", "Iron Man", "Captain America The First Avenger"], "Iron Man 2"),
  new Question("What Is The Name Of The Alien Race Loki Teams Up With In The Avengers?", ["The Frost Giants", "The Kree", "The Skrull", "The Chitauri"], "The Chitauri"),
  new Question("Who Can NOT Lift Thor’s Hammer?", ["Vision", "Hela", "Tony Stark", "Captain America"], "Tony Stark"),
  new Question("What Color Does Agatha’s Magic Appear In WandaVision?", ["Purple", "Black", "Red", "Blue"], "Purple"),
  new Question("Which Of These Does Tony Stark NOT Describe Himself As?", ["Philanthropist", "Playboy", "Millionaire", "Scientist"], "Scientist")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();