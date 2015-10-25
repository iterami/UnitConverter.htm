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

    var value = parseFloat(document.getElementById(group + '-value').value);

    // If entered input is not a number, clear result field and return.
    if(isNaN(value)){
        document.getElementById(group + '-result').value = '';
        return;
    }

    // Load appropriate formulas and defaults.
    var formula = {
      'angle': { // turn -->
        'degree': 360,
        'gradian': 400,
        'radian': Math.PI * 2,
        'turn': 1,
      },
      'area': { // metres squared -->
        'acre': 1 / 4046.86,
        'are': .01,
        'chō': 1 / 9917.36,
        'cuerda': 1 / 3930.395625,
        'feet-squared': 10.7639,
        'gō': 1 / .3306,
        'hectare': .0001,
        'jō': 1 / 1.653,
        'kilometres-squared': .000001,
        'metres-squared': 1,
        'miles-squared': 1 / 2589990,
        'plaza': .00015625,
        'rood': 1 / 1011.71,
        'se': 1 / 99.1736,
        'shaku': 1 / .03306,
        'strema': .001,
        'tan': 1 / 991.736,
        'tsubo': 1 / 3.306,
      },
      'energy': { // joule -->
        'joule': 1,
        'thermochemical-calorie': 1 / 4.184,
      },
      'force': { // newton -->
        'dyne': 100000,
        'kilogram-force': 1 / 9.80665,
        'kip': 1 / 4448.2216,
        'newton': 1,
        'ounce-force': 3.59694310194,
        'pound-force': .224809,
        'poundal': 7.23301,
      },
      'fuel': { // kilometres-per-litre -->
        'imperial-miles-per-gallon': 2.82481,
        'kilometres-per-litre': 1,
        'litres-per-100-kilometres': 100,
        'us-miles-per-gallon': 2.35215,
      },
      'illuminance': { // lux -->
        'foot-candle': .09290304,
        'lux': 1,
        'phot': .0001,
      },
      'length': { // metre -->
        'ångström': 1 / .0000000001,
        'arpent': 1 / 58.47109,
        'astronomical-unit': 1 / 149597870700,
        'bu': 330,
        'centimetre': 100,
        'chain': 1 / 20.1168,
        'chi': 3,
        'chō': 3.3 / 360,
        'cubit': 1 / .4572,
        'fathom': 1 / 1.8288,
        'foot': 3.280839895,
        'furlong': 1 / 201.168,
        'hand': 1 / .1016,
        'hiro': .55,
        'inch': 39.3701,
        'jō': .33,
        'kanejaku': 3.3,
        'ken': .55,
        'kilometre': .001,
        'lightyear': 1 / 9460730472580800,
        'link': 1 / .201168,
        'metre': 1,
        'mile': 1 / 1609.344,
        'millimetre': 1000,
        'mō': 33000,
        'nautical-mile': 1 / 1852,
        'parsec': 1 / 30856775800000000,
        'ri': 3.3 / 12960,
        'rin': 3300,
        'shaku': 3.3,
        'sun': 33,
        'yard': 1.09361,
      },
      'mass': { // gram -->
        'caret': 5,
        'centigram': 100,
        'fun': 4 / 1.5,
        'gram': 1,
        'hyakume': 1 / 375,
        'kanme': 1 / 3750,
        'kilogram': .001,
        'kin': 1 / 600,
        'long-ton': 1 / 1016046.08,
        'metric-tonne': .000001,
        'microgram': 1000000,
        'milligram': 1000,
        'momme': 1 / 3.75,
        'ounce': 1 / 28.3495,
        'pound': 1 / 453.592,
        'short-ton': 1 / 907184,
        'slug': .0000685217659,
        'stone': 1 / 6350.29318,
        'troy-ounce': 1 / 31.1034768,
      },
      'speed': { // metres-per-second -->
        'feet-per-second': 1 / .3048,
        'kilometres-per-hour': 3.6,
        'knots': 1.94384,
        'mach': 1 / 340.29,
        'metres-per-second': 1,
        'miles-per-hour': 2.23694,
        'speed-of-light': 1 / 299792458,
      },
      'time': { // second -->
        'day': 1 / 86400,
        'fortnight': 1 / 1209600,
        'helek': .3,
        'hour': 1 / 3600,
        'internet-time': .01157,
        'lunar-day': 1 / 2360592,
        'martian-solar-day': 1 / 88775.2,
        'microcentury': 1 / 3154,
        'minute': 1 / 60,
        'month': 1 / 2592000,
        'second': 1,
        'week': 1 / 604800,
        'year': 1 / 31556908.8,
      },
      'volume': { // litre -->
        'acre-foot': 1 / 1233480,
        'australian-tablespoon': 50,
        'board-foot': 1 / 2.359737225,
        'centilitre': 100,
        'coomb': 1 / 145.47494,
        'gō': 1331 / 240.1,
        'imperial-bushel': 1 / 36.368735,
        'imperial-cup': 1 / .284,
        'imperial-fluid-ounce': 35.1950652,
        'imperial-gallon': 1 / 4.546094188,
        'imperial-gill': 1 / .1420653125,
        'imperial-peck': 1 / 9.09218,
        'imperial-pint': 1.75975326,
        'imperial-quart': .879877,
        'imperial-tablespoon': 56.3121,
        'imperial-teaspoon': 168.936,
        'kilolitre': .001,
        'koku': 1331 / 240100,
        'litre': 1,
        'metric-cup': 4,
        'millilitre': 1000,
        'sai': 1331 / 2.401,
        'shaku': 1331 / 24.01,
        'shō': 1331 / 2401,
        'to': 1331 / 24010,
        'us-bushel': 1 / 35.239072,
        'us-cup': 4.22675,
        'us-fluid-ounce': 33.8140227,
        'us-gallon': 1 / 3.785411784,
        'us-gill': 1 / .11829411825,
        'us-peck': 1 / 8.80976754172,
        'us-pint': 2.11338,
        'us-quart': 1.05669,
        'us-tablespoon': 1 / .0148,
        'us-teaspoon': 202.884,
        'yard-of-ale': 1 / 1.4206537,
      },
    }[group];
    var default_unit = types()[group];
    var input = document.getElementById(group + '-input').value;
    var output = document.getElementById(group + '-output').value;

    // Only calculate stuff if the input unit is not the same as the output unit.
    if(input !== output){
        // If the input unit is not the default unit, convert to the default unit.
        if(input !== default_unit){
            value /= formula[input];
        }

        // Convert the entered input from the default unit to the output unit.
        value *= formula[output];
    }

    // Make sure only allowed number of decimal places are displayed.
    if(value % 1 !== 0){
        value = value.toFixed(document.getElementById('decimals').value);
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
    var i = parseFloat(document.getElementById('temperature-value').value);
    if(isNaN(i)){
        document.getElementById('temperature-result').value = '';
        return;
    }

    var formula = { // celius -->
      'celsius': {
        'celsius': i,
        'delisle': (100 - i) * 1.5,
        'fahrenheit': i * 1.8 + 32,
        'kelvin': i + 273.15,
        'newton': i * .33,
        'rankine': (i + 273.15) * 1.8,
        'réaumur': i / 1.25,
        'rømer': i * 21 / 40 + 7.5,
      }, // delisle -->
      'delisle': {
        'celsius': 100 - i / 1.5,
        'delisle': i,
        'fahrenheit': 212 - i * 1.2,
        'kelvin': 373.15 - i / 1.5,
        'newton': 33 - (i * 11 / 50),
        'rankine': 671.67 - i * 1.2,
        'réaumur': 80 - (i * 8 / 15),
        'rømer': 60 - (i * 7 / 20),
      }, // fahrenheit -->
      'fahrenheit': {
        'celsius': (i - 32) / 1.8,
        'delisle': (212 - i) / 1.2,
        'fahrenheit': i,
        'kelvin': (i - 32) / 1.8 + 273.15,
        'newton': (i - 32) * 11 / 60,
        'rankine': i + 459.67,
        'réaumur': (i - 32) * 4 / 9,
        'rømer': (i - 32) * 7 / 24 + 7.5,
      }, // kelvin -->
      'kelvin': {
        'celsius': i - 273.15,
        'delisle': (373.15 - i) * 1.5,
        'fahrenheit': (i - 273.15) * 1.8 + 32,
        'kelvin': i,
        'newton': (i - 273.15) * .33,
        'rankine': i * 1.8,
        'réaumur': (i - 273.15) / 1.25,
        'rømer': (i - 273.15) * 21 / 40 + 7.5,
      },
      'newton': { // Newton -->
        'celsius': i / .33,
        'delisle': (33 - i) * 50 / 11,
        'fahrenheit': i * 60 / 11 + 32,
        'kelvin': i / .33 + 273.15,
        'newton': i,
        'rankine': i * 60 / 11 + 491.67,
        'réaumur': i * 80 / 33,
        'rømer': i * 35 / 22 + 7.5,
      },
      'rankine': { // Rankine -->
        'celsius': (i - 491.67) / 1.8,
        'delisle': (671.67 - i) / 1.2,
        'fahrenheit': i - 459.67,
        'kelvin': i / 1.8,
        'newton': (i - 491.67) * 11 / 60,
        'rankine': i,
        'réaumur': (i - 491.67) * 4 / 9,
        'rømer': (i - 491.67) * 7 / 24 + 7.5,
      },
      'réaumur': { // Réaumur -->
        'celsius': i * 1.25,
        'delisle': (80 - i) * 15 / 8,
        'fahrenheit': i * 9/4 + 32,
        'kelvin': i * 1.25 + 273.15,
        'newton': i * 80 / 33,
        'rankine': i * 9 / 4 + 491.67,
        'réaumur': i,
        'rømer': i * 21 / 32 + 7.5,
      },
      'rømer': { // Rømer -->
        'celsius': (i - 7.5) * 40 / 21,
        'delisle': (60 - i) * 20 / 7,
        'fahrenheit': (i - 7.5) * 24 / 7 + 32,
        'kelvin': (i - 7.5) * 40 / 21 + 273.15,
        'newton': (i - 7.5) * 22 / 35,
        'rankine': (i - 7.5) * 24 / 7 + 491.67,
        'réaumur': (i - 7.5) * 32 / 21,
        'rømer': i,
      },
    }[document.getElementById('temperature-input').value];
    document.getElementById('temperature-result').value =
      formula[document.getElementById('temperature-output').value];

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
      'angle': 'turn',
      'area': 'metres-squared',
      'energy': 'joule',
      'force': 'newton',
      'fuel': 'kilometres-per-litre',
      'illuminance': 'lux',
      'length': 'metre',
      'mass': 'kilogram',
      'speed': 'metres-per-second',
      'temperature': 'kelvin',
      'time': 'second',
      'volume': 'litre',
    };
}

window.onload = function(e){
    var reverse = '';

    for(var type in types()){
        reverse += '<a onclick="reverse(\'' + type + '\')">≈</a><br>';

        document.getElementById(type + '-input').onchange
          = document.getElementById(type + '-output').onchange
          = document.getElementById(type + '-value').oninput = function(){
            calculate(this.id);
        };
    }

    document.getElementById('decimals').oninput = calculate_all;
    document.getElementById('reverse').innerHTML = reverse;
};
