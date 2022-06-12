let myheight = document.getElementById('height1');
let myweight = document.getElementById('weight1');

let flyheight = document.getElementById('height2');
let flyweight = document.getElementById('weight2');

let bmioutput = document.getElementById('BMIoutput');

let temp = document.getElementById('temp1');

//   ********************** Calculate BMI ******************************
function myfun() {
     let johnbmi = myweight.value / ( myheight.value * myheight.value );
     
     let lucbmi = flyweight.value / ( flyheight.value * flyheight.value );
     
     johnbmi = Number.parseFloat(johnbmi).toFixed(2);
     lucbmi = Number.parseFloat(lucbmi).toFixed(2);
     
     bmioutput.innerHTML = `Johns BMI: ${johnbmi} bmi - Lucas' BMI: ${lucbmi} bmi - Lucas' BMI is higher than Johns BMI: That statement is ${(lucbmi > johnbmi )}`;
     
     // *********** Console Output *************************************
     if( johnbmi > lucbmi ) {
          console.log(`Johns BMI ( ${johnbmi} ) is higher than Lucas' BMI ( ${lucbmi} )`);
     }
     else {
          console.log(`Lucas' BMI ( ${lucbmi} ) is higher than Johns BMI ( ${johnbmi} )`);
     }
}
// *************************************************************************

// ********************* Convert Tempterature ***********************
function myfun1() {
     let check = document.getElementById('fars1').checked;
     let temp = document.getElementById('temp1');
     let out1 = document.getElementById('Tempoutput');
     
     let celsi = 5 / 9 * (temp.value - 32) ;
     let farnh = temp.value * (9 / 5) + 32;
     
     celsi = Number.parseFloat(celsi).toFixed(1);
     farnh = Number.parseFloat(farnh).toFixed(1);
     
     if (check) {
          out1.innerHTML = `Temperature in Celsius: ${celsi} degrees`;
     }
     else {
          out1.innerHTML = `Temperature in Farenheit: ${farnh} degrees`;
     }
}
// ***************************************************************************

conBtn.addEventListener("click", myfun);
conBtn1.addEventListener("click", myfun1);