
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];



//Laver en ny liste. Tilføjer ul rundt om navnet og linjeskift.
function newBoyList() {
    var boysList = boys.map(function (name) {
        return "<ul>" + name + "</ul>";
    }).join("\n");
    return boysList;
}

function girlsListNew() {
    var girlsList = girls.map(function (name) {
        return "<ul>" + name + "</ul>";
    }).join("\n");
    return girlsList;
}

//Skriver listerne på index siden når siden loades.
var boysList = document.getElementById("boys").innerHTML = newBoyList();
var girlsList = document.getElementById("girls").innerHTML = girlsListNew();
document.getElementById("all").innerHTML = allPeopleList();

//Bruges til at lægge de to lister sammen.
function allPeopleList() {
    var boysList = document.getElementById("boys").innerHTML = newBoyList();
    var girlsList = document.getElementById("girls").innerHTML = girlsListNew();
    
    return allPeoples = boysList + girlsList;
}

//Uden parenteser på getImage pga det er en reference.
document.getElementById("btns").onclick = getInputs;

function getInputs(e) {

    //Target får DOM id'et.
    var btn = e.target.id;
    if (btn === "addboy") {
        
        //Henter den indtastet værdi
        let newBoy = document.getElementById("newboy").value;
        //Tilføjer det nye navn nederst
        boys.push(newBoy);
        //Opdater listerne
        document.getElementById("boys").innerHTML = newBoyList();
        document.getElementById("all").innerHTML = allPeopleList();
        
    } else if (btn === "addgirl") {
        
        let newGirl = document.getElementById("newgirl").value;
        girls.push(newGirl);
        document.getElementById("girls").innerHTML = girlsListNew();
        document.getElementById("all").innerHTML = allPeopleList();
        
    } else {
        console.log("Fejl i getInput()");
    }

}





