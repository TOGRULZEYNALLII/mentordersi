const sayi1 = document.getElementById("bir");
const sonuc = document.getElementById("sonuc");
const display = document.getElementById("display");


    let cavab=0;


function append(value) {
    let value1= value;
    let hesap = value; 
    let value3=value;
    console.log(value1);
    console.log(hesap);
    console.log(value3);
    if(hesap=="+"){
       cavab = value1 + value3;
    }
  

} 

function calculate() {
      display.textContent= cavab;
}