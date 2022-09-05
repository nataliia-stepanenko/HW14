"use strict"

// 1
// const user = JSON.parse(localStorage.getItem('user'));

// if (user) {
//     console.log(user);
// } else {
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then(response => response.json())
//         .then(result => localStorage.setItem('user', JSON.stringify(result)))
//         .catch(error => console.error(error));
//     }


// 2
// function isValidDateFormat(str) {
//     let regexp = /^\d\d\d\d\/\d\d\/\d\d \d\d\:\d\d$/;
//     return regexp.test(str)
// }

// console.log(isValidDateFormat("2012/09/18 12:10")); // true
// console.log(isValidDateFormat("12.02.2022 12:10")); // false


// 3
// function isAfter(date1, date2) {
//     let regexp = /^\d\d\d\d\d\d\d\d\d\d\d\d\d$/;
//     if (!regexp.test(date1)) {
//         date1 = Date.parse(date1)
//     } 
//     if (!regexp.test(date2)) {
//         date2 = Date.parse(date2)
//     }
//     return date1 > date2;
// }

// console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
// console.log(isAfter(1648636135000, 1648549735000)); // true
// console.log(isAfter(1648549735000, 1648636135000)); // false