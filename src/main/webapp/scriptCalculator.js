/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.getElementById("buttons").onclick = getEntry;
var equals = document.getElementById("calculate");
var entry = document.getElementsByClassName("t1").value;
var entries = [];
var result;


equals.addEventListener('click', getResult);



function  getEntry(e) {
   
if (e.target.innerText=='='){
    
    }
    else{
    console.log(e.target.innerText);
    document.getElementById("display").innerHTML = e.target.innerText;
    entries.push(e.target.innerText);
    document.getElementById("display").innerHTML = entries.join('');
    console.log(entries);

}};

function getResult() {
    try{
  
    result = (entries.join('') + ' = ' + eval(entries.join('')));
    document.getElementById("display").innerHTML = result;

    console.log(result);
  
    }catch(ex){
         document.getElementById("display").innerHTML = '<i>E</i>   '+ex.message+'   press clear';
    }
 


}



