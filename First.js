/*var newElement = document.createElement("h2");

var newText = document.createTextNode("this is just task");
//var newComment = document.createComment("this is just task");


newElement.appendChild(newText);
document.getElementById("test").appendChild(newElement);

console.log(newElement);
//console.log(newText);
//console.log(newComment);*/

var target = document.getElementById("list1").children[0];
var copyElement = target.cloneNode(true);
console.log(copyElement);
document.getElementById("list2").appendChild(copyElement);