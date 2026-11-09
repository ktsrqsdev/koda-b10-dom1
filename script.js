const celsiusInput = document.getElementById("celsius");
const resultTable = document.getElementById("resultTable");
let count = 0;

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertToReamur(celsius) {
    return celsius * 4 / 5;
}

function convertToKelvin(celsius) {
    return celsius + 273.15;
}

celsiusInput.addEventListener("keydown", function() {
    const value = celsiusInput.value;

    if (value === "") return;

    const celsius = parseFloat(value);
    const fahrenheit = convertToFahrenheit(celsius);
    const reamur = convertToReamur(celsius);
    const kelvin = convertToKelvin(celsius);

    count++;

    const row = `
    <tr>
        <td>${count}</td>
        <td>${celsius} °C</td>
        <td>${fahrenheit} °F</td>
        <td>${reamur} °R</td>
        <td>${kelvin} K</td>
    </tr>
    `;

    resultTable.innerHTML += row;
});