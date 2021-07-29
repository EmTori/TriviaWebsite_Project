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
  element.innerHTML = "QUESTION " + currentQuestionNumber + " OF " + quiz.questions.length;
};

function showScores() {
  var gameOverHTML = "<h1 id='result'>RESULTS . . .</h1>";
  gameOverHTML += "<h2 id='score'><pre>  YOUR     SCORE     IS     :  </pre></h2>";
  gameOverHTML += "<h2 id='scoreNumber'>"+ quiz.score + " / " + quiz.questions.length +"</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
  new Question("WHERE IS THE AVENGERS TOWER LOCATED", ["Brooklyn", "Queens", "New York City", "Manhattan"], "New York City"),
  new Question("ACCORDING TO TONY STARK, WHAT IS PHIL COULSONS FIRST NAME", ["Sergeant", "Agent", "Officer", "Director"], "Agent"),
  new Question("HOW MANY YEARS WAS CAPTAIN AMERICA FROZEN IN ICE", ["70 Years", "60 Years", "100 Years", "90 Years"], "70 Years"),
  new Question("WHAT IS HAWKEYES REAL NAME", ["Clint Archer", "Oliver Queen", "Clint Barton", "Ronin"], "Clint Barton"),
  new Question("WHO PULLS CAPTAIN AMERICAS UNCONSCIOUS BODY OUT OF THE POTOMAC RIVER", ["Sam Wilson", "Tony Stark", "Nick Fury", "The Winter Soldier"], "The Winter Soldier"),
  new Question("WHAT YEAR WAS THE FIRST IRON MAN MOVIE RELEASED", ["2009", "2007", "2008", "2006"], "2008"),
  new Question("WHAT IS CAPTAIN AMERICAS SHIELD MADE OUT OF", ["Vibranium", "Titanium", "Adamantium", "Carbonadium"], "Vibranium"),
  new Question("WHAT COUNTRY ARE SCARLET WITCH AND QUICKSILVER FROM", ["Russia", "Sokovia", "Germany", "Slovakia"], "Sokovia"),
  new Question("WHAT IS THE NAME OF THE UNIVERSE ANT-MAN TRAVELS TO WHEN HE GOES SUBATOMIC", ["The Astral Realm", "The Subatomic Realm", "The Quantum Realm", "The Atomic Realm"], "The Quantum Realm"),
  new Question("WHAT IS THE NAME OF THE TREATY WHICH DIVIDES THE AVENGERS INTO OPPOSING FACTIONS", ["The Hero Accords", "The Sokovia Accords", "The S.H.I.E.L.D Accords", "The Wakanda Accords"], "The Sokovia Accords"),
  new Question("WHICH OF THE INFINITY STONES IS HIDDEN ON VORMIR", ["The Soul Stone", "The  Mind Stone", "The Reality Stone", "The Power Stone"], "The Soul Stone"),
  new Question("WHAT DOES DR.STRANGE USE TO CONTROL TIME", ["The Time Chair", "The Tesseract", "The Heart of the Universe", "The Eye Of Agamotto"], "The Eye Of Agamotto"),
  new Question("IN THOR: THE DARK WORLD, WHO DOES LOKI TURN HIMSELF INTO", ["Black Widow", "Captain America", "Hawkeye", "Iron Man"], "Captain America"),
  new Question("WHAT MEMENTO DOES PETER QUILL HAVE FROM HIS MOTHER", ["A Teddy Bear", "A Photograph", "A Letter", "A Mix Tape"], "A Mix Tape"),
  new Question("WHATS THE NAME OF THE AI TONY STARK INVENTED TO REPLACE J.A.R.V.I.S.",["E.D.I.T.H", "S.H.I.E.L.D", "F.R.I.D.A.Y", "U.L.T.R.O.N"], "F.R.I.D.A.Y"),
  new Question("IN WHICH FILM DID BLACK WIDOW FIRST APPEAR", ["Iron Man 2", "Thor", "Iron Man", "Captain America The First Avenger"], "Iron Man 2"),
  new Question("WHAT IS THE NAME OF THE ALIEN RACE LOKI TEAMS UP WITH IN THE AVENGERS", ["The Frost Giants", "The Kree", "The Skrull", "The Chitauri"], "The Chitauri"),
  new Question("WHO CAN <u>NOT</u> LIFT THORS HAMMER", ["Vision", "Hela", "Tony Stark", "Captain America"], "Tony Stark"),
  new Question("WHAT COLOUE DOES AGATHAS MAGIC APPEAR IN WANDAVISION", ["Purple", "Black", "Red", "Blue"], "Purple"),
  new Question("WHICH OF THESE DOES TONY STARK <U>NOT</U> DESCRIBE HIMSELF AS", ["Philanthropist", "Playboy", "Millionaire", "Scientist"], "Scientist")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();