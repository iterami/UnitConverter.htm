'use strict';

function calculate(group){
    if(group.indexOf('-') !== -1){
        group = group.substring(
          0,
          group.indexOf('-')
        );
    }

    const input = document.getElementById(group + '-input').value;
    const output = document.getElementById(group + '-output').value;
    let value = document.getElementById(group + '-value').value;

    value *= power(
      value,
      group + '-input-power'
    );

    if(group.indexOf('Temperature') !== -1){
        let formulae = temperature_formulae(value);

        if(input !== units['Temperature']['_default']){
            value = formulae[input];
            formulae = temperature_formulae(value);
        }

        value = formulae[units['Temperature']['_default']][output];

    }else if(input !== output){
        if(input !== units[group]['_default']){
            value /= units[group][input];
        }

        value *= units[group][output];
    }

    value /= power(
      value,
      group + '-output-power'
    );

    document.getElementById(group + '-result').value = core_storage_data['rounding']
      ? core_round({
        'number': value,
      })
      : value;
}

function calculate_all(){
    for(const type in units){
        calculate(type);
    }
}

function power(value, id){
    let power = +document.getElementById(id).value;
    if(globalThis.isNaN(power)){
        power = 0;
    }
    return Math.pow(
      10,
      power
    );
}

function reverse(id){
    let temp = document.getElementById(id + '-input').value;
    document.getElementById(id + '-input').value = document.getElementById(id + '-output').value;
    document.getElementById(id + '-output').value = temp;

    temp = document.getElementById(id + '-input-power').value;
    document.getElementById(id + '-input-power').value = document.getElementById(id + '-output-power').value;
    document.getElementById(id + '-output-power').value = temp;

    calculate(id);
}

function temperature_formulae(value){
    return {
      'Amonton': value * 4.65116 - 239.535,
      'Barnsdorf': value * 3.80952 - 13.9683,
      'Beaumuir': value * 1.23862,
      'Bénart': value * .79661 - .398305,
      'Bergen': value * .595238 - 3.57143,
      'Brisson': value * 1.18519,
      'Celsius [°C]': {
        'Amonton': value * .215 + 51.5,
        'Barnsdorf': value * .2625 + 11 / 3,
        'Beaumuir': value / 1.23862,
        'Bénart': value * 1.25532 + .5,
        'Bergen': value * 1.68 + 6,
        'Brisson': value / 1.18519,
        'Celsius [°C]': value,
        'Cimento': value * .665 + 13.5,
        'Cruquius': value * 4.39811 + 1070.19,
        'Dalencé': value * (2 / 3) - 10,
        'Daniell': value * .247527 - 3.30028,
        'De la Hire': value * .988302 + 20.5698,
        'De la Ville': value * 1.77402 + 25.0581,
        'Delisle [°D]': (100 - value) * 1.5,
        'De Luc': value / 1.26984,
        'De Lyon': value / 1.01587,
        'de Revillas': value / -.673609334 + 148.454,
        'de Suede': value * .995999 + .040011,
        'de Villeneuve': value * (4 / 3),
        'Du Crest': value * 1.17118 - 17.0992,
        'Edinburgh': value * .386714 + 8.25,
        'electron volts': value / 11604.9669 + .0235383,
        'Fahrenheit [°F]': value * 1.8 + 32,
        'Florentine Magnum': value * 2.71186 - 25.7627,
        'Fowler': value * 2.81109 - 34,
        'Frick': value * 2.259 - 33.3,
        'Gas Mark [G]': (value - 121) / 14,
        'Goubert': value * .9,
        'Hales': value * 1.5,
        'Hauksbee': value / -.4 + 78,
        'Jacobs-Holborn': value * 7.1 + 337,
        'Kelvin [K]': value + 273.15,
        'La Court': value * .759375 + 15,
        'Lambert': value * 3.7 + 1000,
        'Lange': value * .481875 + (20.6 / 3),
        'Leiden': value + 253,
        'Ludolf': value * 1.60313 + 32,
        'Mariotte': value * 2.57069 + 24.4216,
        'Miles': value * 1.8,
        'Murray': value * 2.48 + 99,
        'Newton [°N]': value * .33,
        'Oertel': value * .9 + 32,
        'Paris': value * 1.71429 + 28,
        'Poleni': value * .151765 + 47.3529,
        'Rankine [°Ra]': (value + 273.15) * 1.8,
        'Réaumur [°Ré]': value / 1.25,
        'Richter': value * .82125 + 18,
        'Rinaldini': value * .12,
        'Rømer [°Rø]': value * 21 / 40 + 7.5,
        'Sagredo': value * 4.73934 + 100,
        'Sulzer': value * 1.57075 - 1.07547,
        'Urist [°U]': value * 1.8 + 10000,
        'Wedgwood (modern)': value / 24.8571954 - 10.8218,
        'Wedgwood (original)': value / 72.2219815 - 8.04188,
      },
      'Cimento': value * 1.50376 - 20.3008,
      'Cruquius': value * .22737 - 243.329,
      'Dalencé': value * 1.5 + 15,
      'Daniell': value * 4.03996 + 13.333,
      'De la Hire': value * 1.01184 - 20.8133,
      'De la Ville': value * .56369 - 14.125,
      'Delisle [°D]': 100 - value / 1.5,
      'De Luc': value * 1.26984,
      'De Lyon': value * 1.01587,
      'de Revillas': value / -1.48453633 + 100,
      'de Suede': value * 1.00402 - .0401717,
      'de Villeneuve': value * .75,
      'Du Crest': value * .853839 + 14.6,
      'Edinburgh': value * 2.58589 - 21.3336,
      'electron volts': value * 11604.5 - 273.15,
      'Fahrenheit [°F]': (value - 32) / 1.8,
      'Florentine Magnum': value * .36875 + 9.5,
      'Fowler': value * .355734 + 12.095,
      'Frick': value * .442674 + 14.741,
      'Gas Mark [G]': value * 14 + 121,
      'Goubert': value / .9,
      'Hales': value / 1.5,
      'Hauksbee': value / -2.5 + 31.2,
      'Jacobs-Holborn': value * .140845 - 47.4648,
      'Kelvin [K]': value - 273.15,
      'La Court': value * 1.31687 - 19.7531,
      'Lambert': value * .27027 - 270.27,
      'Lange': value * 2.07523 - 14.2499,
      'Leiden': value - 253,
      'Ludolf': value * .623782 - 19.961,
      'Mariotte': value * .389 - 9.5,
      'Miles': value / 1.8,
      'Murray': value * .403226 - 39.9194,
      'Newton [°N]': value / .33,
      'Oertel': value / .9 - 35.5556,
      'Paris': value * .583333 - 16.3333,
      'Poleni': value * 6.58915 - 312.016,
      'Rankine [°Ra]': (value - 491.67) / 1.8,
      'Réaumur [°Ré]': value * 1.25,
      'Richter': value * 1.21766 - 21.9178,
      'Rinaldini': value / .12,
      'Rømer [°Rø]': (value - 7.5) * 40 / 21,
      'Sagredo': value * .211 - 21.1,
      'Sulzer': value * .636637 + .684685,
      'Urist [°U]': (value - 10000) / 1.8,
      'Wedgwood (modern)': value * 24.8572 + 269,
      'Wedgwood (original)': value * 72.2219 + 580.8,
    };
}
