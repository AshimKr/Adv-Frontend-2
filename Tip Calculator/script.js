const input = document.getElementById('inpAmount')
const percentage = document.getElementById('percent');
const tipAmount = document.getElementById('tipAmnt');
const TotalBill = document.getElementById('TotalBill');


let inputAmount = null;
let inputPercent = null;


function getInput(){
    inputAmount = input.value;
}

percentage.addEventListener('change',()=>{
    inputPercent = percentage.value;
    document.getElementById('tipValue').innerText = inputPercent

    let tip = inputAmount * inputPercent/100;
    tipAmount.value = tip;

    TotalBill.value = (Number(inputAmount) + Number(tip)).toFixed(2)



})