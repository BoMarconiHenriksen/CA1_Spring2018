/* 

 */





var confirm = document.getElementById("confirmUserNo");
var userNos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var obtain = document.getElementById("obtainViafetch");

var userNo = document.getElementById("userNo");
var getAllUsers = document.getElementById("getAllUsers");
var showWhatYouveFetched =document.getElementById("show");

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

var confirmFunction = confirm.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/users/' + userNo.value + '');
    
console.log('https://jsonplaceholder.typicode.com/users/' + userNo.value + '');
};
console.log('https://jsonplaceholder.typicode.com/users/' + userNo.value + '');



var getAll = getAllUsers.onclick = function () {

 
    showWhatYouveFetched.innerHTML= fetch('https://jsonplaceholder.typicode.com/users/');
//      showWhatYouveFetched.appendChild( showWhatYouveFetched);
 
console.log('https://jsonplaceholder.typicode.com/users/');
};
console.log('https://jsonplaceholder.typicode.com/users/');

