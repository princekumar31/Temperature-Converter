function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitSpan = document.getElementById("fahrenheit");
    const kelvinSpan = document.getElementById("kelvin");

    if (celsiusInput.value !== "") {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        fahrenheitSpan.textContent = fahrenheit.toFixed(2);
        kelvinSpan.textContent = kelvin.toFixed(2);
    } else {
        fahrenheitSpan.textContent = "-";
        kelvinSpan.textContent = "-";
    }
}