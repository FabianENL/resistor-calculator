band1 = 0
band2 = 0
multiplier = 0



function updateNumbers(){
    document.getElementById("1").innerHTML = band1
    document.getElementById("2").innerHTML = band2
    document.getElementById("3").innerHTML = multiplier
}

function update(){
    updateNumbers();
    capacitance = ((band1*10 + band2) * Math.pow(10, multiplier))
    document.getElementById("result").innerHTML = `${capacitance}pF <br> ${capacitance / 1000}nF <br> ${capacitance / 1000000}uF`
}

// (1+1==2) ? "Pass" : "Fail"

function up(x){
    
    switch(x){
        case 1:
            band1 = band1 + 1 > 9 ? 0 : band1 + 1;
            break;
        case 2:
            band2 = band2 + 1 > 9 ? 0 : band2 + 1;
            break;
        case 3:
            multiplier = multiplier+ 1 > 9 ? 0 : multiplier + 1;
            break;
    }
    document.getElementById("capacitance_input").value = `${band1}${band2}${multiplier}`
    update();
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
            multiplier = multiplier - 1 < 0 ? 9 : multiplier - 1;
            break;
    }
    document.getElementById("capacitance_input").value = `${band1}${band2}${multiplier}`
    update();
}

function valueChanged(){
    let input = document.getElementById("capacitance_input").value;
    band1 = input[0] ? parseInt(input[0]) : 0
    band2 = input[1]? parseInt(input[1]) : 0
    multiplier = input[2] ? parseInt(input[2]) : 0
    update();
}