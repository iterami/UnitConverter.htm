function calculate_angle(){
    verify_decimals();

    var i = document.getElementById('angle-value').value;
    if(isNaN(i)){
        document.getElementById('angle-result').value = '';
        return;
    }

    document.getElementById('angle-result').value = [
      [
        i,                    // degree to degree
        i * 10 / 9,           // degree to gradian
        i * (Math.PI / 180),  // degree to radian
        i / 360               // degree to turn
      ][document.getElementById('angle-output').value],
      [
        i * 9 / 10,           // gradian to degree
        i,                    // gradian to gradian
        i * Math.PI / 200,    // gradian to radian
        i / 400               // gradian to turn
      ][document.getElementById('angle-output').value],
      [
        i * (180 / Math.PI),  // radian to degree
        i * 200 / Math.PI,    // radian to gradian
        i,                    // radian to radian
        i / (2 * Math.PI)     // radian to turn
      ][document.getElementById('angle-output').value],
      [
        i * 360,              // turn to degree
        i * 400,              // turn to gradian
        i * (2 * Math.PI),    // turn to radian
        i                     // turn to turn
      ][document.getElementById('angle-output').value]
    ][document.getElementById('angle-input').value];

    if(document.getElementById('angle-result').value % 1 !== 0){
        document.getElementById('angle-result').value =
          parseFloat(document.getElementById('angle-result').value).toFixed(document.getElementById('decimals').value);
    }
}

function calculate_area(){
    verify_decimals();

    var i = document.getElementById('area-value').value;
    if(isNaN(i)){
        document.getElementById('area-result').value = '';
        return;
    }

    document.getElementById('area-result').value = [
      [
        i,                    // acre to acre
        i * 40.4685642,       // acre to are
        i / 2.47105,          // acre to hectare
        i * 4046.86,          // acre to metres squared
        i / 247.105           // acre to kilometres squared
      ][document.getElementById('area-output').value],
      [
        i / 40.4685642,       // are to acre
        i,                    // are to are
        i / 100,              // are to hectare
        i * 100,              // are to meters squared
        i / 10000             // are to kilometers squared
      ][document.getElementById('area-output').value],
      [
        i * 2.47105,          // hectare to acre
        i * 100,              // hectare to are
        i,                    // hectare to hectare
        i * 10000,            // hectare to metres squared
        i / 100               // hectare to metres squared
      ][document.getElementById('area-output').value],
      [
        i * 4046.86,          // metres squared to acre
        i / 100,              // metres squared to are
        i / 10000,            // metres squared to hectare
        i,                    // metres squared to metres squared
        i / 1000000           // metres squared to kilometres squared
      ][document.getElementById('area-output').value],
      [
        i * 247.105,          // kilometres squared to acre
        i * 10000,            // kilometres squared to are
        i * 100,              // kilometres squared to hectare
        i * 1000000,          // kilometres squared to metres squared
        i                     // kilometres squared to kilometres squared
      ][document.getElementById('area-output').value]
    ][document.getElementById('area-input').value];

    if(document.getElementById('area-result').value % 1 !== 0){
        document.getElementById('area-result').value =
          parseFloat(document.getElementById('area-result').value).toFixed(document.getElementById('decimals').value);
    }
}

