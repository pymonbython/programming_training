const questionData = [
  [
    "Która aplikacja służy do automatyzacji republikacji postów?",
    ["PubliQuick", "SEOPS-Console", "Botten Anna", "Republish userScript"],
    3,
  ],
  [
    "Która aplikacja służy do automatyzacji procesów SEO Ops?",
    ["Algomarie", "SEOPS", "PubliQuick", "A(lt)pp"],
    1,
  ],
  [
    "Który moduł odpowiedzialny jest za automatyzację generowania dokumentów w builderze NGB?",
    ["ExampleMapper", "TemplateMaker", "Botten Anna"],
    1,
  ],
];

// pytanie [0]
// odpowiedzi [1]
// prawidłowa odpowiedź [2]

class Question {
  #title;
  #answers;
  #correctAnswer;

  constructor(title, answers, correctAnswer) {
    this.#title = title;
    this.#answers = answers;
    this.#correctAnswer = correctAnswer;
  }

  get title() {
    return this.#title;
  }

  get answers() {
    return this.#answers;
  }

  get correctAnswer() {
    return this.#correctAnswer;
  }
}

class Quiz {
  #questions;
  #currentQuestionIndex;
  #score;

  constructor(data) {
    this.#questions = data.map(
      (questionData) =>
        new Question(questionData[0], questionData[1], questionData[2])
    );
    this.#currentQuestionIndex = 0;
    this.#score = 0;
  }

  displayQuestion() {
    const questionElement = document.querySelector("#question");
    const answersEelement = document.querySelector("#answers");

    questionElement.textContent =
      this.#questions[this.#currentQuestionIndex].title;
    let output = "<select>";
    this.#questions[this.#currentQuestionIndex].answers.forEach(
      (answer, index) => {
        output += `<option value="${index}">${answer}</option>`;
      }
    );

    output += "</select>";
    document.querySelector("#answers").innerHTML = output;
  }

  nextQuestion() {
    if (this.#currentQuestionIndex >= this.#questions.length - 1) {
      alert("To już wszystkie pytania.");
      document.querySelector("#result").innerHTML =
        `<p>Koniec. Liczba punktów ${this.#score} na ${this.#questions.length}.</p>`;
    }
    const selectedAnswer = document.querySelector("select").value;
    if (
      selectedAnswer ==
      this.#questions[this.#currentQuestionIndex].correctAnswer
    ) {
      this.#score++;
      console.log(this.#score);
    }

    this.#currentQuestionIndex++;
    if (this.#currentQuestionIndex < this.#questions.length)
      this.displayQuestion();
  }
}

const quiz = new Quiz(questionData);
quiz.displayQuestion();
