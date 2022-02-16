"use strict";
const $ = selector => document.querySelector(selector);
const processEntries = () => { 
    const subTotal=parseFloat($("#subtotal").value);
    const taxRate=parseFloat($("#tax_rate").value);
    if(isNaN(subTotal) || subTotal < 0 || subTotal>10000){
    alert("Please enter a value betweeen 1 and 10,000");
    }
    else if(isNaN(taxRate) || subTotal <0 || taxRate>10000){
    alert("Please enter tax rate value betweeen 1-12");
    }
    else{
    const salesTax = parseFloat(subTotal * (taxRate /100));
    $("#sales_tax").value = salesTax.toFixed(2);
    const total = salesTax + subTotal;
    $("#total").value = total.toFixed(2);
    }
    subTotalFocus();
};
const subTotalFocus = () => {
    $("#subtotal").focus();
}
document.addEventListener("DOMContentLoaded", () => {
    let calculate = $("#calculate");
    calculate.addEventListener("click", processEntries);
    let clear = $("#clear");
    clear.addEventListener("click", clearForm);
})
window.onload = () => {
    subTotalFocus();
};
const clearForm = () => {
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";
    subTotalFocus();
};
    
    
    
    
    
    