function calculate_distance(){
    verify_decimals();

    var i = document.getElementById('distance-value').value;
    if(isNaN(i)){
        document.getElementById('distance-result').value = '';
        return;
    }

    document.getElementById('distance-result').value = [
      [
        i,                // centimetre to centimetre
        i / 45.72,        // centimetre to cubit
        i / 30.48,        // centimetre to foot
        i / 2.54,         // centimetre to inch
        i / 1e5,          // centimetre to kilometre
        i / 1e3,          // centimetre to metre
        i / 160934.4,     // centimetre to mile
        i * 10,           // centimetre to millimetre
        i / 91.44         // centimetre to yard
      ][document.getElementById('distance-output').value],
      [
        i * 45.72,        // cubit to centimetre
        i,                // cubit to cubit
        i * 1.5,          // cubit to foot
        i * 18,           // cubit to inch
        i * .0004572,     // cubit to kilometre
        i * .4572,        // cubit to metre
        i / 3520,         // cubit to mile
        i * 457.2,        // cubit to millimetre
        i / 2             // cubit to yard
      ][document.getElementById('distance-output').value],
      [
        i * 30.48,        // foot to centimetre
        i / 1.5,          // foot to cubit
        i,                // foot to foot
        i * 12,           // foot to inch
        i / 3280.839895,  // foot to kilometre
        i / 3.280839895,  // foot to metre
        i / 5280,         // foot to mile
        i * 304.8,        // foot to millimetre
        i / 3             // foot to yard
      ][document.getElementById('distance-output').value],
      [
        i * 2.54,         // inch to centimetre
        i / 18,           // inch to cubit
        i / 12,           // inch to foot
        i,                // inch to inch
        i / 39370.1,      // inch to kilometre
        i / 39.3701,      // inch to metre
        i / 63360,        // inch to mile
        i * 25.4,         // inch to millimetre
        i / 36            // inch to yard
      ][document.getElementById('distance-output').value],
      [
        i * 1e5,          // kilometre to centimetre
        i / .0004572,     // kilometre to cubit
        i * 3280.839895,  // kilometre to foot
        i * 39370.1,      // kilometre to inch
        i,                // kilometre to kilometre
        i * 1e3,          // kilometre to metre
        i / 1.609344,     // kilometre to mile
        i * 1e6,          // kilometre to millimetre
        i / 1093.61       // kilometre to yard
      ][document.getElementById('distance-output').value],
      [
        i * 100,          // metre to centimetre
        i / .4572,        // metre to cubit
        i * 3.280839895,  // metre to foot
        i * 39.3701,      // metre to inch
        i / 1e3,          // metre to kilometre
        i,                // metre to metre
        i / 1609.344,     // metre to mile
        i * 1e3,          // metre to millimetre
        i * 1.09361       // metre to yard
      ][document.getElementById('distance-output').value],
      [
        i * 160934.4,     // mile to centimetre
        i * 3520,         // mile to cubit
        i * 5280,         // mile to foot
        i * 63360,        // mile to inch
        i * 1.609344,     // mile to kilometre
        i * 1609.344,     // mile to metre
        i,                // mile to mile
        i * 1609344,      // mile to millimetre
        i * 1760          // mile to yard
      ][document.getElementById('distance-output').value],
      [
        i / 10,           // millimetre to centimetre
        i / 457.2,        // millimetre to cubit
        i / 304.8,        // millimetre to foot
        i / 25.4,         // millimetre to inch
        i / 1e6,          // millimetre to kilometre
        i / 1e3,          // millimetre to metre
        i / 1609344,      // millimetre to mile
        i,                // millimetre to millimetre
        i / 914.4         // millimetre to yard
      ][document.getElementById('distance-output').value],
      [
        i * 91.44,        // yard to centimetre
        i * 2,            // yard to cubit
        i * 3,            // yard to foot
        i * 36,           // yard to inch
        i / 1093.61,      // yard to kilometre
        i / 1.09361,      // yard to metre
        i / 1760,         // yard to mile
        i * 914.4,        // yard to millimetre
        i                 // yard to yard
      ][document.getElementById('distance-output').value]
    ][document.getElementById('distance-input').value];

    if(document.getElementById('distance-result').value % 1 !== 0){
        document.getElementById('distance-result').value =
          parseFloat(document.getElementById('distance-result').value).toFixed(document.getElementById('decimals').value);
    }
}

