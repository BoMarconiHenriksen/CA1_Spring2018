
function btnplus() {
    document.Calculator.display.value += "+";
    document.Calculator.display.style.textAlign = "right";
}
function btnsubr() {
    document.Calculator.display.value += "-";
    document.Calculator.display.style.textAlign = "right";
}
function btnmult() {
    document.Calculator.display.value += "*";
    document.Calculator.display.style.textAlign = "right";
}
function btnMod() {
    document.Calculator.display.value += "%";
    document.Calculator.display.style.textAlign = "right";
}
function btndiv() {
    document.Calculator.display.value += "/";
    document.Calculator.display.style.textAlign = "right";
}
function btndot() {
    document.Calculator.display.value += ".";
    document.Calculator.display.style.textAlign = "right";
}
function btnclear() {
    document.Calculator.display.value = "";
    document.Calculator.display.style.textAlign = "right";
}