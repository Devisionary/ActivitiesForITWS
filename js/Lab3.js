document.getElementById('drink1').onchange = function() { document.getElementById('num1').disabled = !this.checked;
if(this.checked){
  num1.value = 1;
}
else{
  num1.value = "";
}
};
document.getElementById('drink2').onchange = function() { document.getElementById('num2').disabled = !this.checked;
if(this.checked){
  num2.value = 1;
}
else{
  num2.value = "";
}
};

document.getElementById('check1').onchange = function() { document.getElementById('food1').disabled = !this.checked;
if(this.checked){
  food1.value = 1;
}
else{
  food1.value = "";
}
};
document.getElementById('check2').onchange = function() { document.getElementById('food2').disabled = !this.checked;
if(this.checked){
  food2.value = 1;
}
else{
  food2.value = "";
}
};
document.getElementById('check3').onchange = function() { document.getElementById('food3').disabled = !this.checked;
if(this.checked){
  food3.value = 1;
}
else{
  food3.value = "";
}
};
document.getElementById('check4').onchange = function() { document.getElementById('food4').disabled = !this.checked;
if(this.checked){
  food4.value = 1;
}
else{
  food4.value = "";
}
};


function getTotal(event) {
event.preventDefault();
      var subTotal = 0;
    
setTimeout(function () {
window.location.reload();}, 10000);

    
    
      var pdrink1 = 3.00;
      var qdrink1 = document.getElementById('num1').value;
      var total1 = qdrink1 * pdrink1;
      subTotal += total1;
      
      var pdrink2 = 4.00; // Set the price of fries
      var qdrink2 = document.getElementById('num2').value;
      var total2 = qdrink2 * pdrink2;
      subTotal += total2;
      
var pfood1 = 5.00; // Set the price of fries
      var qfood1 = document.getElementById('food1').value;
      var total3 = qfood1 * pfood1;
      subTotal += total3;
      
var pfood2 = 5.00; // Set the price of fries
      var qfood2 = document.getElementById('food2').value;
      var total4 = qfood2 * pfood2;
      subTotal += total4;
      
var pfood3 = 4.00; // Set the price of fries
      var qfood3 = document.getElementById('food3').value;
      var total5 = qfood3 * pfood3;
      subTotal += total5;
      
var pfood4 = 3.00; // Set the price of fries
      var qfood4 = document.getElementById('food4').value;
      var total6 = qfood4 * pfood4;
      subTotal += total6;
      

      
      
      
  document.getElementById('showTotal').innerHTML = subTotal;
  window.alert("                   ORDER COMPLETE!");
  window.alert("                      The total is: $" + subTotal);
  
  };