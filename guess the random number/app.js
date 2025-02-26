const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
const assignedNumbers = {}; 


const submitBtn = document.getElementById("submitBtn");
const textInput = document.getElementById("textInput");
const output = document.getElementById("output");
const message = document.getElementById("message");

let results = []; 
submitBtn.addEventListener("click", function () {
    const inputText = textInput.value.trim(); 
    
    if (inputText === "") {
        alert("Please enter a name.");
        return;
    }

    if (numbers.length === 0) {
        message.innerText = "All numbers have been assigned!";
        return;
    }

    let selectedNumber;
    
  
    if (inputText in assignedNumbers) {
        selectedNumber = assignedNumbers[inputText];
    } else if (numbers.length > 0) {
      
        const randomIndex = Math.floor(Math.random() * numbers.length);
        selectedNumber = numbers.splice(randomIndex, 1)[0];
        assignedNumbers[inputText] = selectedNumber; 
    }

  
    if (selectedNumber !== undefined) {
        results.push(`${inputText} → Number: ${selectedNumber}`);
        output.innerHTML = results.join("<br>");
    }

    
    if (numbers.length === 0) {
        message.innerText = "All numbers have been assigned!";
    }
});
