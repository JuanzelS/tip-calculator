// Get references to the DOM elements
const billInput = document.querySelector('#input-bill');
const tipInput = document.querySelector('#input-tip');
const peopleInput = document.querySelector('#input-people');
const displayTip = document.querySelector('#display-tip');
const displayTotal = document.querySelector('#display-total');

// Add event listeners to trigger calculation whenever input changes
billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

// Function to calculate the tip and total per person
function calculateTip() {
    const bill = parseFloat(billInput.value) || 0; // Get the bill amount or set default to 0
    const tipPercent = parseFloat(tipInput.value) || 0; // Get the tip percentage or set default to 0
    const people = parseInt(peopleInput.value) || 1; // Get the number of people or set default to 1 (to avoid dividing by zero)

    // Calculate the tip amount
    const tipAmount = (bill * tipPercent) / 100;

    // Calculate the total bill (including tip)
    const totalAmount = bill + tipAmount;

    // Calculate the per-person amount
    const perPerson = totalAmount / people;

    // Update the DOM to show the calculated tip and total per person
    displayTip.innerHTML = `$${tipAmount.toFixed(2)}`; // Show tip amount
    displayTotal.innerHTML = `$${perPerson.toFixed(2)}`; // Show total per person
}