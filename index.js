// 345 
// 3+4+5 =12
// 333
// let x = +prompt("Enter a number"); // İstifadəçidən ədəd alırıq
// let orginalx = x; // Orijinal ədədin dəyərini saxlayırıq
// let basket = 0; // Rəqəmlərin cəmindən yaranan yeni ədəd üçün dəyişən

// while (x >= 10) { // 10-dan böyük olduğu müddətcə davam et
//     basket = 0; // Hər dövr üçün basketi sıfırlayırıq
//     while (x > 0) {
//         let y = x % 10;  // Rəqəmi alırıq
//         x = Math.floor(x / 10);  // Rəqəmi çıxarırıq
//         basket += y;  // Rəqəmi cəmdə toplayırıq
//     }
//     x = basket;  // Yeni ədəd ilə davam edirik
// }

// console.log("Son tək ədəd:", x); // Nəticə



// // // ededen onun reqemlerinin cemi cix tek eded alinana kimi
// let num = 1234; // Bu, istədiyin ədəd ola bilər.

// while (num >= 10) {
//     let sum = 0;

//     // Rəqəmlərin cəmindən istifadə edirik
//     while (num > 0) {
//         sum += num % 10;  // Sonuncu rəqəmi alırıq
//         num = Math.floor(num / 10);  // Sonuncu rəqəmi çıxarırıq
//     }

//     num = sum;  // Cəmi yenidən num-a təyin edirik
// }

// console.log("Son tək ədəd:", num);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];//10'
// let count = 0;
// for(let i=0; i<200; i++){
//     if(arr[10]!== undefined ){

//        count++;
//     }
//     if(arr[i] === undefined){
//         break;
//     }
// }


// //   console.log(count);



         //0  1  2  3
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     console.log(`${i} asdasda--->`, arr[i]); // 1, 2, 3, 4, 5, 6, 7, 8, 9
// }


// Verilən arraydə yalnız cüt ədədləri ekrana yazdır.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let basket=0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2==0){
//       basket+=arr[i];
//     }
// }
// console.log(basket); // 2, 4, 6, 8

  //4
// 


// Verilmiş arraydəki 0 elementlərinin sayını tap.
// let arr = [1, 0, 3, 0, 5, 0, 7, 8, 9];
// let count=0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]==0){
//         count++;
//     }
// }
// console.log(count); 


// Verilən iki arrayin eyni indeksli elementlərinin cəmini yeni arrayə yaz.
        //  0  1  2  3  4
// let arr1 = [1, 2, 3, 4, 5, 6, 7];
//         //  0  1  2  3  4
// let arr2 = [6, 7, 8, 9, 10,20];
// let arr3 = []; // Yeni array
// for (let i = 0; i < arr1.length; i++) {
//     arr3[i]=arr1[i]+arr2[i]
//  }

//  console.log(arr3); 

// Verilmiş arraydə ən çox təkrarlanan elementi tap.
// let arr = [ 2,1, 3, 4, 5, 6, 7, 8, 9, 1, 2,1,1, 3, 4, 5, 6, 7,2,7,7,7,7,7,7, 8, 9];
// let maxCount = 0;
// let maxi=0;
// for (let i = 0; i < arr.length; i++) {
//     let count=0;
//     for (let j = 0; j < arr.length; j++) {

//         if (arr[1] === arr[2]) {
//             count++;//1 -->2  2-->3
//         }

//     }
    
//     if(count > maxCount) {
//         maxCount = count;
//         maxi = i;
//     }
// }
// console.log(arr[maxi]); 



// Verilmiş arrayin ikinci ən böyük elementini tap.


// arraydaki strigin birinci herfini boyutmek ve birlesdirmek 

// let arr = ["hello", "world", "javascript", "programming"];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {


//     let firstLetter = arr[i].charAt(0).toUpperCase(); // Hərfini boyutmek
//     let restOfString = arr[i].slice(1); // Qalan hissəsini alırıq
//     let newString = firstLetter + restOfString; // Yeni stringi birləşdiririk
//     newArr.push(newString); // Yeni stringi yeni arrayə əlavə edirik


// }
// console.log(newArr); 


// let x:string[]=["yusif","ayan","musa"];
// let newarr:string[]=[]
// for(let i=0;i<x.length;i++){
//     x[i]=x[i][0].toUpperCase()+x[i].slice(1)

//     newarr.push(x[i])
// }
// console.log(newarr); // ["Yusif", "Ayan", "Musa"]

// let arr = ["hello", "world", "javascript", "programming"];

// arr[0]=arr[0].toUpperCase();

// console.log(arr); 




// let x=prompt("Enter  a name"); // İstifadəçidən ədəd alırıq
// let y=prompt("Enter a name"); // İstifadəçidən ədəd alırıq
// let dogruluk=true;
// if(x.length==y.length){
//   for(let i=0;i<x.length;i++){
//     let tapilmis=false;
//     for(let j=0;j<y.length;j++){
//       if( x[i]==y[j]){
//         tapilmis=true;
//         break;
//     } else{
//         tapilmis=false;
//     } 
//   }
//    if (tapildi == false) {
//       dogruluk = false;
//       break;
//     }
//   }

// }else{
//     console.log("beraber deyil uzunluqlari sehvdir");
// }

// if(dogruluk){
//   console.log("true");
// }else{
//   console.log("false");
// }

