
 const table = document.querySelector('table');
 const lastRow = document.createElement('tr');
 const prices = document.querySelectorAll('[data-ns-test=price]');
 let sum = 0;
const value = Array.from(prices).map(item => Number(item.textContent));
 for(let i = 0; i < prices.length; i++) {
  sum += value[i];
 }
 const child = document.createElement("td");
 child.setAttribute('data-ns-test', 'grandTotal');


 child.textContent = sum;
 lastRow.appendChild(child);
 table.appendChild(lastRow);