function calculate_liquid(){
    verify_decimals();

    var i = document.getElementById('liquid-value').value;
    if(isNaN(i)){
        document.getElementById('liquid-result').value = '';
        return;
    }

    document.getElementById('liquid-result').value = [
      [
        i,                // centilitre to centilitre
        i / 2.84130742,   // centilitre to imperial fluid ounce
        i / 454.609188,   // centilitre to imperial gallon
        i / 56.8261485,   // centilitre to imperial pint
        i / 113.652297,   // centilitre to imperial quart
        i / 1e5,          // centilitre to kilolitre
        i / 100,          // centilitre to litre
        i * 10,           // centilitre to millilitre
        i / 2.95735296,   // centilitre to US fluid ounce
        i / 378.541178,   // centilitre to US gallon
        i / 47.3176473,   // centilitre to US pint
        i / 94.6352946    // centilitre to US quart
      ][document.getElementById('liquid-output').value],
      [
        i * 2.84130742,   // imperial fluid ounce to centilitre
        i,                // imperial fluid ounce to imperial fluid ounce
        i / 160,          // imperial fluid ounce to imperial gallon
        i / 20,           // imperial fluid ounce to imperial pint
        i / 40,           // imperial fluid ounce to imperial quart
        i / 35195.0652,   // imperial fluid ounce to kilolitre
        i / 35.1950652,   // imperial fluid ounce to litre
        i * 28.4130625,   // imperial fluid ounce to millilitre
        i / 1.04084,      // imperial fluid ounce to US fluid ounce
        i / 153.722,      // imperial fluid ounce to US gallon
        i / 16.6535,      // imperial fluid ounce to US pint
        i / 33.307        // imperial fluid ounce to US quart
      ][document.getElementById('liquid-output').value],
      [
        i * 454.609188,   // imperial gallon to centilitre
        i * 160,          // imperial gallon to imperial fluid ounce
        i,                // imperial gallon to imperial gallon
        i * 8,            // imperial gallon to imperial pint
        i * 4,            // imperial gallon to imperial quart
        i / 219.969157,   // imperial gallon to kilolitre
        i * 4.54609188,   // imperial gallon to litre
        i * 4546.09188,   // imperial gallon to millilitre
        i * 153.722,      // imperial gallon to US fluid ounce
        i * 1.20095,      // imperial gallon to US gallon
        i * 9.6076,       // imperial gallon to US pint
        i * 4.8038        // imperial gallon to US quart
      ][document.getElementById('liquid-output').value],
      [
        i * 56.8261485,   // imperial pint to centilitre
        i * 20,           // imperial pint to imperial fluid ounce
        i / 8,            // imperial pint to imperial gallon
        i,                // imperial pint to imperial pint
        i / 2,            // imperial pint to imperial quart
        i / 1759.75326,   // imperial pint to kilolitre
        i / 1.75975326,   // imperial pint to litre
        i * 568.261485,   // imperial pint to millilitre
        i * 19.2152,      // imperial pint to US fluid ounce
        i / 6.66139,      // imperial pint to US gallon
        i * 1.20095,      // imperial pint to US pint
        i / 1.66535       // imperial pint to US quart
      ][document.getElementById('liquid-output').value],
      [
        i * 113.652297,   // imperial quart to centilitre
        i * 40,           // imperial quart to imperial fluid ounce
        i / 4,            // imperial quart to imperial gallon
        i * 2,            // imperial quart to imperial pint
        i,                // imperial quart to imperial quart
        i / 879.87663,    // imperial quart to kilolitre
        i * 1.1365225,    // imperial quart to litre
        i * 1136.5225,    // imperial quart to millilitre
        i * 38.4304,      // imperial quart to US fluid ounce
        i * .300238,      // imperial quart to US gallon
        i * 2.4019,       // imperial quart to US pint
        i * 1.20095       // imperial quart to US quart
      ][document.getElementById('liquid-output').value],
      [
        i * 1e5,          // kilolitre to centilitre
        i * 35195.0652,   // kilolitre to imperial fluid ounce
        i * 219.969157,   // kilolitre to imperial gallon
        i * 1759.75326,   // kilolitre to imperial pint
        i * 879.87663,    // kilolitre to imperial quart
        i,                // kilolitre to kilolitre
        i * 1e3,          // kilolitre to litre
        i * 1e6,          // kilolitre to millilitre
        i * 33814.0227,   // kilolitre to US fluid ounce
        i * 264.172052,   // kilolitre to US gallon
        i * 2113.37642,   // kilolitre to US pint
        i * 1056.68821    // kilolitre to US quart
      ][document.getElementById('liquid-output').value],
      [
        i * 100,          // litre to centilitre
        i * 35.1950652,   // litre to imperial fluid ounce
        i / 4.546094188,  // litre to imperial gallon
        i * 1.75975326,   // litre to imperial pint
        i * .879877,      // litre to imperial quart
        i / 1e3,          // litre to kilolitre
        i,                // litre to litre
        i * 1e3,          // litre to millilitre
        i * 33.8140227,   // litre to US fluid ounce
        i / 3.785411784,  // litre to US gallon
        i * 2.11338,      // litre to US pint
        i * 1.05669       // litre to US quart
      ][document.getElementById('liquid-output').value],
      [
        i / 10,           // millilitre to centilitre
        i / 284.130742,   // millilitre to imperial fluid ounce
        i / 45460.9188,   // millilitre to imperial gallon
        i / 568.261485,   // millilitre to imperial pint
        i * .00087987663, // millilitre to imperial quart
        i / 1e6,          // millilitre to kilolitre
        i / 1e3,          // millilitre to litre
        i,                // millilitre to millilitre
        i / 295.735296,   // millilitre to US fluid ounce
        i / 37854.11784,  // millilitre to US gallon
        i / 473.176473,   // millilitre to US pint
        i / 946.352946    // millilitre to US quart
      ][document.getElementById('liquid-output').value],
      [
        i * 2.95735296,   // US fluid ounce to centilitre
        i * 1.04084,      // US fluid ounce to imperial fluid ounce
        i / 153.722,      // US fluid ounce to imperial gallon
        i / 19.2152,      // US fluid ounce to imperial pint
        i / 38.4304,      // US fluid ounce to imperial quart
        i / 33814.0227,   // US fluid ounce to kilolitre
        i / 33.8140227,   // US fluid ounce to litre
        i * 29.5735296,   // US fluid ounce to millilitre
        i,                // US fluid ounce to US fluid ounce
        i / 128,          // US fluid ounce to US gallon
        i / 16,           // US fluid ounce to US pint
        i / 32            // US fluid ounce to US quart
      ][document.getElementById('liquid-output').value],
      [
        i * 378.541178,   // US gallon to centilitre
        i * 133.228,      // US gallon to imperial fluid ounce
        i / 1.20095,      // US gallon to imperial gallon
        i * 6.66139,      // US gallon to imperial pint
        i / .300238,      // US gallon to imperial quart
        i / 264.172052,   // US gallon to kilolitre
        i * 3.785411784,  // US gallon to litre
        i * 3785.411784,  // US gallon to millilitre
        i * 128,          // US gallon to US fluid ounce
        i,                // US gallon to US gallon
        i * 8,            // US gallon to US pint
        i * 4             // US gallon to US quart
      ][document.getElementById('liquid-output').value],
      [
        i * 47.3176473,   // US pint to centilitre
        i * 16.6535,      // US pint to imperial fluid ounce
        i / 9.6076,       // US pint to imperial gallon
        i / 1.20095,      // US pint to imperial pint
        i / 2.4019,       // US pint to imperial quart
        i / 2113.37642,   // US pint to kilolitre
        i / 2.11338,      // US pint to litre
        i * 473.176473,   // US pint to millilitre
        i * 16,           // US pint to US fluid ounce
        i / 8,            // US pint to US gallon
        i,                // US pint to US pint
        i / 2             // US pint to US quart
      ][document.getElementById('liquid-output').value],
      [
        i * 94.6352946,   // US quart to centilitre
        i * 33.307,       // US quart to imperial fluid ounce
        i / 4.8038,       // US quart to imperial gallon
        i * 1.66535,      // US quart to imperial pint
        i / 1.20095,      // US quart to imperial quart
        i / 1056.68821,   // US quart to kilolitre
        i / 1.05669,      // US quart to litre
        i * 946.352946,   // US quart to millilitre
        i * 32,           // US quart to US fluid ounce
        i / 4,            // US quart to US gallon
        i * 2,            // US quart to US pint
        i                 // US quart to US quart
      ][document.getElementById('liquid-output').value]
    ][document.getElementById('liquid-input').value];

    if(document.getElementById('liquid-result').value % 1 !== 0){
        document.getElementById('liquid-result').value =
          parseFloat(document.getElementById('liquid-result').value).toFixed(document.getElementById('decimals').value);
    }
}

