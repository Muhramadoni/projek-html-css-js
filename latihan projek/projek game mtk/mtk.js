function generateQuestion() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var operator = ["+", "-", "*"][Math.floor(Math.random() * 3)];

  var question = num1 + " " + operator + " " + num2;
  document.getElementById("question").innerText = question;
}

function checkAnswer() {
  var userAnswer = parseInt(document.getElementById("answer").value);
  var questionParts = document.getElementById("question").innerText.split(" ");
  var num1 = parseInt(questionParts[0]);
  var operator = questionParts[1];
  var num2 = parseInt(questionParts[2]);

  var correctAnswer;
  switch (operator) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
  }

  var resultElement = document.getElementById("result");
  if (userAnswer === correctAnswer) {
    resultElement.innerText = "Jawaban Benar!";
  } else {
    resultElement.innerText =
      "Jawaban Salah. Jawaban yang benar adalah " + correctAnswer;
  }
}

// Generate pertanyaan saat halaman dimuat
generateQuestion();
