letno1 = 10;
letno2 = 20;
letno3 = 30;

let consume = prompt("How much did you consume your electricity unit in kWh?");
consume = Number(consume);

if (consume <= 80 && consume > 50) {
document.writeln("consume"+ consume);
document.writeln("cost per unit"+ no1);
document.writeln("total cost"+ consume*no1);
alert(`Your total electricity bill is: ${(consume * no1).toFixed(2)} currency units.`);
}

 
else if (consume <= 150 && consume > 80) {
    document.writeln("consume"+ consume);
    document.writeln("cost per unit"+ no2);
    document.writeln("total cost"+ consume*no2);
    alert(`Your total electricity bill is: ${(consume * no2).toFixed(2)} currency units.`);
}

else if (consume > 150) {
    document.writeln("consume"+ consume);
    document.writeln("cost per unit"+ no3);
    document.writeln("total cost"+ consume*no3);
    alert(`Your total electricity bill is: ${(consume * no3).toFixed(2)} currency units.`);
}

document.writeln("Thank you for using our electricity bill calculator!");