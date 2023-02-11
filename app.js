const Kelvin = 309;  // Kelvin Degrees
console.log(`The temperature is ${Kelvin} degrees Kelvin.`); // Prints on console Kelvin Degrees

const Celsius = Kelvin - 273;  // Celcius Degrees
console.log(`The temperature is ${Celsius} degrees Celsius.`);  // Prints on console Celsius Degrees

const Fahrenheit  = Celsius * (9/5) + 32;  // Fahrenheit Degrees
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);  // Prints on console Fahrenheit Degrees

let fahrenheit = Math.floor(Fahrenheit); // Math object to round down the Fahrenheit temperature
console.log(fahrenheit);  // Prints on console fahrenheit Degrees

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let Newton = Celsius * (33/100); // Newton Scale
console.log(Newton);  // Prints on console Newton Scale

let newton = Newton;   // Declaring the newton variable
console.log(Math.floor(newton));   // Prints on console Newton Scale rounded down
