function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var heightFeet = parseFloat(document.getElementById("heightFeet").value);
  var heightInches = parseFloat(document.getElementById("heightInches").value);

  if (
    isNaN(weight) ||
    isNaN(heightFeet) ||
    isNaN(heightInches) ||
    weight <= 0 ||
    heightFeet < 0 ||
    heightInches < 0
  ) {
    document.getElementById("result").innerText =
      "Please enter valid weight and height.";
    return;
  }

  // Convert feet and inches to total inches
  var heightInInches = heightFeet * 12 + heightInches;
  const heightMeter = heightInInches * 0.0254;

  // Use the total height in inches for BMI calculation
  var bmi = weight / (heightMeter * heightMeter);
  console.log(bmi);
  var result = "Your BMI is " + bmi.toFixed(2) + ". ";

  if (bmi < 18.5) {
    result += "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result += "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    result += "Overweight";
  } else {
    result += "Obese";
  }

  document.getElementById("result").innerText = result;
}