// let x = prompt("Enter a name");
// let y = prompt("Enter a name");

// let dogruluk = true;
// // salam alams
// if (x.length == y.length) {
//   for (let i = 0; i < x.length; i++) {
//     let tapildi = false;
//     for (let j = 0; j < y.length; j++) {
//       if (x[i] == y[j]) {
//         tapildi = true;
//         break;
//       }
//     }
//     if (tapildi == false) {
//       dogruluk = false;
//       break;
//     }
//   }
// } else {
//   console.log("beraber deyil uzunluqlari sehvdir");
//   dogruluk = false;
// }

// if (dogruluk) {
//   console.log("true");
// } else {
//   console.log("false");
// }
          //0   1      2
// let arr = [1, [2, [3, 4, 5, 6, 7, 8, 9]]];

// let newarr=[];

// newarr.push(arr[0]); // 1
// newarr.push(arr[1][0]);
// newarr.push(arr[1][1]); // 2
// console.log(newarr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 2 array olsun 1 dovr, 1 sert ile arraylerdeki diff elementleri tapin

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [6, 7, 8, 9, 10, 20];

// let sonarr= [];  
// for (let i = 0; i < arr1.length; i++) {
//     let tapildi = false;
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] == arr2[j]) {
//             tapildi = true;
//             break;
//         }
//     }
//     if (!tapildi) {
//         sonarr.push(arr1[i]);
//     }
// }
// let newarr2=[];
// for (let i = 0; i < arr2.length; i++) {
//     let tapildi = false;
//     for (let j = 0; j < arr1.length; j++) {
//         if (arr2[i] == arr1[j]) {
//             tapildi = true;
//             break;
//         }
//     }
//     if (!tapildi) {
//         sonarr.push(arr2[i]);
//     }
// }
// console.log(sonarr); // [1, 2, 3, 4, 5]




// ,some , every, reduce, find slice, splice, join,

// let arr 0 ,1 ,2 ,3 ,4
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newarr = arr.map((item) => {
//     return item * 2;
// });
// console.log(newarr); // [2, 4, 6, 8, 10, 12, 14, 16, 18]


// concat 
//  let arr1 = [1, 2, 3];
//   let arr2 = [4, 5, 6];
//   let arr3 = arr1.concat(arr2);
//   console.log(arr3); // [1, 2, 3, 4, 5, 6]

  // pop 
  // let arr = [1, 2, 3, 4, 5];
  // let lastElement = arr.pop();
  // console.log(lastElement); // 5
  // console.log(arr); // [1, 2, 3, 4]
  // // shift
  // let arr = [1, 2, 3, 4, 5];  
  // let firstElement = arr.shift();
  // console.log(firstElement); // 1
  // console.log(arr); // [2, 3, 4, 5]

  // // unshift
  // let arr = [1, 2, 3, 4, 5];
  // arr.unshift(20);
  // console.log(arr); // [20, 1, 2, 3, 4, 5]
  // // indexOf
  // let arr = [1, 2, 3, 4, 5];
  // let index = arr.indexOf(3);
  // console.log(index); // 2
  // // lastIndexOf    2        5
  // let arr = [1, 2, 3, 4, 5, 3,5,6,3,4,5];
  // let lastIndex = arr.lastIndexOf(3);
  // console.log(lastIndex); // 8
  // includes
// let arr1 = [1, 2, 3, 6];
// let arr2 = [2, 4, 6, 8];

// // arr1-dəki hansı elementlər arr2-də var?
// let common = arr1.filter(item => arr2.includes(item));

// console.log(common); // [2, 6]



// ,some , every, reduce, find slice, splice, join,

// some 
//  let arr = [1, 2, 3, 4, 5];
// let hasEven = arr.some(item => item % 2 === 0);
// console.log(hasEven); // true

// every
//  let arr = [1, 2, 3, 4, 5];
// let allEven = arr.every(item => item % 2 === 0);
// console.log(allEven); // false
// // reduce   0  1  2  3  4
//  let arr = [1, 2, 3, 4, 5];
//  let basket=0;
//  for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]*2;
//  }
// let sum = arr.reduce((i, heminindeksdekideyer => i + heminindeksdekideyer, 0);
// console.log(sum); // 15

// const nesebirfunkisya(){
  

// }


// let nesebirfunkisya = () => {

// }
// let x=5;
// const function arrowlar (y){
//   x

// }

//  const arrowlar = (arr1, arr2) => {arr1 + arr2}

// find slice, splice, join,
// find 
//  let arr = [1, 2, 3, 4, 5];
//   let found = arr.find(item => item = 3);
//   console.log(found); // 4

// // slice
//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let sliced = arr.slice(1, 6);
//   console.log(sliced); // 





// splice     0  1           
  // let arr = [1, 2, , 7, 8, 9, 10];
  // arr.splice(1,4);
  // console.log(arr); // [1, 6, 7, 8, 9, 10]

  // join
//    let arr = [1 , 2, 3, 4, 5];
//     let joined = arr.join("salam");
//     // Nəticə:
//                 // "1salam2salam3salam4salam5" 

// let str = "salamsalamslams";
// let newarr = str.split("s");
// console.log(newarr); // ["", "alam", "alam", "lam"]
// let eded="1,2,3,4,5,6,7,8,9";
// let newarr2 = eded.split(",");
// console.log(newarr2); // ["1", "2", "3", "4", "5", "6", "7", "8", "9"]