
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne","hanne","Sanne"];


var girlsAsString = girls.join("\n");

var boysList = boys.map(function(name) { 
    return "<ul>" + name + "</ul>"; 
}).join("\n");

var girlsList = girls.map(function(name) { 
    return "<ul>" + name + "</ul>"; 
}).join("\n");

document.getElementById("boys").innerHTML = boysList;
document.getElementById("girls").innerHTML = girlsList;
document.getElementById("all").innerHTML = girlsList + boysList;

    
    
    
    
    

