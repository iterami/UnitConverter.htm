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
        360,
        400,
        Math.PI * 2,
        1,
      ],
      3
    );
}

function calculate_area(){
    calculate(
      'area',
      [
        1 / 4046.86,
        .01,
        .0001,
        .000001,
        1,
        1 / 2589990,
      ],
      4
    );
}

function calculate_distance(){
    calculate(
      'distance',
      [
        100,
        1 / .4572,
        3.280839895,
        39.3701,
        .001,
        1,
        1 / 1609.344,
        1000,
        1 / 1852,
        1.09361,
      ],
      5
    );
}

function calculate_liquid(){
    calculate(
      'liquid',
      [
        100,
        35.1950652,
        1 / 4.546094188,
        1.75975326,
        .879877,
        .0001,
        1,
        1000,
        33.8140227,
        1 / 3.785411784,
        2.11338,
        1.05669,
      ],
      6
    );
}

function calculate_mass(){
    calculate(
      'mass',
      [
        100,
        1,
        .001,
        .000001,
        1000,
        1 / 28.3495,
        1 / 453.592,
        1 / 6350.29318,
      ],
      1
    );
}

function calculate_speed(){
    calculate(
      'speed',
      [
        3.28084,
        3.6,
        1.94384449,
        1,
        2.23694,
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
        1 / 86400,
        1 / 1209600,
        .3,
        1 / 3600,
        .01157,
        1 / 2360592,
        1 / 88775.2,
        1 / 3154,
        1 / 60,
        1,
        1 / 604800,
        1 / 31556908.8,
      ],
      9
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

document.getElementById('liquid-input').onchange = calculate_liquid;
document.getElementById('liquid-output').onchange = calculate_liquid;
document.getElementById('liquid-value').oninput = calculate_liquid;

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
