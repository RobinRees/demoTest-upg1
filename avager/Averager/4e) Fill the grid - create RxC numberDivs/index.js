"use strict";


/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer

*/
function createNumberDiv () {


  let numberDiv = document.createElement("div");
  numberDiv.innerHTML = randomNumber(100);

  return numberDiv;
} // Skapar div med funktionen randomNumber

function randomNumber (max)  { // Sätter namn på funktionen RandomNumber och att ( är max value som jag deklarerar över)

  return Math.floor(max * Math.random()) // <--- Skapar "Randomnumber och vilket nummer som ska vara i (createNumberDiv?")
}


function gridMaker (gridContainer, R, C) {

  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
//Deklarerar hur många rader och col man ska ha. Repeterar R gånger 1fr och C gånger 1fr. 
  let rowCol = R * C;
  for (let i = 0; i < rowCol; i++) { 
  gridContainer.appendChild(createNumberDiv())
//Hur många gånger det ska repeterar.  <--- Detta är en loop (one Loop)

}

// for (let c = 0; c < C; c++) {
  //         for (let r = 0; r < R; r++) {
  //                 gridContainer.appendChild(createNumberDiv());
  //         }
  // }


//Hur många gånger det ska repeterar.  <--- Detta är en nested loop.

}


gridMaker (document.querySelector("#grid"), 10, 10); // Sätter alla funkioner i spin







