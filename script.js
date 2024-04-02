// Main div element to apply modifications 
let dotMap = document.getElementById("dot-map").style; 
let heatMap = document.getElementById("heat-map").style; 
  
let smoke1 = document.getElementById("wrapper-smoke-one").style;
let smoke2 = document.getElementById("wrapper-smoke-two").style;

let but1 = document.getElementById("wrapper-click-one").style; 
let but2 = document.getElementById("wrapper-click-two").style;
  
// Function to update styling 
function update1() { 
    console.log("updated cick one");
    heatMap.display = 'inline';
    dotMap.display = 'none';
    smoke1.zIndex = '1';
    smoke2.zIndex = '0';
} 

function update2() { 
    console.log("updated cick two"); 
    heatMap.display = 'none';
    dotMap.display = 'inline';
    smoke2.zIndex = '1';
    smoke1.zIndex = '0';
} 
  
  
const button1 = document.getElementById("wrapper-click-one"); 
const button2 = document.getElementById("wrapper-click-two"); 
  
// Using addEventListner to listen to 
// click event and call update function 
button1.addEventListener("click", update1);
button2.addEventListener("click", update2);