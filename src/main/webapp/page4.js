/* 

 */





/* global fetch */

var confirm = document.getElementById("confirmUserNo");
var userNos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var obtain = document.getElementById("obtainViafetch");

var userNo = document.getElementById("userNo");
var getAllUsers = document.getElementById("getAllUsers");
var showWhatYouveFetched =document.getElementById("show");
var url ;
//Creates a number select menu in the select tags id="userNo"
for (var i = 0; i < userNos.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = userNos[i];
    opt.value = userNos[i];
    userNo.appendChild(opt);
}

userNo.addEventListener("onChange", confirmFunction);
confirm.addEventListener("click", confirmFunction);
getAllUsers.addEventListener("click", getAll);


function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }


var confirmFunction = confirm.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/users/' + userNo.value + '').then(function(response) {
  response.text().then(function(text) {
    showWhatYouveFetched.innerHTML =text;
  });
})};


  

 
  
  
var getAll = getAllUsers.onclick = function () {
url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url).then(function(response) {
  response.text().then(function(text) {
    showWhatYouveFetched.innerHTML =text;
  });
})};