function calculate_mass(){
    verify_decimals();

    var i = document.getElementById('mass-value').value;
    if(isNaN(i)){
        document.getElementById('mass-result').value = '';
        return;
    }

    document.getElementById('mass-result').value = [
      [
        i,              // centigram to centigram
        i / 1e3,        // centigram to gram
        i / 1e5,        // centigram to kilogram
        i * 10,         // centigram to milligram
        i / 28349.5,    // centigram to ounce
        i / 453592,     // centigram to pound
        i / 635029.318  // centigram to stone
      ][document.getElementById('mass-output').value],
      [
        i * 1e3,        // gram to centigram
        i,              // gram to gram
        i / 1e3,        // gram to kilogram
        i * 1e3,        // gram to milligram
        i / 28.3495,    // gram to ounce
        i / 453.592,    // gram to pound
        i / 6350.29318  // gram to stone
      ][document.getElementById('mass-output').value],
      [
        i * 1e5,        // kilogram to centigram
        i * 1e3,        // kilogram to gram
        i,              // kilogram to kilogram
        i * 1e6,        // kilogram to milligram
        i * .0283495,   // kilogram to ounce
        i / .453592,    // kilogram to pound
        i / 6.35029318  // kilogram to stone
      ][document.getElementById('mass-output').value],
      [
        i / 10,         // milligram to centigram
        i / 1e3,        // milligram to gram
        i / 1e6,        // milligram to kilogram
        i,              // milligram to milligram
        i / 28349.5,    // milligram to ounce
        i / 453592,     // milligram to pound
        i / 6350293.18  // milligram to stone
      ][document.getElementById('mass-output').value],
      [
        i * 28349.5,    // ounce to centigram
        i * 28.3495,    // ounce to gram
        i / 35.274,     // ounce to kilogram
        i * 28349.5,    // ounce to milligram
        i,              // ounce to ounce
        i / 16,         // ounce to pound
        i / 224         // ounce to stone
      ][document.getElementById('mass-output').value],
      [
        i * 453592,     // pound to centigram
        i * 453.592,    // pound to gram
        i / 2.20462,    // pound to kilogram
        i * 453592,     // pound to milligram
        i * 16,         // pound to ounce
        i,              // pound to pound
        i / 14          // pound to stone
      ][document.getElementById('mass-output').value],
      [
        i * 635029.318, // stone to centigram
        i * 6350.29318, // stone to gram
        i * 6.35029318, // stone to kilogram
        i * 6350293.18, // stone to milligram
        i * 244,        // stone to ounce
        i * 14,         // stone to pound
        i               // stone to stone
      ][document.getElementById('mass-output').value]
    ][document.getElementById('mass-input').value];

    if(document.getElementById('mass-result').value % 1 !== 0){
        document.getElementById('mass-result').value =
          parseFloat(document.getElementById('mass-result').value).toFixed(document.getElementById('decimals').value);
    }
}

