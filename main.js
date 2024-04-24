var gender;
var predictedHeight;

// put everything together
document.getElementById("men").addEventListener("click", man);
document.getElementById("women").addEventListener("click", woman);
document.getElementById("button").addEventListener("click", button);

//function
function button() {
  //input
  let num1 = +document.getElementById("myheight").value;
  let num2 = +document.getElementById("mumsheight").value;
  let num3 = +document.getElementById("dadsheight").value;

  //process
  if (gender == "man") {
    // calculate the man number
    sum = (num2 + num3 + 8) / 2;
  } else {
    gender == "woman";
    sum = (num2 + num3 - 4) / 2;
    // this code runs if the if-statement expression is false
  }

  //output
  document.getElementById("answer").innerHTML = sum;
}

function man() {
  gender = "man";
}

function woman() {
  gender = "woman";
}

document.getElementById("clear").addEventListener("click", clear);

function clear() {
  document.getElementById("myheight").value = `   `;
  document.getElementById("mumsheight").value = ``;
  document.getElementById("dadsheight").value = ``;
  document.getElementById("answer").innerHTML = ``;
}
