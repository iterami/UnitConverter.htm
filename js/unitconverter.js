'use strict';

function calculate(group){
    if(group.indexOf('-') !== -1){
        group = group.substring(
          0,
          group.indexOf('-')
        );
    }

    var input = document.getElementById(group + '-input').value;
    var output = document.getElementById(group + '-output').value;
    var value = document.getElementById(group + '-value').value;

    // Adjust input based on input power, converted to a number.
    value *= power(
      value,
      group + '-input-power'
    );

    if(group.indexOf('temperature') !== -1){
        var formulae = temperature_formulae(value);

        // If not converting from default temperature, convert to default temperature first.
        if(input !== units['temperature']['_default']){
            value = formulae[input];
            formulae = temperature_formulae(value);
        }

        // Convert from default temperature to output unit.
        value = formulae[units['temperature']['_default']][output];

    }else if(input !== output){
        // If the input unit is not the default unit, convert to the default unit.
        if(input !== units[group]['_default']){
            value /= units[group][input];
        }

        // Convert the entered input from the default unit to the output unit.
        value *= units[group][output];
    }

    // Adjust output based on output power.
    value /= power(
      value,
      group + '-output-power'
    );

    // Make sure only allowed number of decimal places are displayed.
    if(value % 1 !== 0){
        value = value.toFixed(core_storage_data['decimals']);
    }

    // Display result.
    document.getElementById(group + '-result').value = value;
}

function calculate_all(){
    for(var type in units){
        calculate(type);
    }
}

function power(value, id){
    var power = +document.getElementById(id).value;
    if(isNaN(power)){
        power = 0;
    }
    return Math.pow(
      10,
      power
    );
}

function repo_init(){
    core_repo_init({
      'storage': {
        'decimals': 5,
      },
      'storage-menu': '<table><tr><td><input id=decimals><td>Decimals</table>',
      'title': 'UnitConverter.htm',
    });

    var unittable = '';

    for(var type in units){
        var options = '';
        for(var unit in units[type]){
            if(unit === '_default'){
                continue;
            }
            options += '<option value="' + unit + '">' + unit + '</option>';
        }

        unittable += '<tr><td><input id=' + type + '-value>*10^<input class=power id=' + type + '-input-power value=0><br><select id=' + type + '-input>' + options + '</select>';
        unittable += '<td><a onclick="reverse(\'' + type + '\')">'
          + type
          + '</a>';
        unittable += '<td><input id=' + type + '-result readonly>*10^<input class=power id=' + type + '-output-power value=0><br><select id=' + type + '-output>' + options + '</select>';
    }

    document.getElementById('units').innerHTML = unittable;

    for(type in units){
        document.getElementById(type + '-input').onchange
          = document.getElementById(type + '-input-power').oninput
          = document.getElementById(type + '-output').onchange
          = document.getElementById(type + '-output-power').oninput
          = document.getElementById(type + '-value').oninput = function(){
            calculate(this.id);
        };

        document.getElementById(type + '-output').value = units[type]['_default'];
    }
}

function reverse(id){
    var temp = document.getElementById(id + '-input').value;
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
        'Beaumuir': value * .807353,
        'Bénart': value * 1.25532 + .5,
        'Bergen': value * 1.68 + 6,
        'Brisson': value * .84375,
        'Celsius [°C]': value,
        'Cimento': value * .665 + 13.5,
        'Cruquius': value * 4.39811 + 1070.19,
        'Dalencé': value * (2 / 3) - 10,
        'Daniell': value * .247527 - 3.30028,
        'De la Hire': value * .988302 + 20.5698,
        'De la Ville': value * 1.77402 + 25.0581,
        'Delisle [°D]': (100 - value) * 1.5,
        'De Luc': value * .7875,
        'De Lyon': value * .984375,
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
      'Wedgwood (modern)': value * 24.8572 + 269,
      'Wedgwood (original)': value * 72.2219 + 580.8,
    };
}

