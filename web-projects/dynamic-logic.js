const tableBody = document.getElementById("mathResultTable").querySelector('tbody');
const title = document.getElementById("tableTitle");
let tableNum = prompt("Which number's table do you want to create?");
title.textContent = `Multiplication Table of ${tableNum}`;
let userinput = prompt(`Enter 1 to see ${tableNum} * 1:`);

for (let no = 1; no <= 10; no++) {
    do {
        if (userinput != no) {
            userinput = prompt(`Please enter '${no}' to unlock the next line of the ${tableNum} table:`);
        }
    } while (userinput != no);
    let result = tableNum * no;
    let equation = `${tableNum} * ${no}`;
    let row = tableBody.insertRow();
    row.insertCell(0).textContent = equation;
    row.insertCell(1).textContent = result;
    if (no < 10) {
        userinput = prompt(`Correct! Now enter ${no + 1}:`);
    }
}

alert(`Table of ${tableNum} is now complete!`);
