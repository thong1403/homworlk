//1

// let a = [
//     {
//         Name:"Sony Xperia XZPremium",
//         Brand:"Sony",
//         Price:"4428",
//         Color:"white",
//         Category:"Phone",
        
//     },
//     {
//         Name:"OPPO F3 Plus",
//         Brand:"oppo",
//         Price:"5487",
//         Color:"Black",
//         Category:"Phone",
        
//     },
//     {
//         Name:"IPhone 13 Pro max",
//         Brand:"Apple",
//         Price:"21490",
//         Color:"Gray",
//         Category:"Phone",
        
//     },
//     {
//         Name:"Samsung Galaxy S8",
//         Brand:"sam sung",
//         Price:"8490",
//         Color:"white",
//         Category:"Phone",
        
//     },
// ]
// console.table(a);

//1.1

// for(let i=0;i<a.length;i=i+1){
//   console.log(`Name:${a[i].Name}`);
//   console.log(`price:${a[i].Price}`);
//   console.log("-----------------");
// }


// 1.2


// let userInput = Number(prompt("nhập vị trí muốn lấy"));
// console.log(`Name:${a[userInput].Name}`);
// console.log(`Brand:${a[userInput].Brand}`);
// console.log(`Price:${a[userInput].Price}`);
// console.log(`Color:${a[userInput].Color}`);
// console.log(`Category:${a[userInput].Category}`);
// console.log("-----------------");

// 1.4
// a[0].Providers = "Phukienso"
// a[1].Providers = "Tgdd"
// a[2].Providers = "Tgdd"
// a[3].Providers = "Tgdd"
// console.table(a); 

// // //1.5

// let b = prompt("nhập");
// for (let i = 0; i < a.length; i++) {
//   if (a[i].Providers === b) {
//     console.log(`Name:${a[i].Name}`);
//     console.log(`Brand:${a[i].Brand}`);
//     console.log(`Price:${a[i].Price}`);
//     console.log(`Color:${a[i].Color}`);
//     console.log(`Category:${a[i].Category}`);
//     console.log(`providers:${a[i].Providers}`);

//     console.log("-----------------");
//   }
// }

//bài 2
// let a = [
//     {
//         Name:"nhiệm vụ học tập",
//         Brand:"HTML",
//         Price:"Hoàn thành flase",

//     },
//     {
//         Name:"nhiệm vụ học tập",
//         Brand:"css",
//         Price:"Hoàn thành flase",

//     },
//     {
//         Name:"nhiệm vụ học tập",
//         Brand:"javascript",
//         Price:"Hoàn thành flase",

//     },
//     {
//         Name:"nhiệm vụ học tập",
//         Brand:"git",
//         Price:"Hoàn thành flase",

//     },
//     {
//         Name:"nhiệm vụ học tập",
//         Brand:"node pakcage manager",
//         Price:"Hoàn thành flase",

//     },
// ]
// console.table(a);

// bài 2.1
// console.log("nhiệm vụ học tập")
// for(let i=0;i<a.length;i=i+1){
//   console.log(`${a[i].Brand}`);
//   console.log(`price:${a[i].Price}`);
//   console.log("-----------------");
// }

// //bài 2.2 
// let b = prompt("nhập vào cread/read/update/delete");
// if (b === "cread") {
//     let c = prompt("nhập nhiệm vụ mới");

//     for(let i = 0; i<a.length;i++){
//         a[i].Brand==c;
//     console.log(`${a[i].Brand}`);
//     console.log(`price:${a[i].Price}`);
//     console.log("-----------------");
//     }
//     console.log(`${c}`);
//     console.log("hoàn thành nhiệm vụ : flase");
// }
// //bài 2.3
// if(b==="update"){
// let d = Number(prompt("vị trí muốn update"));
// let noidung = prompt("nội dung muốn update");
// for(let i = 0; i<a.length;i++){
   
//     console.log(`${a[i].Brand}`);
//     console.log(`price:${a[i].Price}`);
//     console.log("-----------------");
//     }
//     console.log(`${d.noidung}`);
// }
