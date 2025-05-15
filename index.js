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

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [6, 7, 8, 9, 10, 20];

let sonarr= [];  
for (let i = 0; i < arr1.length; i++) {
    let tapildi = false;
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
            tapildi = true;
            break;
        }
    }
    if (!tapildi) {
        sonarr.push(arr1[i]);
    }
}
let newarr2=[];
for (let i = 0; i < arr2.length; i++) {
    let tapildi = false;
    for (let j = 0; j < arr1.length; j++) {
        if (arr2[i] == arr1[j]) {
            tapildi = true;
            break;
        }
    }
    if (!tapildi) {
        sonarr.push(arr2[i]);
    }
}
console.log(sonarr); // [1, 2, 3, 4, 5]