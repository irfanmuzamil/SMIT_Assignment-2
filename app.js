//closure function that add 

// function addNumClosure(num) {
//     return function(x) {
//       return x + num;
//     }
//   }
//   let addFive = addNumClosure(5);
//    console.log(addFive(10)); 


// //Search array
// let array = [1, 2, 3, 4, 5];
// let value = 1;
// function searchArray(array, value) {
//     if (array.length === 0) {
//       return false;
//     } else if (array[0] === value) {
//       return true;
//     } else {
//       return searchArray(array.slice(1), value);
//     }
//   }

//   console.log(searchArray(array, value)); 

//Question no#3
// function addParagraph(text) {

//   let para = document.createElement("para");
  
//   let myPara = document.createTextNode(text);
  
//   para.appendChild(node);
//   document.body.appendChild(myPara);
// }
// console.log(para)

//Question no 4

// function addListItem(text) {

//   let list = document.getElementById('myList');
//   let listItem = document.createElement('li');
//   listItem.textContent = text;

//   list.appendChild(listItem);
// }
// addListItem('Item 4');

//Question no5

// function changeBgColor(element, color) {
//   element.style.backgroundColor = color;
// }
// const myElement = document.getElementById('color');

// changeBgColor(myElement, 'red');

//Question NO 6
// function saveObjectToLocalStorage(key, object) {
//   localStorage.setItem(key, JSON.stringify(object));
// }
// console.log(localStorage)
// let myObject = { name: "Irfan", age: 21, teacher: "Ishaq bhojani" }


//Question No 7
//saveObjectToLocalStorage("myObject", myObject);

// function getObjectFromLocalStorage(key) {
//   const objStr = localStorage.getItem(key);
//   if (objStr) {
//     const obj = JSON.parse(objStr);
//     console.log('Object retrieved from localStorage:', obj);
//     return obj;
//   }
//   console.log('No object found in localStorage for key:', key);
//   return null;
// }


// //Question no 8
// function saveToLocalStorage(obj) {

//   Object.keys(obj).forEach((key) => {
//     localStorage.setItem(key, obj[key]);
//   });

//   let newObj = {};
//   Object.keys(obj).forEach((key) => {
//     newObj[key] = localStorage.getItem(key);
//   });
//   return newObj;
// }
// const myObj = {
//   name: 'IrfanKhan',
//   age: 21,
//   email: 'Irfan@gmail.com'
// };

// let newObj = saveToLocalStorage(myObj);
// console.log(newObj);