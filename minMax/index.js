let numbers = [5, 8, 2, 10, 4, 3, 7, 9, 1];
 function findMin() {
     let min = Math.min(...numbers);
     alert("The minimum number is: " + min);
 }
 function findMax() {
     let max = Math.max(...numbers);
     alert("The maximum number is: " + max);
 }
display = document.getElementById('result');
    let array = [1, 6, 5, 6];
    let btnAdd = document.querySelector('[data-add]');
    btnAdd.addEventListener('click', sumOfNum);
 