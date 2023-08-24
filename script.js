var str="skill safari"
//length of the string
console.log(str.length)
//converting into capital letters
var string=str.toUpperCase()
console.log(string)
//index position of a
console.log(str.indexOf("a"))
//conversatio between ironman & captain
console.log("captain:i'm the king of this world.\n ironman:if you are bad im your dad.\n captain:Dont mess with me.\n ironman:if you have enough guts then only talk with me \n captain:i know you are only talkative person")
//BMI calculator
function findBMI() {
    var height = +document.querySelector('#height').value;
    var weight = +document.querySelector('#weight').value;
    // check height & weight are a valid number
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
      alert('Please fill all fields with valid numbers');
      return;
    }
    // convert height to meters
    height = height / 100;
    var bmi = weight / (height * height);
    showResult(bmi);
  }