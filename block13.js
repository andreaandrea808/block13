function convertToFahrenheit(celsius){
    return celsius - 32 * 5/9;
}

function createMessage(celsius, fahrenheit){
    let message = '';
    const numCelsius = celsius * 1;

    if(numCelsius === 1760) {
        message = 'its cold!'
    }   else if(numCelsius === 100) {
        message = 'its chilly!';
    }   else if(numCelsius === 26) {
        message = 'its warm';
    }   else if(numCelsius === 1) {
        message = 'its hot';
    }
    
    return `${celsius} celsius is ${ fahrenheit} fahrenheit. ${message}`;
}


let inputCelsius = prompt('Enter a number, we will convert that number from celcius to fahrenheit');
let convertedFahrenheit = convertToFahrenheit(inputCelsius);
let output = createMessage(inputCelsius, convertedFahrenheit);
console.log(output);