function calculate_speed(){
    verify_decimals();

    var i = document.getElementById('speed-value').value;
    if(isNaN(i)){
        document.getElementById('speed-result').value = '';
        return;
    }

    document.getElementById('speed-result').value = [
      [
        i,               // feet per second to feet per second
        i * 1.09728,     // feet per second to kilometres per hour
        i * .592484,     // feet per second to knots
        i / 3.28084,     // feet per second to metres per second
        i * .681818      // feet per second to miles per hour
      ][document.getElementById('speed-output').value],
      [
        i / 1.09728,     // kilometres per hour to feet per second
        i,               // kilometres per hour to kilometres per hour
        i / 1.852,       // kilometres per hour to knots
        i / 3.6,         // kilometres per hour to metres per second
        i / 1.60934      // kilometres per hour to miles per hour
      ][document.getElementById('speed-output').value],
      [
        i / .592484,     // knots to feet per second
        i * 1.852,       // knots to kilometres per hour
        i,               // knots to knots
        i / 1.94384449,  // knots to metres per second
        i * 1.15077945   // knots to miles per hour
      ][document.getElementById('speed-output').value],
      [
        i * 3.28084,     // metres per second to feet per second
        i * 3.6,         // metres per second to kilometres per hour
        i * 1.94384449,  // metres per second to knots
        i,               // metres per second to metres per second
        i * 2.23694      // metres per second to miles per hour
      ][document.getElementById('speed-output').value],
      [
        i / .681818,     // miles per hour to feet per second
        i * 1.60934,     // miles per hour to kilometres per hour
        i / 1.15077945,  // miles per hour to knots
        i / 2.23694,     // miles per hour to metres per second
        i                // miles per hour to miles per hour
      ][document.getElementById('speed-output').value]
    ][document.getElementById('speed-input').value];

    if(document.getElementById('speed-result').value % 1 !== 0){
        document.getElementById('speed-result').value =
          parseFloat(document.getElementById('speed-result').value).toFixed(document.getElementById('decimals').value);
    }
}

