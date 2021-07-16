const randomNumber = Math.floor(Math.random() * 100 + 1);
const guessNumber = document.getElementById("num");
const button = document.getElementById("check_btn");
const result = document.getElementById("result");
const attempts = document.getElementById("attm");
let guess = 0;

num = function () {
  const guessNumber = document.getElementById("num").value;
  console.log(guessNumber);

  document.getElementById("num").value = "";
  guess += 1;
  document.querySelector("check_btn").innerHTML = guess;

  if (guessNumber < randomNumber) {
    result.innerHTML = "Try A Higher Number";
    attm.innerHTML = attm.innerHTML = `Number of attempts: ${guess}`;
    guess++;
  } else if (guessNumber > randomNumber) {
    result.innerHTML = "Try A Smaller Number";
    attm.innerHTML = `Number of attempts: ${guess}`;
    guess++;
  } else if (guessNumber === randomNumber) {
    result.innerHTML = "Congratulations! Correct Number";
    attm.innerHTML = `Number of attempts: ${guess}`;
    finish();
  } else {
    alert("Please enter number");
  }

  function finish() {
    check_btn.disabled = true;
    num.disabled = true;
  }
};
