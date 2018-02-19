
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//Tilføjer ul omkring navnet og nyt linjeskift efter hvert navn.
function makeUl(arrayList) {
    unorderedList = arrayList.map(function (name) {
        return "<ul>" + name + "</ul>";
    }).join("\n");

    return unorderedList;
}

//Metoden bruges til at tælle klik. Bruges til at skifte mellem asc og desc order ved sortering.
var mouseClick = 0;
function countClick() {
    mouseClick += 1;
    return mouseClick;
}

//Skriver listerne på index siden når siden loades.
var boysList = document.getElementById("boys").innerHTML = makeUl(boys);
var girlsList = document.getElementById("girls").innerHTML = makeUl(girls);
var allPropleAsString = document.getElementById("all").innerHTML = allPeopleList();
var peoplesAsArray = boys.concat(girls);

//Bruges til at lægge de to lister sammen.
function allPeopleList() {
    return allPeoples = boysList + girlsList;
}

//Uden parenteser på getImage pga det er en reference.
//Henter input fra klik.
document.getElementById("btns").addEventListener("click", getInputs);

//Tilføjer boy eller girl, og opdater listerne
function getInputs(e) {

    //Target får DOM id'et.
    var btn = e.target.id;
    if (btn === "addboy") {

        //Henter den indtastet værdi
        let newBoy = document.getElementById("newboy").value;
        //Tilføjer det nye navn sidst i arrayet.
        boys.push(newBoy);
        
        //Opdater det globale array eller kan der ikke reverses.
        peoplesAsArray = boys.concat(girls);
        
        //Opdater listerne
        boysList = document.getElementById("boys").innerHTML = makeUl(boys);
        document.getElementById("all").innerHTML = allPeopleList();

    } else if (btn === "addgirl") {

        let newGirl = document.getElementById("newgirl").value;
        girls.push(newGirl);
        
        //Opdater det globale array eller kan der ikke reverses.
        peoplesAsArray = boys.concat(girls);
        
        girlsList = document.getElementById("girls").innerHTML = makeUl(girls);
        document.getElementById("all").innerHTML = allPeopleList();

    } else {
        console.log("Fejl i getInput()");
    }
}

document.getElementById("manipulateList").addEventListener("click", getManipulateInput);

//Metoden fjerner boys eller girls i starten eller slutningen af listen.
//Derudover sorter og reverser den også listerne.
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
        
        //Opdater det globale array eller kan der ikke reverses.
        peoplesAsArray = boys.concat(girls);

        //Opdater boysList og udskriver den nye liste
        boysList = document.getElementById("boys").innerHTML = makeUl(boys);
        document.getElementById("all").innerHTML = allPeopleList();

        //Fjerner sidste boy i arrayet.
    } else if (btnManipulate === "removeboy" && lastRadioBtn === true) {
        boys.pop();
        
        //Opdater det globale array eller kan der ikke reverses.
        peoplesAsArray = boys.concat(girls);

        //Opdater boysList og udskriver den nye liste
        boysList = document.getElementById("boys").innerHTML = makeUl(boys);
        document.getElementById("all").innerHTML = allPeopleList();

        //Fjerner første girl i arrayet.
    } else if (btnManipulate === "removegirl" && firstRadioBtn === true) {
        girls.shift();
        
        //Opdater det globale array eller kan der ikke reverses.
        peoplesAsArray = boys.concat(girls);

        //Opdater girlsList og udskriver den nye liste
        girlsList = document.getElementById("girls").innerHTML = makeUl(girls);
        document.getElementById("all").innerHTML = allPeopleList();

        //Fjerner sidste girl i arrayet.  
    } else if (btnManipulate === "removegirl" && lastRadioBtn === true) {
        girls.pop();
        
        //Opdater det globale array eller kan der ikke reverses.
        peoplesAsArray = boys.concat(girls);

        //Opdater girlsList og udskriver den nye liste
        girlsList = document.getElementById("girls").innerHTML = makeUl(girls);
        document.getElementById("all").innerHTML = allPeopleList();

        //All listen reverses.  
    } else if (btnManipulate === "reverse") {
        var reversedAllPeople = peoplesAsArray.reverse();
        var reversedList = makeUl(reversedAllPeople);

        document.getElementById("all").innerHTML = reversedList;

        //Sorter all listen.
    } else if (btnManipulate === "sort") {
        var allPeopleSort = boys.concat(girls);

        //antal klik
        var counterClick = countClick();

        if (counterClick % 2 === 1) {

            allPeopleSort.sort(function (word1, word2) {
                return word1.toLowerCase().localeCompare(word2.toLowerCase());
            });

            //Opdater global
            peoplesAsArray = allPeopleSort;

            let ascSortedList = makeUl(allPeopleSort);

            document.getElementById("all").innerHTML = ascSortedList;
        } else if (counterClick % 2 === 0) {

            //Samme sorterings algoritme bare byttet om på word1 og word2.
            allPeopleSort.sort(function (word1, word2) {
                return word2.toLowerCase().localeCompare(word1.toLowerCase());
            });

            //Opdater globalt
            peoplesAsArray = allPeopleSort;

            let descSortedList = makeUl(allPeopleSort);

            document.getElementById("all").innerHTML = descSortedList;
        }

    } else {
        console.log("Der opstod en fejl i manipulateList()");
    }
}







