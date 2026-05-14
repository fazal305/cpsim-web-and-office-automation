const clock = document.getElementById("clock");
const toggleButton = document.getElementById("toggleFormat");

let is12HourFormat = false;

function updateClock() {
    const now = new Date(); 

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = "";

    if (is12HourFormat) {
        ampm = hours >= 12 ? " PM" : " AM";

        hours = hours % 12;
        hours = hours ? hours : 12; 
    }

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Display time
    clock.textContent = `${hours}:${minutes}:${seconds}${ampm}`;
}

setInterval(updateClock, 1000);

updateClock();

toggleButton.addEventListener("click", () => {
    is12HourFormat = !is12HourFormat;

    if (is12HourFormat) {
        toggleButton.textContent = "Switch to 24-hour";
    } else {
        toggleButton.textContent = "Switch to 12-hour";
    }
});