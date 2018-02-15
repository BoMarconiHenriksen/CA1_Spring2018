
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
//Henter input fra klik.
document.getElementById("btns").onclick = getInputs;

//Tilføjer boy eller girl, og opdater listerne
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

document.getElementById("manipulateList").onclick = getManipulateInput;

function getManipulateInput(e) {
    var firstRadioBtn = new Boolean(false);
    var lastRadioBtn = new Boolean(false);
    
    let btnManipulate = e.target.id;

    //Hvis en radio button er checked er værdien true.
    firstRadioBtn = document.getElementById("first").checked;
    lastRadioBtn = document.getElementById("last").checked;

    //Fjerner første boy i arrayet.
    if (btnManipulate === "removeboy" && firstRadioBtn === true) {
        boys.shift();

        document.getElementById("all").innerHTML = allPeopleList();
      
      //Fjerner sidste boy i arrayet.
    } else if (btnManipulate === "removeboy" && lastRadioBtn === true) {
        boys.pop();

        document.getElementById("all").innerHTML = allPeopleList();
      
      //Fjerner første girl i arrayet.
    } else if (btnManipulate === "removegirl" && firstRadioBtn === true) {
        girls.shift();

        document.getElementById("all").innerHTML = allPeopleList();
      
      //Fjerner sidste girl i arrayet.  
    } else if (btnManipulate === "removegirl" && lastRadioBtn === true) {
        girls.pop();

        document.getElementById("all").innerHTML = allPeopleList();
        
    } else {
        console.log("Der opstod en fejl i manipulateList()");
    }


}





