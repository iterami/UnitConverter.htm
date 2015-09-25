'use strict';

function calculate(group){
    if(group.indexOf('temperature') !== -1){
        calculate_temperature();
        return;
    }

    if(group.indexOf('-') !== -1){
        group = group.substring(
          0,
          group.indexOf('-')
        );
    }

    // If entered input is not a number, clear result field and return.
    if(isNaN(document.getElementById(group + '-value').value)){
        document.getElementById(group + '-result').value = '';
        return;
    }

    // Load appropriate formulas and defaults.
    var formula = {
      'angle': [
        360,         // turn -> degree
        400,         // turn -> gradian
        Math.PI * 2, // turn -> radian
        1,           // turn -> turn
      ],
      'area': [
        1 / 4046.86, // metres squared -> acre
        .01,         // metres squared -> are
        10.7639,     // metres squared -> feet squared
        .0001,       // metres squared -> hectare
        .000001,     // metres squared -> kilometres squared
        1,           // metres squared -> metres squared
        1 / 2589990, // metres squared -> miles
      ],
      'distance': [
        100,          // metre -> centimetre
        1 / .4572,    // metre -> cubit
        3.280839895,  // metre -> foot
        1 / .1016,    // meter -> hand
        39.3701,      // metre -> inch
        .001,         // metre -> kilometre
        1,            // metre -> metre
        1 / 1609.344, // metre -> mile
        1000,         // metre -> millimetre
        1 / 1852,     // metre -> nautical mile
        1.09361,      // metre -> yard
      ],
      'fuel': [
        2.82481, // kilometres per litre -> imperial miles per gallon
        1,       // kilometres per litre -> kilometres per litre
        100,     // kilometres per litre -> litres per 100 kilometres
        2.35215, // kilometres per litre -> US miles per gallon
      ],
      'mass': [
        100,            // gram -> centigram
        1,              // gram -> gram
        1 / 1016046.08, // gram -> long ton
        .001,           // gram -> kilogram
        .000001,        // gram -> metric tonne
        1000000,        // gram -> microgram
        1000,           // gram -> milligram
        1 / 28.3495,    // gram -> ounce
        1 / 453.592,    // gram -> pound
        1 / 907184,     // gram -> short ton
        1 / 6350.29318, // gram -> stone
        1 / 31.1034768, // gram -> troy ounce
      ],
      'speed': [
        1 / .3048,     // metres per second -> feet per second
        3.6,           // metres per second -> kilometres per hour
        1.94384,       // metres per second -> knots
        1 / 340.29,    // metres per second -> mach
        1,             // metres per second -> metres per second
        2.23694,       // metres per second -> miles per hour
        1 / 299792458, // metres per second -> speed of light
      ],
      'time': [
        1 / 86400,      // second -> day
        1 / 1209600,    // second -> fortnight
        .3,             // second -> helek
        1 / 3600,       // second -> hour
        .01157,         // second -> Internet Time
        1 / 2360592,    // second -> lunar day
        1 / 88775.2,    // second -> Martian solar day
        1 / 3154,       // second -> microcentury
        1 / 60,         // second -> minute
        1,              // second -> second
        1 / 604800,     // second -> week
        1 / 31556908.8, // second -> year
      ],
      'volume': [
        100,             // litre -> centilitre
        35.1950652,      // litre -> imperial fluid ounce
        1 / 4.546094188, // litre -> imperial fluid gallon
        1.75975326,      // litre -> imperial fluid pint
        .879877,         // litre -> imperial fluid quart
        .0001,           // litre -> kilolitre
        1,               // litre -> litre
        1000,            // litre -> millilitre
        33.8140227,      // litre -> US fluid ounce
        1 / 3.785411784, // litre -> US fluid gallon
        2.11338,         // litre -> US fluid pint
        1.05669,         // litre -> US fluid quart
        1 / 1.4206537,   // liter -> yard of ale
      ],
    }[group];
    var default_unit = {
      'angle': 3,
      'area': 5,
      'distance': 6,
      'fuel': 1,
      'mass': 1,
      'speed': 4,
      'time': 9,
      'volume': 6,
    }[group];

    // Fetch entered input and selected units.
    var input = document.getElementById(group + '-input').value;
    var output = document.getElementById(group + '-output').value;
    var result = document.getElementById(group + '-value').value;

    // Only calculate stuff if the input unit is not the same as the output unit.
    if(input != output){
        // If the input unit is not the default unit, convert to the default unit.
        if(input != default_unit){
            result /= formula[input];
        }

        // Convert the entered input from the default unit to the output unit.
        result *= formula[output];
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

    calculate('angle');
    calculate('area');
    calculate('distance');
    calculate('fuel');
    calculate('mass');
    calculate('speed');
    calculate('temperature');
    calculate('time');
    calculate('volume');
}

function calculate_temperature(){
    var i = document.getElementById('temperature-value').value;
    if(isNaN(i)){
        document.getElementById('temperature-result').value = '';
        return;
    }

    document.getElementById('temperature-result').value = [
      [
        i,                  // Celsius -> Celsius
        (100 - i) * 1.5,    // Celsius -> Delisle
        i * 1.8 + 32,       // Celsius -> Fahrenheit
        i + 273.15,         // Celsius -> Kelvin
        i * .33,            // Celsius -> Newton
        (i + 273.15) * 1.8, // Celsius -> Rankine
        i / 1.25,           // Celsius -> Réaumur
        i * 21 / 40 + 7.5,  // Celsius -> Rømer
      ][document.getElementById('temperature-output').value],
      [
        100 - i / 1.5,      // Delisle -> Celsius
        i,                  // Delisle -> Delisle
        212 - i * 1.2,      // Delisle -> Fahrenheit
        373.15 - i / 1.5,   // Delisle -> Kelvin
        33 - (i * 11 / 50), // Delisle -> Newton
        671.67 - i * 1.2,   // Delisle -> Rankine
        80 - (i * 8 / 15),  // Delisle -> Réaumur
        60 - (i * 7 / 20),  // Delisle -> Rømer
      ][document.getElementById('temperature-output').value],
      [
        (i - 32) / 1.8,          // Fahrenheit -> Celsius
        (212 - i) / 1.2,         // Fahrenheit -> Delisle
        i,                       // Fahrenheit -> Fahrenheit
        (i - 32) / 1.8 + 273.15, // Fahrenheit -> Kelvin
        (i - 32) * 11 / 60,      // Fahrenheit -> Newton
        i + 459.67,              // Fahrenheit -> Rankine
        (i - 32) * 4 / 9,        // Fahrenheit -> Réaumur
        (i - 32) * 7 / 24 + 7.5, // Fahrenheit -> Rømer
      ][document.getElementById('temperature-output').value],
      [
        i - 273.15,                   // Kelvin -> Celsius
        (373.15 - i) * 1.5,           // Kelvin -> Delisle
        (i - 273.15) * 1.8 + 32,      // Kelvin -> Fahrenheit
        i,                            // Kelvin -> Kelvin
        (i - 273.15) * .33,           // Kelvin -> Newton
        i * 1.8,                      // Kelvin -> Rankine
        (i - 273.15) / 1.25,          // Kelvin -> Réaumur
        (i - 273.15) * 21 / 40 + 7.5, // Kelvin -> Rømer
      ][document.getElementById('temperature-output').value],
      [
        i / .33,              // Newton -> Celsius
        (33 - i) * 50 / 11,   // Newton -> Delisle
        i * 60 / 11 + 32,     // Newton -> Fahrenheit
        i / .33 + 273.15,     // Newton -> Kelvin
        i,                    // Newton -> Newton
        i * 60 / 11 + 491.67, // Newton -> Rankine
        i * 80 / 33,          // Newton -> Réaumur
        i * 35 / 22 + 7.5,    // Newton -> Rømer
      ][document.getElementById('temperature-output').value],
      [
        (i - 491.67) / 1.8,          // Rankine -> Celsius
        (671.67 - i) / 1.2,          // Rankine -> Delisle
        i - 459.67,                  // Rankine -> Fahrenheit
        i / 1.8,                     // Rankine -> Kelvin
        (i - 491.67) * 11 / 60,      // Rankine -> Newton
        i,                           // Rankine -> Rankine
        (i - 491.67) * 4 / 9,        // Rankine -> Réaumur
        (i - 491.67) * 7 / 24 + 7.5, // Rankine -> Rømer
      ][document.getElementById('temperature-output').value],
      [
        i * 1.25,           // Réaumur -> Celsius
        (80 - i) * 15 / 8,  // Réaumur -> Delisle
        i * 9/4 + 32,       // Réaumur -> Fahrenheit
        i * 1.25 + 273.15,  // Réaumur -> Kelvin
        i * 80 / 33,        // Réaumur -> Newton
        i * 9 / 4 + 491.67, // Réaumur -> Rankine
        i,                  // Réaumur -> Réaumur
        i * 21 / 32 + 7.5,  // Réaumur -> Rømer
      ][document.getElementById('temperature-output').value],
      [
        (i - 7.5) * 40 / 21,          // Rømer -> Celsius
        (60 - i) * 20 / 7,            // Rømer -> Delisle
        (i - 7.5) * 24 / 7 + 32,      // Rømer -> Fahrenheit
        (i - 7.5) * 40 / 21 + 273.15, // Rømer -> Kelvin
        (i - 7.5) * 22 / 35,          // Rømer -> Newton
        (i - 7.5) * 24 / 7 + 491.67,  // Rømer -> Rankine
        (i - 7.5) * 32 / 21,          // Rømer -> Réaumur
        i,                            // Rømer -> Rømer
      ][document.getElementById('temperature-output').value],
    ][document.getElementById('temperature-input').value];

    if(document.getElementById('temperature-result').value % 1 !== 0){
        document.getElementById('temperature-result').value =
          parseFloat(document.getElementById('temperature-result').value).toFixed(
            document.getElementById('decimals').value
          );
    }
}

function reverse(id){
    var temp = document.getElementById(id + '-input').value;
    document.getElementById(id + '-input').value = document.getElementById(id + '-output').value;
    document.getElementById(id + '-output').value = temp;

    calculate(id);
}

window.onload = function(e){
    var types = [
      'angle',
      'area',
      'distance',
      'fuel',
      'mass',
      'speed',
      'temperature',
      'time',
      'volume',
    ];

    for(var type in types){
        document.getElementById(types[type] + '-input').onchange
          = document.getElementById(types[type] + '-output').onchange
          = document.getElementById(types[type] + '-value').oninput = function(){
            calculate(this.id);
        };
    }

    document.getElementById('decimals').oninput = calculate_all;
};
