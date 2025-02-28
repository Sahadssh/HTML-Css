 document.addEventListener("DOMContentLoaded", function () {

const numberinput = document.getElementById("numberInput");
const submitNumberBtn  = document.getElementById("submitNumberBtn");
const formContainer = document.getElementById("formContainer")
const output = document.getElementById("output");
const message = document.getElementById("message");


let remainingEntries = 0;
let maxnumber = 0;
let availableNumbers = [];
let results = [];
let assignedNumbers = {};
let textInput, submitTextBtn;


    submitNumberBtn.addEventListener("click", function () {
        const numberValue = parseInt(numberInput.value.trim(), 10);

        if (isNaN(numberValue) || numberValue <= 0) {
            alert("Please enter a valid positive number.");
            return;
        }

            remainingEntries = numberValue;
            maxnumber = numberValue;
            availableNumbers = Array.from({  length: maxnumber},(_,i)=> i+ 1)
          
        

            if(!textInput){
                textInput = document.createElement("input");
                textInput.id = "text";
                textInput.type = "text";
                textInput.placeholder = "Enter a text";

                formContainer.appendChild(textInput);

                submitTextBtn = document.createElement("button");
                submitTextBtn.id = "submitTextbtn";
                submitTextBtn.innerText = "Submit Text";
                formContainer.appendChild(submitTextBtn);


                submitTextBtn.addEventListener("click",handletextSubmit);
            }
                textInput.disabled = false;
                message.innerText = `you can enter ${remainingEntries} unique texts`;
        });

            function handletextSubmit(){
                if(remainingEntries <=0){
                    alert("you need to enter a new number first");
                    return;

                }

                const textvalue = textInput.value.trim();
                if(textvalue === ""){
                    alert("please enter some text");
                    return
                }

                let selectedNumber;

                if(assignedNumbers[textvalue] !== undefined){
                    selectedNumber = assignedNumbers[textvalue];
                }else{
                    selectedNumber = Math.floor(Math.random() * availableNumbers.length);
                    selectedNumber = availableNumbers.splice(selectedNumber,1)[0];
                    assignedNumbers[textvalue] = selectedNumber;
                    remainingEntries--;

                }


                results.push(`text: ${textvalue} number: ${selectedNumber}`)
                output.innerHTML = results.join("<br>");
                message.innerText = `you can enter ${remainingEntries} more unique tests`;

                if(remainingEntries === 0){
                    textInput.disabled = true;
                    numberinput.disabled = false;
                    message.innerText = "enter a new number to start again";
                }

                textInput.value ="";
            }


    });











