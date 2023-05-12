// Get all the price elements from the table
const prices = document.querySelectorAll('[data-ns-test="price"]');

// Calculate the total price
let totalPrice = 0;
prices.forEach((priceElement) => {
  totalPrice += parseInt(priceElement.textContent);
});

// Create a new row for the total price
const table = document.querySelector('table');
const newRow = document.createElement('tr');
const newCell = document.createElement('td');

// Set the data attribute for the total price cell
newCell.setAttribute('data-ns-test', 'grandTotal');

// Set the text content of the total price cell
newCell.textContent = totalPrice;

// Append the total price cell to the new row
newRow.appendChild(newCell);

// Append the new row to the table
table.appendChild(newRow);
