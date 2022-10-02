// Write your code here! WRITING HTML IN JAVASCRIPT
const element = document.getElementById('main');
element.remove('main');

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = "Sam is the champion";