function calculate_temperature(){
    verify_decimals();

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
        i * 21 / 40 + 7.5             // Celsius to Rømer
      ][document.getElementById('temperature-output').value],
      [
        100 - i / 1.5,                // Delisle to Celsius
        i,                            // Delisle to Delisle
        212 - i * 1.2,                // Delisle to Fahrenheit
        373.15 - i / 1.5,             // Delisle to Kelvin
        33 - (i * 11 / 50),           // Delisle to Newton
        671.67 - i * 1.2,             // Delisle to Rankine
        80 - (i * 8 / 15),            // Delisle to Réaumur
        60 - (i * 7 / 20)             // Delisle to Rømer
      ][document.getElementById('temperature-output').value],
      [
        (i - 32) / 1.8,               // Fahrenheit to Celsius
        (212 - i) / 1.2,              // Fahrenheit to Delisle
        i,                            // Fahrenheit to Fahrenheit
        (i - 32) / 1.8 + 273.15,      // Fahrenheit to Kelvin
        (i - 32) * 11 / 60,           // Fahrenheit to Newton
        i + 459.67,                   // Fahrenheit to Rankine
        (i - 32) * 4 / 9,             // Fahrenheit to Réaumur
        (i - 32) * 7 / 24 + 7.5       // Fahrenheit to Rømer
      ][document.getElementById('temperature-output').value],
      [
        i - 273.15,                   // Kelvin to Celsius
        (373.15 - i) * 1.5,           // Kelvin to Delisle
        (i - 273.15) * 1.8 + 32,      // Kelvin to Fahrenheit
        i,                            // Kelvin to Kelvin
        (i - 273.15) * .33,           // Kelvin to Newton
        i * 1.8,                      // Kelvin to Rankine
        (i - 273.15) / 1.25,          // Kelvin to Réaumur
        (i - 273.15) * 21 / 40 + 7.5  // Kelvin to Rømer
      ][document.getElementById('temperature-output').value],
      [
        i / .33,                      // Newton to Celsius
        (33 - i) * 50 / 11,           // Newton to Delisle
        i * 60 / 11 + 32,             // Newton to Fahrenheit
        i / .33 + 273.15,             // Newton to Kelvin
        i,                            // Newton to Newton
        i * 60 / 11 + 491.67,         // Newton to Rankine
        i * 80 / 33,                  // Newton to Réaumur
        i * 35 / 22 + 7.5             // Newton to Rømer
      ][document.getElementById('temperature-output').value],
      [
        (i - 491.67) / 1.8,           // Rankine to Celsius
        (671.67 - i) / 1.2,           // Rankine to Delisle
        i - 459.67,                   // Rankine to Fahrenheit
        i / 1.8,                      // Rankine to Kelvin
        (i - 491.67) * 11 / 60,       // Rankine to Newton
        i,                            // Rankine to Rankine
        (i - 491.67) * 4 / 9,         // Rankine to Réaumur
        (i - 491.67) * 7 / 24 + 7.5   // Rankine to Rømer
      ][document.getElementById('temperature-output').value],
      [
        i * 1.25,                     // Réaumur to Celsius
        (80 - i) * 15 / 8,            // Réaumur to Delisle
        i * 9/4 + 32,                 // Réaumur to Fahrenheit
        i * 1.25 + 273.15,            // Réaumur to Kelvin
        i * 80 / 33,                  // Réaumur to Newton
        i * 9 / 4 + 491.67,           // Réaumur to Rankine
        i,                            // Réaumur to Réaumur
        i * 21 / 32 + 7.5             // Réaumur to Rømer
      ][document.getElementById('temperature-output').value],
      [
        (i - 7.5) * 40 / 21,          // Rømer to Celsius
        (60 - i) * 20 / 7,            // Rømer to Delisle
        (i - 7.5) * 24 / 7 + 32,      // Rømer to Fahrenheit
        (i - 7.5) * 40 / 21 + 273.15, // Rømer to Kelvin
        (i - 7.5) * 22 / 35,          // Rømer to Newton
        (i - 7.5) * 24 / 7 + 491.67,  // Rømer to Rankine
        (i - 7.5) * 32 / 21,          // Rømer to Réaumur
        i                             // Rømer to Rømer
      ][document.getElementById('temperature-output').value]
    ][document.getElementById('temperature-input').value];

    if(document.getElementById('temperature-result').value % 1 !== 0){
        document.getElementById('temperature-result').value =
          parseFloat(document.getElementById('temperature-result').value).toFixed(document.getElementById('decimals').value);
    }
}

