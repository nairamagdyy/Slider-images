// //DOM document object model

// //selecting elements

var x = document.getElementById('demo');//single tag

var y = document.getElementsByTagName('h1');//html collection not array
var x = document.getElementsByClassName('text-center');//html collection not array
var x = document.getElementsByName('username');//nodeList not array
var x = document.querySelectorAll('any css selector');//nodeList
var x = document.querySelector('.text-center');//

// console.log(x);

// // array >> [any thing]
// //html collection >> [tags only]
// //nodeList >> [tags , text , attributes]

var h1 = document.getElementById('demo');

singleTag.addEventListener('event' , function(){})

// // console.log(h1);

// // function test1(x){
// //  console.log(x)
// // }

// // function test2(){
// //   console.log(2)
// // }

// /**
//  * click - dblclick - mousemove - mouseover - mouseleave
//  *
//  * input
//  * keyup - keydown - keypress(inpu - document)
//  * focus * blur change
//  *
//  *
//  *
//  */

// var div = document.getElementById("demo");

// var input = document.querySelector("input");

// var h1s = document.querySelectorAll("h1"); //list h1

// console.log(h1s);

// input.addEventListener("keyup", function (eventInfo) {
//   console.log(eventInfo);
// });

// for (var i = 0; i < h1s.length; i++) {
//   h1s[i].addEventListener("click", function (y) {
//     console.log(y.target);
//   });
// }

// div.addEventListener("click", function (x) {
//   console.log(x);
// });

// // input.addEventListener('change' , function(){

// //   console.log('hello');

// // })

// // div.addEventListener('mouseover' ,function(){
// // console.log('1')
// // } )

// // div.addEventListener('mouseleave' ,function(){
// // console.log('2')
// // } )

// //dom chanage css

var div = document.getElementById("demo");

var btn = document.querySelector(".btn");

div.addEventListener("dragend", function (e) {

  console.log(e.clientX , e.clientY);

  div.style.position = "absolute";
  div.style.top = e.clientY+'px' ;
  div.style.left = e.clientX+'px';
});

btn.addEventListener("click", function () {
  var colors = ["red", "teal", "green"];

  var x = Math.floor(Math.random() * 255);
  var y = Math.floor(Math.random() * 255);
  var z = Math.floor(Math.random() * 255);

  console.log(y);

  div.style.backgroundColor = `rgb( ${x},${y} ,${z})`;
});

div.addEventListener("click", function () {
  // tag.style.cssProp = 'value'
  // div.style.backgroundColor = "tomato";
  // div.style.cssText = 'background-color:tomato !important';
  // div.style.width = "100%";
});






// regular exp (validattion) --meta tags

// gom3a

// 1>4

// week10 session1