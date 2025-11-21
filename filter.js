function valueChanged() {
    let capacitance = document.getElementById("capacitance_input").value ? parseFloat(document.getElementById("capacitance_input").value) : 1;
    let capacitanceMultiplier = parseFloat(document.getElementById("capacitance_multiplier").value);
    let resistance = document.getElementById("resistance_input").value ? parseFloat(document.getElementById("resistance_input").value) : 1;
    let resistanceMultiplier = parseFloat(document.getElementById("resistance_multiplier").value);
    
    let realCapacitance = capacitance * capacitanceMultiplier; 
    let realResistance = resistance * resistanceMultiplier;
    console.log("cap " + realCapacitance);
    console.log("res " + realResistance);

    cutoffrad = 1 / (realResistance * realCapacitance);
    cuttoffreq = 1 / (2 * Math.PI * realResistance * realCapacitance);
    console.log("cutoff rad " + cutoffrad);
    console.log("cutoff freq " + cuttoffreq);

    document.getElementById("result").innerHTML = `${cuttoffreq.toFixed(2)} Hz (${cutoffrad.toFixed(2)} rad/s)`;
}