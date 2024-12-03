// const number1 = prompt("Enter Number");

// if(number1 > 0){
//     for(let i = number1; i>=1; i--);{
//     console.log(i);
// }
// }
// else{
//     console.log("Invalid number");
// }
// const h1 = document.getElementById("h1");
// console.log(h1);
// const newContent = "hello world";
// h1.innerText = newContent;
// const h2 = document.getElementsByClassName("h2");
// console.log(h2);
// const newContent = "My world";
// h2.innerText = newContent;
// const elements = document.getElementsByClassName("heading");
// console.log(elements[1]);
// const n= "Hello India";
// elements[1].innerText = n;
// const elements = document.getElementsByClassName("heading");
// console.log(elements);
// const n = "Hello New World";
// for(let i=0; i < elements.length;i++){
//     elements[i].innerText = n;
// }
const elements = document.getElementsByClassName("heading");
console.log(elements);
for (let i=0; i < elements.length;i++){
   if(i%2==0){
        elements[i].innerHTML =" EVEN" + i;
      }
     else{ 
        elements[i].innerHTML = "odd" + i;
       }
      }

// 
// 
   
