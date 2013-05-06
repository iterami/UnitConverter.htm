function calculate_area(){
    verify_decimals();
    i=parseFloat(get('area-value').value);
    if(isNaN(i)){
        i=get('area-value').value=0
    }
    get('area-result').value=get('area-left').value==get('area-right').value?i:[
        [
            0,                  /*degree to degree, not used*/
            i*10/9,             /*degree to gradian*/
            i*(Math.PI/180),    /*degree to radian*/
            i/360               /*degree to turn*/
        ][get('area-right').value],
        [
            i*9/10,             /*gradian to degree*/
            0,                  /*gradian to gradian, not used*/
            i*Math.PI/200,      /*gradian to radian*/
            i/400               /*gradian to turn*/
        ][get('area-right').value],
        [
            i*(180/Math.PI),    /*radian to degree*/
            i*200/Math.PI,      /*radian to gradian*/
            0,                  /*radian to radian, not used*/
            i/(2*Math.PI)       /*radian to turn*/
        ][get('area-right').value],
        [
            i*360,              /*turn to degree*/
            i*400,              /*turn to gradian*/
            i*(2*Math.PI),      /*turn to radian*/
            0                   /*turn to turn, not used*/
        ][get('area-right').value]
    ][get('area-left').value];
    if(get('area-result').value%1!=0){
        get('area-result').value=parseFloat(get('area-result').value).toFixed(get('decimals').value)
    }
}
function calculate_distance(){
    verify_decimals();
    i=parseFloat(get('distance-value').value);
    if(isNaN(i)){
        i=get('distance-value').value=0
    }
    get('distance-result').value=get('distance-left').value==get('distance-right').value?i:[
        [
            0,              /*centimetre to centimetre, not used*/
            i/30.48,        /*centimetre to foot*/
            i/2.54,         /*centimetre to inch*/
            i/1e5,          /*centimetre to kilometre*/
            i/1e3,          /*centimetre to metre*/
            i/160934.4,     /*centimetre to mile*/
            i*10,           /*centimetre to millimetre*/
            i/91.44         /*centimetre to yard*/
        ][get('distance-right').value],
        [
            i*30.48,        /*foot to centimetre*/
            0,              /*foot to foot, not used*/
            i*12,           /*foot to inch*/
            i/3280.839895,  /*foot to kilometre*/
            i/3.280839895,  /*foot to metre*/
            i/5280,         /*foot to mile*/
            i*304.8,        /*foot to millimetre*/
            i/3             /*foot to yard*/
        ][get('distance-right').value],
        [
            i*2.54,         /*inch to centimetre*/
            i/12,           /*inch to foot*/
            0,              /*inch to inch, not used*/
            i/39370.1,      /*inch to kilometre*/
            i/39.3701,      /*inch to metre*/
            i/63360,        /*inch to mile*/
            i*25.4,         /*inch to millimetre*/
            i/36            /*inch to yard*/
        ][get('distance-right').value],
        [
            i*1e5,          /*kilometre to centimetre*/
            i*3280.839895,  /*kilometre to foot*/
            i*39370.1,      /*kilometre to inch*/
            0,              /*kilometre to kilometre, not used*/
            i*1e3,          /*kilometre to metre*/
            i/1.609344,     /*kilometre to mile*/
            i*1e6,          /*kilometre to millimetre*/
            i/1093.61       /*kilometre to yard*/
        ][get('distance-right').value],
        [
            i*100,          /*metre to centimetre*/
            i*3.280839895,  /*metre to foot*/
            i*39.3701,      /*metre to inch*/
            i/1e3,          /*metre to kilometre*/
            0,              /*metre to metre, not used*/
            i/1609.344,     /*metre to mile*/
            i*1e3,          /*metre to millimetre*/
            i*1.09361       /*metre to yard*/
        ][get('distance-right').value],
        [
            i*160934.4,     /*mile to centimetre*/
            i*5280,         /*mile to foot*/
            i*63360,        /*mile to inch*/
            i*1.609344,     /*mile to kilometre*/
            i*1609.344,     /*mile to metre*/
            0,              /*mile to mile, not used*/
            i*1609344,      /*mile to millimetre*/
            i*1760          /*mile to yard*/
        ][get('distance-right').value],
        [
            i/10,           /*millimetre to centimetre*/
            i/304.8,        /*millimetre to foot*/
            i/25.4,         /*millimetre to inch*/
            i/1e6,          /*millimetre to kilometre*/
            i/1e3,          /*millimetre to metre*/
            i/1609344,      /*millimetre to mile*/
            0,              /*millimetre to millimetre, not used*/
            i/914.4         /*millimetre to yard*/
        ][get('distance-right').value],
        [
            i*91.44,        /*yard to centimetre*/
            i*3,            /*yard to foot*/
            i*36,           /*yard to inch*/
            i/1093.61,      /*yard to kilometre*/
            i/1.09361,      /*yard to metre*/
            i/1760,         /*yard to mile*/
            i*914.4,        /*yard to millimetre*/
            0               /*yard to yard, not used*/
        ][get('distance-right').value]
    ][get('distance-left').value];
    if(get('distance-result').value%1!=0){
        get('distance-result').value=parseFloat(get('distance-result').value).toFixed(get('decimals').value)
    }
}
function calculate_hex(){
    if(get('red').value.length<1){
        get('red').value=0
    }
    if(get('green').value.length<1){
        get('green').value=0
    }
    if(get('blue').value.length<1){
        get('blue').value=0
    }
    var r=Math.max(0,Math.min(parseInt(get('red').value,10),255));
    var g=Math.max(0,Math.min(parseInt(get('green').value,10),255));
    var b=Math.max(0,Math.min(parseInt(get('blue').value,10),255));
    get('hex').value=gethex((r-r%16)/16)+gethex(r%16)+''+gethex((g-g%16)/16)+gethex(g%16)+''+gethex((b-b%16)/16)+gethex(b%16)
}
function calculate_liquid(){
    verify_decimals();
    i=parseFloat(get('liquid-value').value);
    if(isNaN(i)){
        i=get('liquid-value').value=0
    }
    get('liquid-result').value=get('liquid-left').value==get('liquid-right').value?i:[
        [
            0,              /*centilitre to centilitre, not used*/
            i/2.84130742,   /*centilitre to imperial fluid ounce*/
            i/454.609188,   /*centilitre to imperial gallon*/
            i/56.8261485,   /*centilitre to imperial pint*/
            i/113.652297,   /*centilitre to imperial quart*/
            i/1e5,          /*centilitre to kilolitre*/
            i/100,          /*centilitre to litre*/
            i*10,           /*centilitre to millilitre*/
            i/2.95735296,   /*centilitre to US fluid ounce*/
            i/378.541178,   /*centilitre to US gallon*/
            i/47.3176473,   /*centilitre to US pint*/
            i/94.6352946    /*centilitre to US quart*/
        ][get('liquid-right').value],
        [
            i*2.84130742,   /*imperial fluid ounce to centilitre*/
            0,              /*imperial fluid ounce to imperial fluid ounce, not used*/
            i/160,          /*imperial fluid ounce to imperial gallon*/
            i/20,           /*imperial fluid ounce to imperial pint*/
            i/40,           /*imperial fluid ounce to imperial quart*/
            i/35195.0652,   /*imperial fluid ounce to kilolitre*/
            i/35.1950652,   /*imperial fluid ounce to litre*/
            i*28.4130625,   /*imperial fluid ounce to millilitre*/
            i/1.04084,      /*imperial fluid ounce to US fluid ounce*/
            i/153.722,      /*imperial fluid ounce to US gallon*/
            i/16.6535,      /*imperial fluid ounce to US pint*/
            i/33.307        /*imperial fluid ounce to US quart*/
        ][get('liquid-right').value],
        [
            i*454.609188,   /*imperial gallon to centilitre*/
            i*160,          /*imperial gallon to imperial fluid ounce*/
            0,              /*imperial gallon to imperial gallon, not used*/
            i*8,            /*imperial gallon to imperial pint*/
            i*4,            /*imperial gallon to imperial quart*/
            i/219.969157,   /*imperial gallon to kilolitre*/
            i*4.54609188,   /*imperial gallon to litre*/
            i*4546.09188,   /*imperial gallon to millilitre*/
            i*153.722,      /*imperial gallon to US fluid ounce*/
            i*1.20095,      /*imperial gallon to US gallon*/
            i*9.6076,       /*imperial gallon to US pint*/
            i*4.8038        /*imperial gallon to US quart*/
        ][get('liquid-right').value],
        [
            i*56.8261485,   /*imperial pint to centilitre*/
            i*20,           /*imperial pint to imperial fluid ounce*/
            i/8,            /*imperial pint to imperial gallon*/
            0,              /*imperial pint to imperial pint, not used*/
            i/2,            /*imperial pint to imperial quart*/
            i/1759.75326,   /*imperial pint to kilolitre*/
            i/1.75975326,   /*imperial pint to litre*/
            i*568.261485,   /*imperial pint to millilitre*/
            i*19.2152,      /*imperial pint to US fluid ounce*/
            i/6.66139,      /*imperial pint to US gallon*/
            i*1.20095,      /*imperial pint to US pint*/
            i/1.66535       /*imperial pint to US quart*/
        ][get('liquid-right').value],
        [
            i*113.652297,   /*imperial quart to centilitre*/
            i*40,           /*imperial quart to imperial fluid ounce*/
            i/4,            /*imperial quart to imperial gallon*/
            i*2,            /*imperial quart to imperial pint*/
            0,              /*imperial quart to imperial quart, not used*/
            i/879.87663,    /*imperial quart to kilolitre*/
            i*1.1365225,    /*imperial quart to litre*/
            i*1136.5225,    /*imperial quart to millilitre*/
            i*38.4304,      /*imperial quart to US fluid ounce*/
            i*.300238,      /*imperial quart to US gallon*/
            i*2.4019,       /*imperial quart to US pint*/
            i*1.20095       /*imperial quart to US quart*/
        ][get('liquid-right').value],
        [
            i*1e5,          /*kilolitre to centilitre*/
            i*35195.0652,   /*kilolitre to imperial fluid ounce*/
            i*219.969157,   /*kilolitre to imperial gallon*/
            i*1759.75326,   /*kilolitre to imperial pint*/
            i*879.87663,    /*kilolitre to imperial quart*/
            0,              /*kilolitre to kilolitre, not used*/
            i*1e3,          /*kilolitre to litre*/
            i*1e6,          /*kilolitre to millilitre*/
            i*33814.0227,   /*kilolitre to US fluid ounce*/
            i*264.172052,   /*kilolitre to US gallon*/
            i*2113.37642,   /*kilolitre to US pint*/
            i*1056.68821    /*kilolitre to US quart*/
        ][get('liquid-right').value],
        [
            i*100,          /*litre to centilitre*/
            i*35.1950652,   /*litre to imperial fluid ounce*/
            i/4.546094188,  /*litre to imperial gallon*/
            i*1.75975326,   /*litre to imperial pint*/
            i*.879877,      /*litre to imperial quart*/
            i/1e3,          /*litre to kilolitre*/
            0,              /*litre to litre, not used*/
            i*1e3,          /*litre to millilitre*/
            i*33.8140227,   /*litre to US fluid ounce*/
            i/3.785411784,  /*litre to US gallon*/
            i*2.11338,      /*litre to US pint*/
            i*1.05669       /*litre to US quart*/
        ][get('liquid-right').value],
        [
            i/10,           /*millilitre to centilitre*/
            i/284.130742,   /*millilitre to imperial fluid ounce*/
            i/45460.9188,   /*millilitre to imperial gallon*/
            i/568.261485,   /*millilitre to imperial pint*/
            i*.00087987663, /*millilitre to imperial quart*/
            i/1e6,          /*millilitre to kilolitre*/
            i/1e3,          /*millilitre to litre*/
            0,              /*millilitre to millilitre, not used*/
            i/295.735296,   /*millilitre to US fluid ounce*/
            i/37854.11784,  /*millilitre to US gallon*/
            i/473.176473,   /*millilitre to US pint*/
            i/946.352946    /*millilitre to US quart*/
        ][get('liquid-right').value],
        [
            i*2.95735296,   /*US fluid ounce to centilitre*/
            i*1.04084,      /*US fluid ounce to imperial fluid ounce*/
            i/153.722,      /*US fluid ounce to imperial gallon*/
            i/19.2152,      /*US fluid ounce to imperial pint*/
            i/38.4304,      /*US fluid ounce to imperial quart*/
            i/33814.0227,   /*US fluid ounce to kilolitre*/
            i/33.8140227,   /*US fluid ounce to litre*/
            i*29.5735296,   /*US fluid ounce to millilitre*/
            0,              /*US fluid ounce to US fluid ounce, not used*/
            i/128,          /*US fluid ounce to US gallon*/
            i/16,           /*US fluid ounce to US pint*/
            i/32            /*US fluid ounce to US quart*/
        ][get('liquid-right').value],
        [
            i*378.541178,   /*US gallon to centilitre*/
            i*133.228,      /*US gallon to imperial fluid ounce*/
            i/1.20095,      /*US gallon to imperial gallon*/
            i*6.66139,      /*US gallon to imperial pint*/
            i/.300238,      /*US gallon to imperial quart*/
            i/264.172052,   /*US gallon to kilolitre*/
            i*3.785411784,  /*US gallon to litre*/
            i*3785.411784,  /*US gallon to millilitre*/
            i*128,          /*US gallon to US fluid ounce*/
            0,              /*US gallon to US gallon, not used*/
            i*8,            /*US gallon to US pint*/
            i*4             /*US gallon to US quart*/
        ][get('liquid-right').value],
        [
            i*47.3176473,   /*US pint to centilitre*/
            i*16.6535,      /*US pint to imperial fluid ounce*/
            i/9.6076,       /*US pint to imperial gallon*/
            i/1.20095,      /*US pint to imperial pint*/
            i/2.4019,       /*US pint to imperial quart*/
            i/2113.37642,   /*US pint to kilolitre*/
            i/2.11338,      /*US pint to litre*/
            i*473.176473,   /*US pint to millilitre*/
            i*16,           /*US pint to US fluid ounce*/
            i/8,            /*US pint to US gallon*/
            0,              /*US pint to US pint, not used*/
            i/2             /*US pint to US quart*/
        ][get('liquid-right').value],
        [
            i*94.6352946,   /*US quart to centilitre*/
            i*33.307,       /*US quart to imperial fluid ounce*/
            i/4.8038,       /*US quart to imperial gallon*/
            i*1.66535,      /*US quart to imperial pint*/
            i/1.20095,      /*US quart to imperial quart*/
            i/1056.68821,   /*US quart to kilolitre*/
            i/1.05669,      /*US quart to litre*/
            i*946.352946,   /*US quart to millilitre*/
            i*32,           /*US quart to US fluid ounce*/
            i/4,            /*US quart to US gallon*/
            i*2,            /*US quart to US pint*/
            0               /*US quart to US quart, not used*/
        ][get('liquid-right').value]
    ][get('liquid-left').value];
    if(get('liquid-result').value%1!=0){
        get('liquid-result').value=parseFloat(get('liquid-result').value).toFixed(get('decimals').value)
    }
}
function calculate_mass(){
    verify_decimals();
    i=parseFloat(get('mass-value').value);
    if(isNaN(i)){
        i=get('mass-value').value=0
    }
    get('mass-result').value=get('mass-left').value==get('mass-right').value?i:[
        [
            0,          /*centigram to centigram, not used*/
            i/1e3,      /*centigram to gram*/
            i/1e5,      /*centigram to kilogram*/
            i/10,       /*centigram to milligram*/
            i/28349.5,  /*centigram to ounce*/
            i/453592    /*centigram to pound*/
        ][get('mass-right').value],
        [
            i*1e3,      /*gram to centigram*/
            0,          /*gram to gram, not used*/
            i/1e3,      /*gram to kilogram*/
            i*1e3,      /*gram to milligram*/
            i/28.3495,  /*gram to ounce*/
            i/453.592   /*gram to pound*/
        ][get('mass-right').value],
        [
            i*1e5,      /*kilogram to centigram*/
            i*1e3,      /*kilogram to gram*/
            0,          /*kilogram to kilogram, not used*/
            i*1e6,      /*kilogram to milligram*/
            i*.0283495, /*kilogram to ounce*/
            i/.453592   /*kilogram to pound*/
        ][get('mass-right').value],
        [
            i/10,       /*milligram to centigram*/
            i/1e3,      /*milligram to gram*/
            i/1e6,      /*milligram to kilogram*/
            0,          /*milligram to milligram, not used*/
            i/28349.5,  /*milligram to ounce*/
            i/453592    /*milligram to pound*/
        ][get('mass-right').value],
        [
            i*28349.5,  /*ounce to centigram*/
            i*28.3495,  /*ounce to gram*/
            i/35.274,   /*ounce to kilogram*/
            i*28349.5,  /*ounce to milligram*/
            0,          /*ounce to ounce, not used*/
            i/16        /*ounce to pound*/
        ][get('mass-right').value],
        [
            i*453592,   /*pound to centigram*/
            i*453.592,  /*pound to gram*/
            i/2.20462,  /*pound to kilogram*/
            i*453592,   /*pound to milligram*/
            i*16,       /*pound to ounce*/
            0           /*pound to pound, not used*/
        ][get('mass-right').value]
    ][get('mass-left').value];
    if(get('mass-result').value%1!=0){
        get('mass-result').value=parseFloat(get('mass-result').value).toFixed(get('decimals').value)
    }
}
function calculate_rgb(){
    if(get('hex-torgb').value.length<1){
        get('hex-torgb').value='000'
    }
    i=get('hex-torgb').value.length==3;
    get('rgb').value=parseInt(i?get('hex-torgb').value.substring(0,1)+''+get('hex-torgb').value.substring(0,1):get('hex-torgb').value.substring(0,2),16)+', '+parseInt(i?get('hex-torgb').value.substring(1,2)+''+get('hex-torgb').value.substring(1,2):get('hex-torgb').value.substring(2,4),16)+', '+parseInt(i?get('hex-torgb').value.substring(2,3)+''+get('hex-torgb').value.substring(2,3):get('hex-torgb').value.substring(4,6),16)
}
function calculate_speed(){
    verify_decimals();
    i=parseFloat(get('speed-value').value);
    if(isNaN(i)){
        i=get('speed-value').value=0
    }
    get('speed-result').value=get('speed-left').value==get('speed-right').value?i:[
        [
            0,             /*feet per second to feet per second, not usede*/
            i*1.09728,     /*feet per second to kilometres per hour*/
            i*.592484,     /*feet per second to knots*/
            i/3.28084,     /*feet per second to metres per second*/
            i*.681818      /*feet per second to miles per hour*/
        ][get('speed-right').value],
        [
            i/1.09728,     /*kilometres per hour to feet per second*/
            0,             /*kilometres per hour to kilometres per hour, not used*/
            i/1.852,       /*kilometres per hour to knots*/
            i/3.6,         /*kilometres per hour to metres per second*/
            i/1.60934      /*kilometres per hour to miles per hour*/
        ][get('speed-right').value],
        [
            i/.592484,     /*knots to feet per second*/
            i*1.852,       /*knots to kilometres per hour*/
            0,             /*knots to knots, not used*/
            i/1.94384449,  /*knots to metres per second*/
            i*1.15077945   /*knots to miles per hour*/
        ][get('speed-right').value],
        [
            i*3.28084,     /*metres per second to feet per second*/
            i*3.6,         /*metres per second to kilometres per hour*/
            i*1.94384449,  /*metres per second to knots*/
            0,             /*metres per second to metres per second, not used*/
            i*2.23694      /*metres per second to miles per hour*/
        ][get('speed-right').value],
        [
            i/.681818,     /*miles per hour to feet per second*/
            i*1.60934,     /*miles per hour to kilometres per hour*/
            i/1.15077945,  /*miles per hour to knots*/
            i/2.23694,     /*miles per hour to metres per second*/
            0              /*miles per hour to miles per hour, not used*/
        ][get('speed-right').value]
    ][get('speed-left').value];
    if(get('speed-result').value%1!=0){
        get('speed-result').value=parseFloat(get('speed-result').value).toFixed(get('decimals').value)
    }
}
function calculate_temperature(){
    verify_decimals();
    i=parseFloat(get('temperature-value').value);
    if(isNaN(i)){
        i=get('temperature-value').value=0
    }
    get('temperature-result').value=get('temperature-left').value==get('temperature-right').value?i:[
        [
            0,                    /*Celsius to Celsius, not used*/
            (100-i)*1.5,          /*Celsius to Delisle*/
            i*1.8+32,             /*Celsius to Fahrenheit*/
            i+273.15,             /*Celsius to Kelvin*/
            i*.33,                /*Celsius to Newton*/
            (i+273.15)*1.8,       /*Celsius to Rankine*/
            i/1.25,               /*Celsius to Réaumur*/
            i*21/40+7.5           /*Celsius to Rømer*/
        ][get('temperature-right').value],
        [
            100-i/1.5,            /*Delisle to Celsius*/
            0,                    /*Delisle to Delisle, not used*/
            212-i*1.2,            /*Delisle to Fahrenheit*/
            373.15-i/1.5,         /*Delisle to Kelvin*/
            33-(i*11/50),         /*Delisle to Newton*/
            671.67-i*1.2,         /*Delisle to Rankine*/
            80-(i*8/15),          /*Delisle to Réaumur*/
            60-(i*7/20)           /*Delisle to Rømer*/
        ][get('temperature-right').value],
        [
            (i-32)/1.8,           /*Fahrenheit to Celsius*/
            (212-i)/1.2,          /*Fahrenheit to Delisle*/
            0,                    /*Fahrenheit to Fahrenheit, not used*/
            (i-32)/1.8+273.15,    /*Fahrenheit to Kelvin*/
            (i-32)*11/60,         /*Fahrenheit to Newton*/
            i+459.67,             /*Fahrenheit to Rankine*/
            (i-32)*4/9,           /*Fahrenheit to Réaumur*/
            (i-32)*7/24+7.5       /*Fahrenheit to Rømer*/
        ][get('temperature-right').value],
        [
            i-273.15,             /*Kelvin to Celsius*/
            (373.15-i)*1.5,       /*Kelvin to Delisle*/
            (i-273.15)*1.8+32,    /*Kelvin to Fahrenheit*/
            0,                    /*Kelvin to Kelvin, not used*/
            (i-273.15)*.33,       /*Kelvin to Newton*/
            i*1.8,                /*Kelvin to Rankine*/
            (i-273.15)/1.25,      /*Kelvin to Réaumur*/
            (i-273.15)*21/40+7.5  /*Kelvin to Rømer*/
        ][get('temperature-right').value],
        [
            i/.33,                /*Newton to Celsius*/
            (33-i)*50/11,         /*Newton to Delisle*/
            i*60/11+32,           /*Newton to Fahrenheit*/
            i/.33+273.15,         /*Newton to Kelvin*/
            0,                    /*Newton to Newton, not used*/
            i*60/11+491.67,       /*Newton to Rankine*/
            i*80/33,              /*Newton to Réaumur*/
            i*35/22+7.5           /*Newton to Rømer*/
        ][get('temperature-right').value],
        [
            (i-491.67)/1.8,       /*Rankine to Celsius*/
            (671.67-i)/1.2,       /*Rankine to Delisle*/
            i-459.67,             /*Rankine to Fahrenheit*/
            i/1.8,                /*Rankine to Kelvin*/
            (i-491.67)*11/60,     /*Rankine to Newton*/
            0,                    /*Rankine to Rankine, not used*/
            (i-491.67)*4/9,       /*Rankine to Réaumur*/
            (i-491.67)*7/24+7.5   /*Rankine to Rømer*/
        ][get('temperature-right').value],
        [
            i*1.25,               /*Réaumur to Celsius*/
            (80-i)*15/8,          /*Réaumur to Delisle*/
            i*9/4+32,             /*Réaumur to Fahrenheit*/
            i*1.25+273.15,        /*Réaumur to Kelvin*/
            i*80/33,              /*Réaumur to Newton*/
            i*9/4+491.67,         /*Réaumur to Rankine*/
            0,                    /*Réaumur to Réaumur, not used*/
            i*21/32+7.5           /*Réaumur to Rømer*/
        ][get('temperature-right').value],
        [
            (i-7.5)*40/21,        /*Rømer to Celsius*/
            (60-i)*20/7,          /*Rømer to Delisle*/
            (i-7.5)*24/7+32,      /*Rømer to Fahrenheit*/
            (i-7.5)*40/21+273.15, /*Rømer to Kelvin*/
            (i-7.5)*22/35,        /*Rømer to Newton*/
            (i-7.5)*24/7+491.67,  /*Rømer to Rankine*/
            (i-7.5)*32/21,        /*Rømer to Réaumur*/
            0                     /*Rømer to Rømer, not used*/
        ][get('temperature-right').value]
    ][get('temperature-left').value];
    if(get('temperature-result').value%1!=0){
        get('temperature-result').value=parseFloat(get('temperature-result').value).toFixed(get('decimals').value)
    }
}
function calculate_time(){
    verify_decimals();
    i=parseFloat(get('time-value').value);
    if(isNaN(i)){
        i=get('time-value').value=0
    }
    get('time-result').value=get('time-left').value==get('time-right').value?i:[
        [
            0,                 /*day to day, not used*/
            i/14,              /*day to fortnight*/
            i*25920,           /*day to helek*/
            i*24,              /*day to hour*/
            i*1e3,             /*day to Internet Time*/
            i*.03660098822,    /*day to lunar day*/
            i/1.02749,         /*day to Martian solar day*/
            i/.03650462962,    /*day to microcentury*/
            i*1440,            /*day to minute*/
            i*86400,           /*day to second*/
            i/7,               /*day to week*/
            i/365.242          /*day to year*/
        ][get('time-right').value],
        [
            i*14,              /*fortnight to day*/
            0,                 /*fortnight to fortnight, not used*/
            i*362880,          /*fortnight to helek*/
            i*336,             /*fortnight to hour*/
            i*14000,           /*fortnight to Internet Time*/
            i/1.95154761905,   /*fortnight to lunar day*/
            i/.0733922321,     /*fortnight to Martian solar day*/
            i/.00260747354,    /*fortnight to microcentury*/
            i*20160,           /*fortnight to minute*/
            i*1209600,         /*fortnight to second*/
            i*2,               /*fortnight to week*/
            i/26.0887285       /*fortnight to year*/
        ][get('time-right').value],
        [
            i/25920,           /*helek to day*/
            i/362880,          /*helek to fortnight*/
            0,                 /*helek to helek, not used*/
            i/1080,            /*helek to hour*/
            i/25.920,          /*helek to Internet Time*/
            i/708177.6864,     /*helek to lunar day*/
            i/26632.5408,      /*helek to Martian solar day*/
            i/946.08,          /*helek to microcentury*/
            i/18,              /*helek to minute*/
            i/.3,              /*helek to second*/
            i/181440,          /*helek to week*/
            i/9467077.79       /*helek to year*/
        ][get('time-right').value],
        [
            i/24,              /*hour to day*/
            i/366,             /*hour to fortnight*/
            i*1080,            /*hour to helek*/
            0,                 /*hour to hour, not used*/
            i*41.666,          /*hour to Internet Time*/
            i/655.72,          /*hour to lunar day*/
            i/24.65979,        /*hour to Martian solar day*/
            i/.87611111111,    /*hour to microcentury*/
            i*60,              /*hour to minute*/
            i*3600,            /*hour to second*/
            i/168,             /*hour to week*/
            i/8765.81          /*hour to year*/
        ][get('time-right').value],
        [
            i/1e3,             /*Internet Time to day*/
            i/14000,           /*Internet Time to fortnight*/
            i*25.920,          /*Internet Time to helek*/
            i/41.666,          /*Internet Time to hour*/
            0,                 /*Internet Time to Internet Time, not used*/
            i/27312.04944,     /*Internet Time to lunar day*/
            i/1027.129064,     /*Internet Time to Martian solar day*/
            i/36.49178,        /*Internet Time to microcentury*/
            i/.6944,           /*Internet Time to minute*/
            i/.01157,          /*Internet Time to second*/
            i/700,             /*Internet Time to week*/
            i/365242           /*Internet Time to year*/
        ][get('time-right').value],
        [
            i/0.03660098822,   /*lunar day to day*/
            i*1.95154761905,   /*lunar day to fortnight*/
            i*708177.6864,     /*lunar day to helek*/
            i*655.72,          /*lunar day to hour*/
            i*27312.04944,     /*lunar day to Internet Time*/
            0,                 /*lunar day to lunar day, not used*/
            i/.0376071765,     /*lunar day to Martian solar day*/
            i*748.443880786,   /*lunar day to microcentury*/
            i*39343.2,         /*lunar day to minute*/
            i*2360592,         /*lunar day to second*/
            i*3.9030952381,    /*lunar day to week*/
            i*.0748042869      /*lunar day to year*/
        ][get('time-right').value],
        [
            i*1.02749,         /*Martian solar day to day*/
            i*.0733922321,     /*Martian solar day to fortnight*/
            i*26632.5408,      /*Martian solar day to helek*/
            i*24.65979,        /*Martian solar day to hour*/
            i*1027.129064,     /*Martian solar day to Internet Time*/
            i*.0376071765,     /*Martian solar day to lunar day*/
            0,                 /*Martian solar day to Martian solar day, not used*/
            i*28.1468611287,   /*Martian solar day to microcentury*/
            i*1479.59,         /*Martian solar day to minute*/
            i*88775.2,         /*Martian solar day to second*/
            i*.146784,         /*Martian solar day to week*/
            i*.00281318        /*Martian solar day to year*/
        ][get('time-right').value],
        [
            i*.03650462962,    /*microcentury to day*/
            i*.00260747354,    /*microcentury to fortnight*/
            i*946.08,          /*microcentury to helek*/
            i*.87611111111,    /*microcentury to hour*/
            i*36.49178,        /*microcentury to Internet Time*/
            i/748.443880786,   /*microcentury to lunar day*/
            i/28.1468611287,   /*microcentury to Martian solar day*/
            0,                 /*microcentury to microcentury, not used*/
            i/0.01902346227,   /*microcentury to minute*/
            i*3154,            /*microcentury to second*/
            i*.00521494708,    /*microcentury to week*/
            i*.000099946       /*microcentury to year*/
        ][get('time-right').value],
        [
            i/1440,            /*minute to day*/
            i/20160,           /*minute to fortnight*/
            i*18,              /*minute to helek*/
            i/60,              /*minute to hour*/
            i*.6944,           /*minute to Internet Time*/
            i/39343.2,         /*minute to lunar day*/
            i/1479.59,         /*minute to Martian solar day*/
            i*.01902346227,    /*minute to microcentury*/
            0,                 /*minute to minute, not used*/
            i*60,              /*minute to second*/
            i/10080,           /*minute to week*/
            i/525949           /*minute to year*/
        ][get('time-right').value],
        [
            i/86400,           /*second to day*/
            i/1209600,         /*second to fortnight*/
            i*.3,              /*second to helek*/
            i/3600,            /*second to hour*/
            i*.01157,          /*second to Internet Time*/
            i/2360592,         /*second to lunar day*/
            i/88775.2,         /*second to Martian solar day*/
            i/3154,            /*second to microcentury*/
            i/60,              /*second to minute*/
            0,                 /*second to second, not used*/
            i/604800,          /*second to week*/
            i/31556908.8       /*second to year*/
        ][get('time-right').value],
        [
            i*7,               /*week to day*/
            i/2,               /*week to fortnight*/
            i*181440,          /*week to helek*/
            i*168,             /*week to hour*/
            i*700,             /*week to Internet Time*/
            i/3.9030952381,    /*week to lunar day*/
            i/.146784,         /*week to Martian solar day*/
            i/.00521494708,    /*week to microcentury*/
            i*10080,           /*week to minute*/
            i*604800,          /*week to second*/
            0,                 /*week to week, not used*/
            i/52.1775          /*week to year*/
        ][get('time-right').value],
        [
            i*365.242,         /*year to day*/
            i*26.0887285,      /*year to fortnight*/
            i*9467077.79,      /*year to helek*/
            i*8765.81,         /*year to hour*/
            i*365242,          /*year to Internet Time*/
            i/.0748042869,     /*year to lunar day*/
            i/.00281318,       /*year to Martian solar day*/
            i/.000099946,      /*year to microcentury*/
            i*525949,          /*year to minute*/
            i*31556908.8,      /*year to second*/
            i*52.1775,         /*year to week*/
            0                  /*year to year, not used*/
        ][get('time-right').value]
    ][get('time-left').value];
    if(get('time-result').value%1!=0){
        get('time-result').value=parseFloat(get('time-result').value).toFixed(get('decimals').value)
    }
}
function get(i){
    return document.getElementById(i)
}
function gethex(i){
    return '0123456789abcdef'.charAt(i)
}
function verify_decimals(){
    if(isNaN(get('decimals').value)){
        get('decimals').value=5
    }else if(get('decimals').value<0){
        get('decimals').value=0
    }else if(get('decimals').value>20){
        get('decimals').value=20
    }
}

var i=0;

window.onkeydown=function(e){
    i=window.event?event:e;
    i=i.charCode?i.charCode:i.keyCode;
    if(i==13){/*Enter*/
        if(get('area-value').value.length>0){
            calculate_area()
        }
        if(get('distance-value').value.length>0){
            calculate_distance()
        }
        if(get('liquid-value').value.length>0){
            calculate_liquid()
        }
        if(get('mass-value').value.length>0){
            calculate_mass()
        }
        if(get('temperature-value').value.length>0){
            calculate_temperature()
        }
        if(get('time-value').value.length>0){
            calculate_time()
        }
        if(get('hex-torgb').value.length>0){
            hr()
        }
        if(get('red').value.length>0||get('green').value.length>0||get('blue').value.length>0){
            rh()
        }
    }
}
