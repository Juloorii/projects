function convertTemperature() {
    var tempInput = document.getElementById("inputTemp").value;
    var tempUnit = document.getElementById("tempUnit").value;
    var resultElement = document.getElementById("result");
    var result;

    if (tempUnit === "celsius") {
        // Convert Celsius to Fahrenheit
        result = (tempInput * 9/5) + 32;
        resultElement.innerHTML = tempInput + " Celsius = " + result + " Fahrenheit";
    } else if (tempUnit === "fahrenheit") {
        // Convert Fahrenheit to Celsius
        result = (tempInput - 32) * 5/9;
        resultElement.innerHTML = tempInput + " Fahrenheit = " + result + " Celsius";
    }
}
