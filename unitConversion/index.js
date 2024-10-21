/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input-el');
const convertBtn = document.getElementById('convert-btn');
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    let feet = (inputEl.value * 3.281).toFixed(2)
    let gallon = (inputEl.value * 0.264).toFixed(2)
    let pound = (inputEl.value * 2.204).toFixed(2)
    let meter = (inputEl.value / 3.281).toFixed(2)
    let liter = (inputEl.value / 0.264).toFixed(2)
    let kilo = (inputEl.value / 2.204).toFixed(2)
    
    lengthEl.innerHTML = `<p style="margin: 0;" id="length-el"> ${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet =  ${meter} meters</p>`
    volumeEl.innerHTML = `<p style="margin: 0;" id="volume-el"> ${inputEl.value} liters = ${gallon} gallons | ${inputEl.value} gallons = ${liter} liters</p>`
    massEl.innerHTML = `<p style="margin: 0;" id="mass-el"> ${inputEl.value} kilos = ${pound} pounds | ${inputEl.value} pounds = ${kilo} kilos</p>`
})