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

    var value = document.getElementById(group + '-value').value;

    // If entered input is not a number, clear result field and return.
    if(isNaN(value)){
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
        1 / 4046.86,     // metres squared -> acre
        .01,             // metres squared -> are
        1 / 3930.395625, // metres squared -> cuerda
        10.7639,         // metres squared -> feet squared
        .0001,           // metres squared -> hectare
        .000001,         // metres squared -> kilometres squared
        1,               // metres squared -> metres squared
        1 / 2589990,     // metres squared -> miles
        .00015625,       // metres squared -> plaza
        1 / 1011.71,     // metres squared -> rood
      ],
      'fuel': [
        2.82481, // kilometres per litre -> imperial miles per gallon
        1,       // kilometres per litre -> kilometres per litre
        100,     // kilometres per litre -> litres per 100 kilometres
        2.35215, // kilometres per litre -> US miles per gallon
      ],
      'illuminance': [
        .09290304, // lux -> foot-candle
        1,         // lux -> lux
        .0001,     // lux -> phot
      ],
      'length': [
        1 / 149597870700,      // metre -> astronomical unit
        100,                   // metre -> centimetre
        1 / 20.1168,           // metre -> chain
        1 / .4572,             // metre -> cubit
        1 / 1.8288,            // metre -> fathom
        3.280839895,           // metre -> foot
        1 / 201.168,           // metre -> furlong
        1 / .1016,             // meter -> hand
        39.3701,               // metre -> inch
        .001,                  // metre -> kilometre
        1 / 9460730472580800,  // metre -> lightyear
        1 / .201168,           // metre -> link
        1,                     // metre -> metre
        1 / 1609.344,          // metre -> mile
        1000,                  // metre -> millimetre
        1 / 1852,              // metre -> nautical mile
        1 / 30856775800000000, // metre -> parsec
        1.09361,               // metre -> yard
      ],
      'mass': [
        5,              // gram -> caret
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
        .0000685217659, // gram -> slug
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
        1 / 2592000,    // second -> month
        1,              // second -> second
        1 / 604800,     // second -> week
        1 / 31556908.8, // second -> year
      ],
      'volume': [
        50,                // litre -> Australian tablespoon
        100,               // litre -> centilitre
        1 / 36.368735,     // litre -> imperial bushel
        1 / .284,          // litre -> imperial cup
        35.1950652,        // litre -> imperial fluid ounce
        1 / 4.546094188,   // litre -> imperial gallon
        1 / .1420653125,   // litre -> imperial gill
        1 / 9.09218,       // litre -> imperial peck
        1.75975326,        // litre -> imperial pint
        .879877,           // litre -> imperial quart
        56.3121,           // litre -> imperial tablespoon
        168.936,           // litre -> imperial teaspoon
        .0001,             // litre -> kilolitre
        1,                 // litre -> litre
        4,                 // litre -> metric cup
        1000,              // litre -> millilitre
        1 / 35.239072,     // litre -> US bushel
        4.22675,           // litre -> US cup
        33.8140227,        // litre -> US fluid ounce
        1 / 3.785411784,   // litre -> US gallon
        1 / .11829411825,  // litre -> US gill
        1 / 8.80976754172, // litre -> US peck
        2.11338,           // litre -> US pint
        1.05669,           // litre -> US quart
        1 / .0148,         // litre -> US tablespoon
        202.884,           // litre -> US teaspoon
        1 / 1.4206537,     // liter -> yard of ale
      ],
    }[group];
    var default_unit = types()[group];
    var input = document.getElementById(group + '-input').value;
    var output = document.getElementById(group + '-output').value;

    // Only calculate stuff if the input unit is not the same as the output unit.
    if(input != output){
        // If the input unit is not the default unit, convert to the default unit.
        if(input != default_unit){
            value /= formula[input];
        }

        // Convert the entered input from the default unit to the output unit.
        value *= formula[output];
    }

    // Make sure only allowed number of decimal places are displayed.
    if(value % 1 !== 0){
        value = parseFloat(value).toFixed(document.getElementById('decimals').value);
    }

    // Display result.
    document.getElementById(group + '-result').value = value;
}

function calculate_all(){
    for(var type in types()){
        calculate(type);
    }
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

function types(){
    return {
      'angle': 3,
      'area': 6,
      'fuel': 1,
      'illuminance': 1,
      'length': 12,
      'mass': 2,
      'speed': 4,
      'temperature': 0,
      'time': 10,
      'volume': 13,
    };
}

window.onload = function(e){
    for(var type in types()){
        document.getElementById(type + '-input').onchange
          = document.getElementById(type + '-output').onchange
          = document.getElementById(type + '-value').oninput = function(){
            calculate(this.id);
        };
    }

    document.getElementById('decimals').oninput = calculate_all;
};
