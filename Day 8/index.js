// var arr = [4, 5, 8, 3, 7, 6, 2, 9];
// const n4 = arr[3];
// console.log("4th Value ; ",n4);
// // update element : at 7th position
// arr.splice(7, 1, 999);
// console.log("---updated array---:", arr);
// arr.splice(5, 1);
// console.log("--array after deleted--:",arr);
// var abc = [1,4,5,6,72,2,4];
// const k = 5;
// for(let i = 0; i < Array.length; i++){
//     const abc_i=abc[i];

// if(abc_i === k){
//     abc.splice(i,1);
// }
// }
// console.log(abc);
// var arr = [1,4,5,6,72,2,4];
// for (let i = 0;i <arr.length;i++){
//     let arr_i = arr[i];
//     console.log("my array value :",arr_i)
// }
// var arr = [1,4,5,6,72,2,4];
// for (let i = 0;i <arr.length;i++){
//     let arr_i = arr[i];
//     if(arr_i === 5){
//     console.log("value :",arr_i)
// }}
let student_id_card = {
    // key : value,
    name : "Rahul",
    rollnumber : 24708,
    address : "abc_xyz",
    branch : "C",
    dob : "5-10-2010",

};
const myaddress = student_id_card.address;
const mybranch = student_id_card["branch"];
const myname = student_id_card.name;
const myrollnumber = student_id_card.rollnumber;
const mydob = student_id_card.dob;
console.log(myaddress, mybranch,myname,myrollnumber,mydob);
student_id_card.id = 34;
console.log(student_id_card);
student_id_card.rollnumber = 247078;
console.log(student_id_card);
delete student_id_card.dob;
console.log(student_id_card);