function calculate_time(){
    verify_decimals();

    var i = document.getElementById('time-value').value;
    if(isNaN(i)){
        document.getElementById('time-result').value = '';
        return;
    }

    document.getElementById('time-result').value = [
      [
        i,                   // day to day
        i / 14,              // day to fortnight
        i * 25920,           // day to helek
        i * 24,              // day to hour
        i * 1e3,             // day to Internet Time
        i * .03660098822,    // day to lunar day
        i / 1.02749,         // day to Martian solar day
        i / .03650462962,    // day to microcentury
        i * 1440,            // day to minute
        i * 86400,           // day to second
        i / 7,               // day to week
        i / 365.242          // day to year
      ][document.getElementById('time-output').value],
      [
        i * 14,              // fortnight to day
        i,                   // fortnight to fortnight
        i * 362880,          // fortnight to helek
        i * 336,             // fortnight to hour
        i * 14000,           // fortnight to Internet Time
        i / 1.95154761905,   // fortnight to lunar day
        i / .0733922321,     // fortnight to Martian solar day
        i / .00260747354,    // fortnight to microcentury
        i * 20160,           // fortnight to minute
        i * 1209600,         // fortnight to second
        i * 2,               // fortnight to week
        i / 26.0887285       // fortnight to year
      ][document.getElementById('time-output').value],
      [
        i / 25920,           // helek to day
        i / 362880,          // helek to fortnight
        i,                   // helek to helek
        i / 1080,            // helek to hour
        i / 25.920,          // helek to Internet Time
        i / 708177.6864,     // helek to lunar day
        i / 26632.5408,      // helek to Martian solar day
        i / 946.08,          // helek to microcentury
        i / 18,              // helek to minute
        i / .3,              // helek to second
        i / 181440,          // helek to week
        i / 9467077.79       // helek to year
      ][document.getElementById('time-output').value],
      [
        i / 24,              // hour to day
        i / 366,             // hour to fortnight
        i * 1080,            // hour to helek
        i,                   // hour to hour
        i * 41.666,          // hour to Internet Time
        i / 655.72,          // hour to lunar day
        i / 24.65979,        // hour to Martian solar day
        i / .87611111111,    // hour to microcentury
        i * 60,              // hour to minute
        i * 3600,            // hour to second
        i / 168,             // hour to week
        i / 8765.81          // hour to year
      ][document.getElementById('time-output').value],
      [
        i / 1e3,             // Internet Time to day
        i / 14000,           // Internet Time to fortnight
        i * 25.920,          // Internet Time to helek
        i / 41.666,          // Internet Time to hour
        i,                   // Internet Time to Internet Time
        i / 27312.04944,     // Internet Time to lunar day
        i / 1027.129064,     // Internet Time to Martian solar day
        i / 36.49178,        // Internet Time to microcentury
        i / .6944,           // Internet Time to minute
        i / .01157,          // Internet Time to second
        i / 700,             // Internet Time to week
        i / 365242           // Internet Time to year
      ][document.getElementById('time-output').value],
      [
        i / .03660098822,    // lunar day to day
        i * 1.95154761905,   // lunar day to fortnight
        i * 708177.6864,     // lunar day to helek
        i * 655.72,          // lunar day to hour
        i * 27312.04944,     // lunar day to Internet Time
        i,                   // lunar day to lunar day
        i / .0376071765,     // lunar day to Martian solar day
        i * 748.443880786,   // lunar day to microcentury
        i * 39343.2,         // lunar day to minute
        i * 2360592,         // lunar day to second
        i * 3.9030952381,    // lunar day to week
        i * .0748042869      // lunar day to year
      ][document.getElementById('time-output').value],
      [
        i * 1.02749,         // Martian solar day to day
        i * .0733922321,     // Martian solar day to fortnight
        i * 26632.5408,      // Martian solar day to helek
        i * 24.65979,        // Martian solar day to hour
        i * 1027.129064,     // Martian solar day to Internet Time
        i * .0376071765,     // Martian solar day to lunar day
        i,                   // Martian solar day to Martian solar day
        i * 28.1468611287,   // Martian solar day to microcentury
        i * 1479.59,         // Martian solar day to minute
        i * 88775.2,         // Martian solar day to second
        i * .146784,         // Martian solar day to week
        i * .00281318        // Martian solar day to year
      ][document.getElementById('time-output').value],
      [
        i * .03650462962,    // microcentury to day
        i * .00260747354,    // microcentury to fortnight
        i * 946.08,          // microcentury to helek
        i * .87611111111,    // microcentury to hour
        i * 36.49178,        // microcentury to Internet Time
        i / 748.443880786,   // microcentury to lunar day
        i / 28.1468611287,   // microcentury to Martian solar day
        i,                   // microcentury to microcentury
        i / .01902346227,    // microcentury to minute
        i * 3154,            // microcentury to second
        i * .00521494708,    // microcentury to week
        i * .000099946       // microcentury to year
      ][document.getElementById('time-output').value],
      [
        i / 1440,            // minute to day
        i / 20160,           // minute to fortnight
        i * 18,              // minute to helek
        i / 60,              // minute to hour
        i * .6944,           // minute to Internet Time
        i / 39343.2,         // minute to lunar day
        i / 1479.59,         // minute to Martian solar day
        i * .01902346227,    // minute to microcentury
        i,                   // minute to minute
        i * 60,              // minute to second
        i / 10080,           // minute to week
        i / 525949           // minute to year
      ][document.getElementById('time-output').value],
      [
        i / 86400,           // second to day
        i / 1209600,         // second to fortnight
        i * .3,              // second to helek
        i / 3600,            // second to hour
        i * .01157,          // second to Internet Time
        i / 2360592,         // second to lunar day
        i / 88775.2,         // second to Martian solar day
        i / 3154,            // second to microcentury
        i / 60,              // second to minute
        i,                   // second to second
        i / 604800,          // second to week
        i / 31556908.8       // second to year
      ][document.getElementById('time-output').value],
      [
        i * 7,               // week to day
        i / 2,               // week to fortnight
        i * 181440,          // week to helek
        i * 168,             // week to hour
        i * 700,             // week to Internet Time
        i / 3.9030952381,    // week to lunar day
        i / .146784,         // week to Martian solar day
        i / .00521494708,    // week to microcentury
        i * 10080,           // week to minute
        i * 604800,          // week to second
        i,                   // week to week
        i / 52.1775          // week to year
      ][document.getElementById('time-output').value],
      [
        i * 365.242,         // year to day
        i * 26.0887285,      // year to fortnight
        i * 9467077.79,      // year to helek
        i * 8765.81,         // year to hour
        i * 365242,          // year to Internet Time
        i / .0748042869,     // year to lunar day
        i / .00281318,       // year to Martian solar day
        i / .000099946,      // year to microcentury
        i * 525949,          // year to minute
        i * 31556908.8,      // year to second
        i * 52.1775,         // year to week
        i                    // year to year
      ][document.getElementById('time-output').value]
    ][document.getElementById('time-input').value];

    if(document.getElementById('time-result').value % 1 !== 0){
        document.getElementById('time-result').value =
          parseFloat(document.getElementById('time-result').value).toFixed(document.getElementById('decimals').value);
    }
}

function verify_decimals(){
    if(isNaN(document.getElementById('decimals').value)){
        document.getElementById('decimals').value = 5;

    }else if(document.getElementById('decimals').value < 0){
        document.getElementById('decimals').value = 0;

    }else if(document.getElementById('decimals').value > 20){
        document.getElementById('decimals').value = 20;
    }
}

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
