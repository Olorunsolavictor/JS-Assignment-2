"use strict";
//Design a for loop that returns an array of even numbers from 1-100
let evenNum = [];
function printEven() {
  for (let i = 1; i <= 100; i++)
    if (i % 2 == 0) {
      evenNum.push(i);
    }
  console.log(evenNum);
}
printEven();

//Create a function that returns even numbers between two numbers A and B
function evenNumBetween(A, B) {
  for (let i = A + 1; i < B; i++)
    if (i % 2 == 0) {
      console.log(i);
    }
  for (let i = B + 1; i < A; i++)
    if (i % 2 == 0) {
      console.log(i);
    }
}
evenNumBetween(60, 50);

//When would you use a conditional statement?
//(b)when you want your code to choose between multiple numbers

//Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)

function firstFunction(a, b) {
  return a + b;
}
console.log(firstFunction(50, 20));

//Create a function with a function name printSum( ) and print the sum of two numbers.

function printSum(a, b) {
  console.log(a + b);
}
printSum(5, 20);

//Create a function that returns an array of the names of 10 of your course mates

let myCourseMates = [
  "Elijah",
  "Tobi",
  "Kolade",
  "Ayo",
  "Oremu",
  "Adaobi",
  "Abigail",
  "Augustine",
  "Abiodun",
  "Olayinka",
];
function printMyCourseMates() {
  console.log(myCourseMates);
}
printMyCourseMates();

//Add an element to the end of this array [1,2,4]

let arr1 = [1, 2, 3];
function addElement(a) {
  arr1.push(a);
  console.log(arr1);
}
addElement(5);

//Remove the last element in this array [1,2,3,8]

let arr2 = [1, 2, 3, 8];
function removeElement() {
  arr2.pop();
  console.log(arr2);
}
removeElement();

//Remove the first element in this array [23.77,80,45]

let arr3 = [23.77, 80, 45];
function removeFirstElement() {
  arr3.shift();
  console.log(arr3);
}
removeFirstElement();

//Add an element to the beginning of the array [[20,30,80],[10,50,55]]

let arr4 = [
  [20, 30, 80],
  [10, 50, 55],
];
function addFirstElement(a) {
  arr4.unshift(a);
  console.log(arr4);
}
addFirstElement([30, 40, 70]);
