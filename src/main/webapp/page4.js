/* 
 
 */





/* global fetch */

var confirm = document.getElementById("confirmUserNo");
var userNos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var userNo = document.getElementById("userNo");
var getAllUsers = document.getElementById("getAllUsers");
var showWhatYouveFetched = document.getElementById("show");

var list;

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


var getAll = getAllUsers.onclick = function () {

    fetch('https://jsonplaceholder.typicode.com/users/').then(function (response) {
        response.text().then(function (text) {
            var myJSON = text;
            var myObj = JSON.parse(myJSON);
            for (var x in myObj) {

                list += '<tr><td>' + myObj[x].name + ' </td><td>' + myObj[x].phone + '</td></tr>';
            }

            showWhatYouveFetched.innerHTML = '<h3>List of Users</h3><table><tr><th>Name</th><th>Phone</th></tr>' + list + '</table>';
            
        });
    });
};

var confirmFunction = confirm.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/users/' + userNo.value + '').then(function (response) {
        response.text().then(function (text) {

            var myJSON = text;
            var myObj = JSON.parse(myJSON);
            showWhatYouveFetched.innerHTML = '<li>Name: ' + myObj.name + "</li>" + '<li>Phone: ' + myObj.phone + "</li>"
                    + "</li><br>" + "Address \n" + '<li>Street: ' + myObj.address.street + "</li>"
                    + '<li>City: ' + myObj.address.city + "</li>\n" + '<li>Zip: ' + myObj.address.zipcode + "</li>\n"
                    + '<li>Geo(lat, lng): ' + myObj.address.geo.lat + ', ' + myObj.address.geo.lng + "</li>\n"




        });
    });
};