var units = {
  'acceleration': {
    '_default': 'metre per second squared [m/s²]',
    'foot per second squared [ft/s²]': 3.280839895,
    'gal [Gal]': 100,
    'metre per hour squared [m/h²]': 3600,
    'metre per second squared [m/s²]': 1,
    'miles per hour squared [mph²]': 1 / (1.4 + 2 / 30),
    'standard gravity [ɡ₀]': 1 / 9.80665,
  },
  'angle': {
    '_default': 'radian [rad]',
    'arcminute [′]': 3437.748,
    'arcsecond [″]': 206264.88,
    'circle': 180 / Math.PI / 360,
    'degree [°]': 180 / Math.PI,
    'gradian [gon]': 63.662,
    'mil': 6283.183,
    'octant': 180 / Math.PI / 45,
    'quadrant': 180 / Math.PI / 90,
    'radian [rad]': 1,
    'sextant': 180 / Math.PI / 60,
    'sign': 180 / Math.PI / 30,
    'turn': .159154943,
  },
  'area': {
    '_default': 'metres squared [m²]',
    'acre [ac]': 1 / 4046.86,
    'are [a]': .01,
    'barn [b]': .0000000000000000000000000001,
    'bu [歩]': 1 / 3.306,
    'cawnie': 1 / 5349,
    'chō [町]': 1 / 9917.36,
    'cuerda': 1 / 3930.395625,
    'decimal': 1 / 40.4686,
    'feet squared [ft²]': 10.7639,
    'gō [合]': 1 / .3306,
    'ground': 1 / 203,
    'hectare [ha]': .0001,
    'inches squared [in²]': 1550.0031,
    'jō [畳]': 1 / 1.653,
    'marabba': 1 / 101171,
    'metres squared [m²]': 1,
    'miles squared [mi²]': 1 / 2589990,
    'plaza': .00015625,
    'rood': 1 / 1011.71,
    'se [畝]': 1 / 99.1736,
    'shaku [勺]': 1 / .03306,
    'strema': .001,
    'tan [段, 反]': 1 / 991.736,
    'township': 1 / 93239571.972095996141,
    'tsubo [坪]': 1 / 3.306,
    'yards squared [yd²]': .83612736,
  },
  'density': {
    '_default': 'grams per cubic metre [g/m³]',
    'grams per cubic metre [g/m³]': 1,
    'grams per litre [g/l]': 1000,
    'metric tons per cubic metre [t/m³]': 1000000,
  },
  'energy': {
    '_default': 'joule [J]',
    'electron volt [eV]': 6241509343300000000,
    'erg': 10000000,
    'foot-pound [ft·lb]': 1 / 1.3558179483314,
    'international steam table calorie [calᵢₜ]': 1 / 4.1868,
    'joule [J]': 1,
    'mean BTU [Btuₘₑₐₙ]': 1 / 1055.87,
    'mean calorie [calₘₑₐₙ]': 1 / 4.19002,
    'thermochemical BTU [Btuₜₕ]': 1 / 1054.35026444,
    'thermochemical calorie [calₜₕ]': 1 / 4.184,
    'ton of TNT': 1 / 4184000000,
    'watt-hour [W·h]': 1 / 3600,
  },
  'force': {
    '_default': 'newton [N]',
    'dyne [dyn]': 100000,
    'gram-force [gf]': 1 / .00980665,
    'kip': 1 / 4448.2216,
    'newton [N]': 1,
    'ounce-force [ozf]': 3.59694310194,
    'pond': 1 / .009806649999788,
    'pound-force [lbf]': .224809,
    'poundal [pdl]': 7.23301,
    'sthène [sn]': .001,
  },
  'fuel': {
    '_default': 'metres per litre [m/l]',
    'litres per 100 kilometres [l/100km]': 100000,
    'metres per litre [m/l]': 1,
    'miles per imperial gallon [MPG]': .00282481,
    'miles per US gallon [MPG]': .00235215,
  },
  'illuminance': {
    '_default': 'lux [lx]',
    'foot-candle [fc]': .09290304,
    'lux [lx]': 1,
    'phot [ph]': .0001,
    'skot [sk]': 3141.69,
  },
  'length': {
    '_default': 'metre [m]',
    'ald': 1 / 1.6,
    'alen': 1 / .6277,
    'aln': 1 / .5938,
    'ångström [Å]': 1 / .0000000001,
    'Aṅgula': 1 / .01763,
    'arpent': 1 / 58.47109,
    'astronomical unit [au]': 1 / 149597870700,
    'barleycorn': 1 / (.254 / 3),
    'bu [分]': 330,
    'chain [ch]': 1 / 20.1168,
    'chi [尺]': 3,
    'chō [町]': 3.3 / 360,
    'cubit': 1 / .4572,
    'ell (Danish)': 1 / .941318,
    'ell (Flemish)': 1 / .686,
    'ell (French)': 1 / 1.372,
    'ell (German)': 1 / .579,
    'ell (Polish)': 1 / .787,
    'ell (Scottish)': 1 / .635,
    'fathom': 1 / 1.8288,
    'foot [ft]': 3.280839895,
    'furlong': 1 / 201.168,
    'girah': 1 / .05715,
    'Hammer unit': 1 / .01905,
    'hand [h]': 1 / .1016,
    'hiro [尋]': .55,
    'inch [in]': 39.3701,
    'jō [丈]': .33,
    'jow': 1 / .00635,
    'kanejaku [曲尺]': 3.3,
    'ken [間]': .55,
    'lightyear [ly]': 1 / 9460730472580800,
    'ligne': 1 / .0022558291,
    'link [l.]': 1 / .201168,
    'metre [m]': 1,
    'mil': 39370.1,
    'mile [mi]': 1 / 1609.344,
    'mō [毛, 毫]': 33000,
    'nautical league': 1 / 5556,
    'nautical mile [nmi]': 1 / 1852,
    'parsec [pc]': 1 / 30856775800000000,
    'ri [里]': 3.3 / 12960,
    'rin [厘]': 3300,
    'shaku [尺]': 3.3,
    'spat [S]': .00000001,
    'sun [寸]': 33,
    'thou': 1 / .0000254,
    'unglie': 1 / .01905,
    'survey foot (India)': 1 / .3047996,
    'survey foot (US)': 3937 / 1200,
    'yard [yd]': 1.09361,
  },
  'level': {
    '_default': 'bel [B]',
    'bel [B]': 1,
    'nepers [Np]': 1 / .868589,
  },
  'magnetism': {
    '_default': 'tesla [T]',
    'gauss [G]': 10000,
    'tesla [T]': 1,
  },
  'mass': {
    '_default': 'gram [g]',
    'abucco': 1 / 196.44,
    'adowlie': 1 / 1982,
    'agiro': 1 / 392.88,
    'atomic mass unit (AMU)': 1 / 1.6605390402e-24,
    'bisauli [बिसौलि]': 1 / 1166.25,
    'biza': 1 / 1571.52,
    'boṛi [बोड़ि]': 1 / 583.125,
    'caret [ct]': 5,
    'cental': .0220462262185,
    'cullingey': 1 / 5.265,
    'dharni [धार्नि]': 1 / 2332.5,
    'dram [dr]': 1 / 1.7718451953125,
    'dram apothecaries [dr ap]': 1 / 3.8879346,
    'esterling': .70548,
    'firkin': 1 / 40823.3133,
    'fun [分]': 4 / 1.5,
    'funt [фунт]': 1 / 409.5,
    'garce': 1 / 4198518,
    'grain': 1 / .06479891,
    'gram [g]': 1,
    'heavy adowlie': 1 / 2031,
    'hyakume [百目]': 1 / 375,
    'kanme [貫目]': 1 / 3750,
    'keel': 1 / 21540194.46656,
    'kin [斤]': 1 / 600,
    'kula': 1 / 11165,
    'large sack': 1 / 101604.69088,
    'long-ton': 1 / 1016046.08,
    'metric-tonne [t]': .00001,
    'mina': 1 / 571,
    'momme [匁]': 1 / 3.75,
    'munjandie': 1 / .25919564,
    'ounce [oz]': .035274,
    'passeree': 1 / 4665.5,
    'pāu [पाउ]': 1 / 194.375,
    'pennyweight [dwt]': 1 / 1.55517384,
    'Planck mass [mₚ]': 1 / .0000217645,
    'pood [пуд]': 1 / 16380,
    'pound [lb]': 1 / 453.59237,
    'room': 1 / 7112328.360594,
    'rotal': 1 / 507.5,
    'seer (Afghanistan)': 1 / 7066,
    'seer (India)': 1 / 933.10,
    'ship load': 1 / 430803889.3312,
    'short-ton': 1 / 907184,
    'slug': 68.5217659,
    'stone [st]': 1 / 6350.29318,
    'teccalis': 1 / 15.7152,
    'troy grain [gr]': 1 / .06479891,
    'troy-ounce [oz t]': 1 / 31.1034768,
    'Whey (Essex)': 1 / 107047.79932,
    'zolotnik [zol.]': 1 / 4.2658,
  },
  'power': {
    '_default': 'watt [W]',
    'mechanical horsepower [hp]': 1 / 745.7,
    'metric horsepower [PS]': 1 / 735.49875,
    'poncelet [p]': 1 / 980.665,
    'ton of refrigeration [TR]': 1 / 3516.8525,
    'watt [W]': 1,
  },
  'pressure': {
    '_default': 'pascal [Pa]',
    'bar': .00001,
    'pascal [Pa]': 1,
    'pièze [pz]': .001,
    'pound-force per square inch absolute [psia]': .000145038,
    'standard atmosphere [atm]': 1 / 101325,
    'technical atmosphere [at]': 1 / 98066.5,
    'torr [Torr]': 760 / 101325,
    'Vickers pyramid number [HV]': 1 / 9807000,
  },
  'speed': {
    '_default': 'metres per second [m/s]',
    'feet per second [ft/s]': 1 / .3048,
    'knots': 1.94384,
    'mach [M]': 1 / 340.29,
    'metres per hour [m/h]': 3600,
    'metres per second [m/s]': 1,
    'miles per hour [mph]': 2.23694,
    'miles per second': 1 / 1609.34,
    'speed of light [c]': 1 / 299792458,
  },
  'temperature': {
    '_default': 'Celsius [°C]',
    'Amonton': void 0,
    'Barnsdorf': void 0,
    'Beaumuir': void 0,
    'Bénart': void 0,
    'Bergen': void 0,
    'Brisson': void 0,
    'Celsius [°C]': void 0,
    'Cimento': void 0,
    'Cruquius': void 0,
    'Dalencé': void 0,
    'Delisle [°D]': void 0,
    'De Luc': void 0,
    'De Lyon': void 0,
    'de Suede': void 0,
    'de Revillas': void 0,
    'de Villeneuve': void 0,
    'Du Crest': void 0,
    'Edinburgh': void 0,
    'electron volts': void 0,
    'Fahrenheit [°F]': void 0,
    'Florentine Magnum': void 0,
    'Fowler': void 0,
    'Frick': void 0,
    'Gas Mark [G]': void 0,
    'Goubert': void 0,
    'Hales': void 0,
    'Hauksbee': void 0,
    'Jacobs-Holborn': void 0,
    'Kelvin [K]': void 0,
    'La Court': void 0,
    'Lambert': void 0,
    'Lange': void 0,
    'Leiden': void 0,
    'Ludolf': void 0,
    'Mariotte': void 0,
    'Miles': void 0,
    'Murray': void 0,
    'Newton [°N]': void 0,
    'Oertel': void 0,
    'Paris': void 0,
    'Poleni': void 0,
    'Rankine [°Ra]': void 0,
    'Réaumur [°Ré]': void 0,
    'Richter': void 0,
    'Rinaldini': void 0,
    'Rømer [°Rø]': void 0,
    'Sagredo': void 0,
    'Sulzer': void 0,
    'Wedgwood (modern)': void 0,
    'Wedgwood (original)': void 0,
  },
  'time': {
    '_default': 'second [s]',
    'atom': 1 / .15957446808,
    'century [c.]': 1 / 3155690880,
    'day [d]': 1 / 86400,
    'decade': 1 / 315569088,
    'fortnight': 1 / 1209600,
    'helek [hl]': .3,
    'hour [h]': 1 / 3600,
    'Internet Time [.beat]': .01157,
    'lunar day': 1 / 2360592,
    'Martian solar day [sol]': 1 / 88775.2,
    'minute [min]': 1 / 60,
    'momentum': 1 / 90,
    'month': 1 / 2592000,
    'radar metre': 1 / .00000000666,
    'radar nautical mile': 1 / .000012355,
    'radar statute mile': 1 / .00001075,
    'second [s]': 1,
    'shake': 1 / .00000001,
    'week': 1 / 604800,
    'year [a]': 1 / 31556908.8,
  },
  'torque': {
    '_default': 'newton metre [N·m]',
    'gram metre [g·m]': 1 / 9806.65,
    'newton metre [N·m]': 1,
    'pound-foot [lb·ft]': 1 / 1.355818,
  },
  'volume': {
    '_default': 'litre [l]',
    'acetabulum': 1 / .068125,
    'acre-foot': 1 / 1233480,
    'adowlie': 1 / 2.509,
    'ale/beer barrel': 1 / 163.65924,
    'ale/beer firkin': 1 / 40.91481,
    'ale/beer hogshead': 1 / 245.48886,
    'amphora quadrantal': 1 / 26.16,
    'Australian tablespoon': 50,
    'bath': 1 / 2200,
    'board-foot [FBM]': 1 / 2.359737225,
    'bushel (imperial)': 1 / 36.368735,
    'bushel (US)': 1 / 35.239072,
    'butt of beer': 1 / 490.97772,
    'chungah': 1 / .75768236466,
    'congius': 1 / 3.27,
    'coomb': 1 / 145.47494,
    'cotyla': 1 / .2725,
    'cran': 1 / 170.47853205,
    'cubic inch [in³]': 61.0237440947323,
    'cubic foot [ft³]': 1 / 28.316846592,
    'cubic metre [m³]': .001,
    'cubic mile [mi³]': .000000000000239912758579,
    'cubic yard [yd³]': 1 / 764.5549,
    'culeus': 1 / 523.2,
    'cup (imperial)': 1 / .284,
    'cup (US)': 4.22675,
    'cyathus': 1 / (3.27 / 72),
    'demiard': 1 / .284,
    'ephah [ה‎עֵיפָ]': 1 / 36.36,
    'fluid dram [fl dr]': 1 / .0035516328125,
    'fluid dram (US) [fl dr]': 1 / .0036966911953125,
    'fluid ounce (imperial) [fl oz]': 35.1950652,
    'fluid ounce (US) [fl oz]': 33.8140227,
    'gallon (imperial) [gal]': 1 / 4.546094188,
    'gallon (US) [gal]': 1 / 3.785411784,
    'garce (India)': 1 / 5244,
    'garce (Sri Lanka)': 1 / 5084.8,
    'gill (imperial)': 1 / .1420653125,
    'gill (US)': 1 / .11829411825,
    'gō [合]': 1331 / 240.1,
    'hekat': 1 / 4.8,
    'homer': 1 / 220,
    'japanese cup': 5,
    'kinderkin': 1 / 81.82962,
    'koku [石]': 1331 / 240100,
    'lambda [λ]': 1000000,
    'ligula': 1 / (3.27 / 288),
    'litre [l]': 1,
    'log': 1 / .505,
    'maris': 1 / 30.3,
    'metretes': 1 / 37.4,
    'metric cup': 4,
    'mina': 1 / .505,
    'minim (imperial) [min]': 35.1950652 * 480,
    'minim (US) [min]': 33.8140227 * 480,
    'octave': 1 / 73,
    'omer [ר‎עמ]': 1 / 3.636,
    'pau': 1 / .284130625,
    'peck (imperial)': 1 / 9.09218,
    'peck (US)': 1 / 8.80976754172,
    'pin': 1 / 20.457405,
    'pint (imperial) [pt]': 1.75975326,
    'pint (US) [pt]': 2.11338,
    'quart (imperial) [qt]': .879877,
    'quart (US) [qt]': 1.05669,
    'quartarius': 1 / .13625,
    'sai [才]': 1331 / 2.401,
    'seah [סאה]': 1 / 12.12,
    'sextarius': 1 / .545,
    'shaku [勺]': 1331 / 24.01,
    'shipping ton (imperial)': 1 / 1189.307556864,
    'shipping ton (US)': 1 / 1132.67386368,
    'shō [升]': 1331 / 2401,
    'tablespoon (imperial) [tbsp]': 56.3121,
    'tablespoon (US) [tbsp]': 1 / .0148,
    'teaspoon (imperial) [tsp]': 168.936,
    'teaspoon (US) [tsp]': 202.884,
    'to [斗]': 1331 / 24010,
    'tun': 1 / 981.95544,
    'urna': 1 / 13.08,
    'yard of ale': 1 / 1.4206537,
  },
};
