'use strict';

function repo_init(){
    core_repo_init({
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

        unittable += '<tr><td><input id=' + type + '-value>*10^<input id=' + type + '-input-power style="width:40px" value=0><br><select id=' + type + '-input>' + options + '</select>'
          + '<td><input id=' + type + ' type=button value="' + type + '">'
          + '<td><input id=' + type + '-result readonly>*10^<input id=' + type + '-output-power style="width:40px" value=0><br><select id=' + type + '-output>' + options + '</select>';
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
        document.getElementById(type).onclick = function(){
            reverse(this.id);
        }
    }
}
