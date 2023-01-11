let myInput = ""
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    myInput = inputEl.value
    let feetConv = (myInput*3.281).toFixed(3)
    let meterConv = (myInput/3.281).toFixed(3)
    lengthEl.textContent = `${myInput} meters = ${feetConv} feet | ${myInput} feet = ${meterConv} meters` 
    
    let gallonConv = (myInput*0.264).toFixed(3)
    let literConv = (myInput/0.264).toFixed(3)
    volumeEl.textContent = `${myInput} liters = ${gallonConv} gallons | ${myInput} gallons = ${literConv} liters`
    
    let poundConv = (myInput*2.204).toFixed(3)
    let kilogramConv = (myInput/2.204).toFixed(3)
    massEl.textContent = `${myInput} kilograms = ${poundConv} pounds | ${myInput} pounds = ${kilogramConv} kilograms`
})
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/