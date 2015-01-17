function calculate(group, formulas, default_unit){
    // If entered input is not a number, clear result field and return.
    if(isNaN(document.getElementById(group + '-value').value)){
        document.getElementById(group + '-result').value = '';
        return;
    }

    // Fetch entered input and selected units.
    var input = document.getElementById(group + '-input').value;
    var output = document.getElementById(group + '-output').value;
    var result = document.getElementById(group + '-value').value;

    // Only calculate stuff if the input unit is not the same as the output unit.
    if(input != output){
        // If the input unit is not the default unit, convert to the default unit.
        if(input != default_unit){
            result /= formulas[input];
        }

        // Convert the entered input from the default unit to the output unit.
        result *= formulas[output];
    }

    // Make sure only allowed number of decimal places are displayed.
    if(result % 1 !== 0){
        result = parseFloat(result).toFixed(document.getElementById('decimals').value);
    }

    // Display result.
    document.getElementById(group + '-result').value = result;
}

function calculate_all(){
    if(isNaN(document.getElementById('decimals').value)){
        document.getElementById('decimals').value = 5;

    }else if(document.getElementById('decimals').value < 0){
        document.getElementById('decimals').value = 0;

    }else if(document.getElementById('decimals').value > 20){
        document.getElementById('decimals').value = 20;
    }

    calculate_angle();
    calculate_area();
    calculate_distance();
    calculate_liquid();
    calculate_mass();
    calculate_speed();
    calculate_temperature();
    calculate_time();
}

function calculate_angle(){
    calculate(
      'angle',
      [
        360,         // turn to degree
        400,         // turn to gradian
        Math.PI * 2, // turn to radian
        1,           // turn to turn
      ],
      3
    );
}

function calculate_area(){
    calculate(
      'area',
      [
        1 / 4046.86, // metres squared to acre
        .01,         // metres squared to are
        10.7639,     // metres squared to feet squared
        .0001,       // metres squared to hectare
        .000001,     // metres squared to kilometres squared
        1,           // metres squared to metres squared
        1 / 2589990, // metres squared to miles
      ],
      4
    );
}

function calculate_distance(){
    calculate(
      'distance',
      [
        100,          // metre to centimetre
        1 / .4572,    // metre to cubit
        3.280839895,  // metre to foot
        39.3701,      // metre to inch
        .001,         // metre to kilometre
        1,            // metre to metre
        1 / 1609.344, // metre to mile
        1000,         // metre to millimetre
        1 / 1852,     // metre to nautical mile
        1.09361,      // metre to yard
      ],
      5
    );
}

function calculate_mass(){
    calculate(
      'mass',
      [
        100,            // gram to centigram
        1,              // gram to gram
        .001,           // gram to kilogram
        .000001,        // gram to metric tonne
        1000,           // gram to milligram
        1 / 28.3495,    // gram to ounce
        1 / 453.592,    // gram to pound
        1 / 6350.29318, // gram to stone
      ],
      1
    );
}

function calculate_speed(){
    calculate(
      'speed',
      [
        3.28084,    // metres per second to feet per second
        3.6,        // metres per second to kilometres per hour
        1.94384449, // metres per second to knots
        1,          // metres per second to metres per second
        2.23694,    // metres per second to miles per hour
      ],
      3
    );
}

