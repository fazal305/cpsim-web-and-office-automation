
const ON_IMG = "bulb_on.jpg"; 
const OFF_IMG = "bulb_off.jpg";


let clickCount = 0; 
const MAX_CLICKS = 10; 
function turnOn() {
    let bulbElement = document.getElementById('bulb');

    if (bulbElement.src.includes(ON_IMG)) {
        console.log("Terminal: The bulb is already ON.");
    } else {
        bulbElement.src = ON_IMG;
        clickCount++;
        
      
        if (clickCount >= MAX_CLICKS) {
            console.log("Terminal Log: WARNING! High usage. Clicks: " + clickCount);
        } else {
            console.log("Terminal Log: Light Activated. Clicks: " + clickCount);
        }
    }
}

function turnOff() {
    let bulbElement = document.getElementById('bulb');

   
    if (bulbElement.src.includes(OFF_IMG)) {
        console.log("Terminal: The bulb is already OFF.");
    } else {
        bulbElement.src = OFF_IMG;
        clickCount++;
        
        console.log("Terminal Log: Light Deactivated. Clicks: " + clickCount);
    }
}


console.log("--- System Initialized ---");
console.log("Ready for input...");
