/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const pElements = document.querySelectorAll("p");
console.log(pElements);

const firstDiv = document.querySelector(".site-header");
console.log(firstDiv);

const jumbotronElement = document.getElementById("jumbotron-text");
console.log(jumbotronElement);

const pElsInPrimaryContent = document.querySelectorAll(".primary-content p");
console.log(pElsInPrimaryContent);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const clickAlert = document.querySelector("#alertBtn");
clickAlert.addEventListener("click", popUpText);
 function popUpText (){
        alert("hanks for visiting Bikes for Refugees!")
 }

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const clickBackgroundColour = document.querySelector("#bgrChangeBtn");
clickBackgroundColour.addEventListener("click", changeBackgroundColour);
function changeBackgroundColour (){
    const body = document.querySelector("body");
    body.style.backgroundColor = "purple"
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
const clickAddTextButton = document.querySelector("#addTextBtn");
clickAddTextButton.addEventListener("click", addNewPara);
function addNewPara (){
    const parentButton = document.querySelector("div.jumbotron");
    const newPara = document.createElement("p");
    newPara.innerText = "Read more below.";
    parentButton.appendChild(newPara);
}


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const clickLargerLinks = document.querySelector("#largerLinksBtn");
clickLargerLinks.addEventListener("click", increaseTextSize);

function increaseTextSize (){
    const allLinks = document.querySelector("#buttons");
    allLinks.style.fontSize = "x-large";

}