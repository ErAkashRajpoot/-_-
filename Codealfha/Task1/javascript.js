document.addEventListener('DOMContentLoaded', function () {
    const inputTemperature = document.getElementById('inputTemperature');
    const fromScale = document.getElementById('fromScale');
    const toScale = document.getElementById('toScale');
    const convertButton = document.getElementById('convertButton');
    const result = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(inputTemperature.value);
        const from = fromScale.value;
        const to = toScale.value;

        if (isNaN(temperature)) {
            result.textContent = 'Please enter a valid temperature.';
        } else {
            const convertedTemperature = convertTemperature(temperature, from, to);
            result.textContent = `${temperature} ${from} is equal to ${convertedTemperature.toFixed(2)} ${to}.`;
        }
    });

    function convertTemperature(temperature, from, to) {
        switch (from) {
            case 'celsius':
                switch (to) {
                    case 'fahrenheit':
                        return (temperature * 9/5) + 32;
                    case 'kelvin':
                        return temperature + 273.15;
                    default:
                        return temperature;
                }
            case 'fahrenheit':
                switch (to) {
                    case 'celsius':
                        return (temperature - 32) * 5/9;
                    case 'kelvin':
                        return (temperature - 32) * 5/9 + 273.15;
                    default:
                        return temperature;
                }
            case 'kelvin':
                switch (to) {
                    case 'celsius':
                        return temperature - 273.15;
                    case 'fahrenheit':
                        return (temperature - 273.15) * 9/5 + 32;
                    default:
                        return temperature;
                }
            default:
                return temperature;
        }
    }
});
