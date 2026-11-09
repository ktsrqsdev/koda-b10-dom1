
const resultFahrenheit = document.getElementById("fahrenheit");
const resultReamur = document.getElementById("reamur");
const resultKelvin = document.getElementById("kelvin");

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertToReamur(celsius) {
    return celsius * 4 / 5;
}

function convertToKelvin(celsius) {
    return celsius + 273.15;
}

const temperature = 25;

const fahrenheit = convertToFahrenheit(temperature);
const reamur = convertToReamur(temperature);
const kelvin = convertToKelvin(temperature);

resultFahrenheit.textContent =
    temperature + "°C = " + fahrenheit + "°F";

resultReamur.textContent =
    temperature + "°C = " + reamur + "°R";

resultKelvin.textContent =
    temperature + "°C = " + kelvin + " K";
