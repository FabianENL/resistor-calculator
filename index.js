band1 = 0
band2 = 0
band3 = 0
multiplier = 0
multiplierValue = 0
tolerance = 0

colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "purple", "grey", "white", "gold", "silver"]
hexcolors = ["#0d111a", "#57100f", "#e00218", "#eb8f3f", "#e8e000", "#009c1d", "#00afd6", "#4f0770", "#46494a", "#e0ddda", "#594e07", "#91908e"]
toleranceColors = ["#57100f", "#e00218", "#009c1d", "#00afd6", "#4f0770", "#46494a", "#594e07", "#91908e"]
toleranceValues = [1, 2, 0.5, 0.25, 0.1, 0.05, 5, 10]


function update(up){
    if(up){
        if(multiplier == 8 || multiplier == 9) {multiplier = 10}
    } else{
        if(multiplier == 8 || multiplier == 9) {multiplier = 7}
    }

    multiplierValue = multiplier
    if(multiplier == 10) {multiplierValue = 0.1}
    if(multiplier == 11) {multiplierValue = 0.01}
}

function updateColors(){
    document.getElementById("1").style.backgroundColor = hexcolors[band1]
    document.getElementById("2").style.backgroundColor = hexcolors[band2]
    document.getElementById("3").style.backgroundColor = hexcolors[band3]
    document.getElementById("4").style.backgroundColor = hexcolors[multiplier]
    document.getElementById("5").style.backgroundColor = toleranceColors[tolerance]
}

function calculate(){
    value = 0;

    value += band1 * 100;
    value += band2 * 10;
    value += band3;

    console.log(multiplierValue)

    if(multiplierValue == 0.1){
        value = value / 10
    }else if(multiplierValue == 0.01){
        value = value / 100
    }else{
        value *= Math.pow(10, multiplier)
    }

    if(value >= 1000000){
        document.getElementById("result").innerHTML = (value / 1000000) + "MΩ ± " + toleranceValues[tolerance] + "%"
    } else if (value >= 1000) {
        document.getElementById("result").innerHTML = (value / 1000) + "KΩ ± " + toleranceValues[tolerance] + "%"
    } else{
        document.getElementById("result").innerHTML = value + "Ω ± " + toleranceValues[tolerance] + "%"

    }

}

function up(x){
    
    switch(x){
        case 1:
            band1 = band1 + 1 > 9 ? 0 : band1 + 1;
            break;
        case 2:
            band2 = band2 + 1 > 9 ? 0 : band2 + 1;
            break;
        case 3:
            band3 = band3+ 1 > 9 ? 0 : band3 + 1;
            break;
        case 4:
            multiplier = multiplier + 1 > 11 ? 0 : multiplier + 1;
            break;
        case 5:
            tolerance = tolerance + 1 > 7 ? 0 : tolerance + 1;
            break;
    }
    update(true);
    updateColors();
    calculate();
}

function down(x){
    switch(x){
        case 1:
            band1 = band1 - 1 < 0 ? 9 : band1 - 1;
            break;
        case 2:
            band2 = band2 - 1 < 0 ? 9 : band2 - 1;
            break;
        case 3:
            band3 = band3 - 1 < 0 ? 9 : band3 - 1;
            break;
        case 4:
            multiplier = multiplier - 1 < 0 ? 11 : multiplier - 1;
            break;
        case 5:
            tolerance = tolerance - 1 < 0 ? 7 : tolerance - 1;
            break;
    }
    update(false);
    updateColors();
    calculate();
}