function calculate_temperature(){
    var i = document.getElementById('temperature-value').value;
    if(isNaN(i)){
        document.getElementById('temperature-result').value = '';
        return;
    }

    document.getElementById('temperature-result').value = [
      [
        i,                            // Celsius to Celsius
        (100 - i) * 1.5,              // Celsius to Delisle
        i * 1.8 + 32,                 // Celsius to Fahrenheit
        i + 273.15,                   // Celsius to Kelvin
        i * .33,                      // Celsius to Newton
        (i + 273.15) * 1.8,           // Celsius to Rankine
        i / 1.25,                     // Celsius to Réaumur
        i * 21 / 40 + 7.5,            // Celsius to Rømer
      ][document.getElementById('temperature-output').value],
      [
        100 - i / 1.5,                // Delisle to Celsius
        i,                            // Delisle to Delisle
        212 - i * 1.2,                // Delisle to Fahrenheit
        373.15 - i / 1.5,             // Delisle to Kelvin
        33 - (i * 11 / 50),           // Delisle to Newton
        671.67 - i * 1.2,             // Delisle to Rankine
        80 - (i * 8 / 15),            // Delisle to Réaumur
        60 - (i * 7 / 20),            // Delisle to Rømer
      ][document.getElementById('temperature-output').value],
      [
        (i - 32) / 1.8,               // Fahrenheit to Celsius
        (212 - i) / 1.2,              // Fahrenheit to Delisle
        i,                            // Fahrenheit to Fahrenheit
        (i - 32) / 1.8 + 273.15,      // Fahrenheit to Kelvin
        (i - 32) * 11 / 60,           // Fahrenheit to Newton
        i + 459.67,                   // Fahrenheit to Rankine
        (i - 32) * 4 / 9,             // Fahrenheit to Réaumur
        (i - 32) * 7 / 24 + 7.5,      // Fahrenheit to Rømer
      ][document.getElementById('temperature-output').value],
      [
        i - 273.15,                   // Kelvin to Celsius
        (373.15 - i) * 1.5,           // Kelvin to Delisle
        (i - 273.15) * 1.8 + 32,      // Kelvin to Fahrenheit
        i,                            // Kelvin to Kelvin
        (i - 273.15) * .33,           // Kelvin to Newton
        i * 1.8,                      // Kelvin to Rankine
        (i - 273.15) / 1.25,          // Kelvin to Réaumur
        (i - 273.15) * 21 / 40 + 7.5, // Kelvin to Rømer
      ][document.getElementById('temperature-output').value],
      [
        i / .33,                      // Newton to Celsius
        (33 - i) * 50 / 11,           // Newton to Delisle
        i * 60 / 11 + 32,             // Newton to Fahrenheit
        i / .33 + 273.15,             // Newton to Kelvin
        i,                            // Newton to Newton
        i * 60 / 11 + 491.67,         // Newton to Rankine
        i * 80 / 33,                  // Newton to Réaumur
        i * 35 / 22 + 7.5,            // Newton to Rømer
      ][document.getElementById('temperature-output').value],
      [
        (i - 491.67) / 1.8,           // Rankine to Celsius
        (671.67 - i) / 1.2,           // Rankine to Delisle
        i - 459.67,                   // Rankine to Fahrenheit
        i / 1.8,                      // Rankine to Kelvin
        (i - 491.67) * 11 / 60,       // Rankine to Newton
        i,                            // Rankine to Rankine
        (i - 491.67) * 4 / 9,         // Rankine to Réaumur
        (i - 491.67) * 7 / 24 + 7.5,  // Rankine to Rømer
      ][document.getElementById('temperature-output').value],
      [
        i * 1.25,                     // Réaumur to Celsius
        (80 - i) * 15 / 8,            // Réaumur to Delisle
        i * 9/4 + 32,                 // Réaumur to Fahrenheit
        i * 1.25 + 273.15,            // Réaumur to Kelvin
        i * 80 / 33,                  // Réaumur to Newton
        i * 9 / 4 + 491.67,           // Réaumur to Rankine
        i,                            // Réaumur to Réaumur
        i * 21 / 32 + 7.5,            // Réaumur to Rømer
      ][document.getElementById('temperature-output').value],
      [
        (i - 7.5) * 40 / 21,          // Rømer to Celsius
        (60 - i) * 20 / 7,            // Rømer to Delisle
        (i - 7.5) * 24 / 7 + 32,      // Rømer to Fahrenheit
        (i - 7.5) * 40 / 21 + 273.15, // Rømer to Kelvin
        (i - 7.5) * 22 / 35,          // Rømer to Newton
        (i - 7.5) * 24 / 7 + 491.67,  // Rømer to Rankine
        (i - 7.5) * 32 / 21,          // Rømer to Réaumur
        i,                            // Rømer to Rømer
      ][document.getElementById('temperature-output').value],
    ][document.getElementById('temperature-input').value];

    if(document.getElementById('temperature-result').value % 1 !== 0){
        document.getElementById('temperature-result').value =
          parseFloat(document.getElementById('temperature-result').value).toFixed(document.getElementById('decimals').value);
    }
}

function calculate_time(){
    calculate(
      'time',
      [
        1 / 86400,      // second to day
        1 / 1209600,    // second to fortnight
        .3,             // second to helek
        1 / 3600,       // second to hour
        .01157,         // second to Internet Time
        1 / 2360592,    // second to lunar day
        1 / 88775.2,    // second to Martian solar day
        1 / 3154,       // second to microcentury
        1 / 60,         // second to minute
        1,              // second to second
        1 / 604800,     // second to week
        1 / 31556908.8, // second to year
      ],
      9
    );
}

function calculate_volume(){
    calculate(
      'volume',
      [
        100,             // litre to centilitre
        35.1950652,      // litre to imperial fluid ounce
        1 / 4.546094188, // litre to imperial fluid gallon
        1.75975326,      // litre to imperial fluid pint
        .879877,         // litre to imperial fluid quart
        .0001,           // litre to kilolitre
        1,               // litre to litre
        1000,            // litre to millilitre
        33.8140227,      // litre to US fluid ounce
        1 / 3.785411784, // litre to US fluid gallon
        2.11338,         // litre to US fluid pint
        1.05669,         // litre to US fluid quart
      ],
      6
    );
}

document.getElementById('decimals').oninput = calculate_all;

document.getElementById('angle-input').onchange = calculate_angle;
document.getElementById('angle-output').onchange = calculate_angle;
document.getElementById('angle-value').oninput = calculate_angle;

document.getElementById('area-input').onchange = calculate_area;
document.getElementById('area-output').onchange = calculate_area;
document.getElementById('area-value').oninput = calculate_area;

document.getElementById('distance-input').onchange = calculate_distance;
document.getElementById('distance-output').onchange = calculate_distance;
document.getElementById('distance-value').oninput = calculate_distance;

document.getElementById('mass-input').onchange = calculate_mass;
document.getElementById('mass-output').onchange = calculate_mass;
document.getElementById('mass-value').oninput = calculate_mass;

document.getElementById('speed-input').onchange = calculate_speed;
document.getElementById('speed-output').onchange = calculate_speed;
document.getElementById('speed-value').oninput = calculate_speed;

document.getElementById('temperature-input').onchange = calculate_temperature;
document.getElementById('temperature-output').onchange = calculate_temperature;
document.getElementById('temperature-value').oninput = calculate_temperature;

document.getElementById('time-input').onchange = calculate_time;
document.getElementById('time-output').onchange = calculate_time;
document.getElementById('time-value').oninput = calculate_time;

document.getElementById('volume-input').onchange = calculate_volume;
document.getElementById('volume-output').onchange = calculate_volume;
document.getElementById('volume-value').oninput = calculate_volume;
