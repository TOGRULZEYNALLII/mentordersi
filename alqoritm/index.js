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

// join ,splice , slice, find, reduce, every, some, map, filter, forEach, flat, flatMap, fill, copyWithin, indexOf, lastIndexOf, includes, concat, push, pop, shift, unshift

// yeni mentor  dersi  bazar gunu 18 may 
//43. Array icerisinde en kicik ededi tapin
// let arr=[1,0,3,4,5,0,-2];
// let min=arr[0]; //==1

// for(let i=0;i<arr.length;i++){
//   if(arr[i]<min){
//     min=arr[i];
//   }
// }
// console.log(min)

// 44. Array icersisinde sonu 9 olan nece elemet var
// let arr=[123,45679,456,899,678,569];
// let count =0;
// for(let i=0;i<arr.length;i++){
//   let reminder= arr[i]%10
//   if(reminder==9){
//     count++
//   }
// }
// console.log(count);


// 45. Array icerisinde nece cut element var
// let arr=[1,2,3,4,5,6,7,8,9,200];
// let say=0;
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0){
//   say++;
//   }

// }
// console.log(say)


// 46. Array icerisinde nece tek element var

// let arr=[1,2,3,4,5,6,7,8,9,200,7];
// let say=0;
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0){
//     continue;
//   }else{
//     say++;
//   }

// }
// console.log(say)

// 47. Arrayin elementlerinin hamisin cut olub olmadigina baxin
//  let arr=[1,2,3,4,5,6,7,8,10,200]; 
//  let arr2=[2,4,6,8,10,12,14];
//  let cutluk=true;
//  arr2.map((element)=>{
//   if(element%2==0){
//   }else{
//     cutluk=false;
//   }
//  }
// )
 
  // for(let i=0;i<arr2.length;i++){
  //   if(arr2[i]%2==0){
  //     continue;
  //   }else{
  //     cutluk=false;
  //   }
  // }
  // if(cutluk==true){
  //   console.log("array elemntleri cutdur");
  // }else{
  //   console.log("arrayin elementleriin hamisi cut deyil");
  // }


  // 48. Array icerisindeki tek ededlerin cemini tapin
//   let arr=[1,2,3,4,5,6,7,8];
// let basket=0;
//   arr.map((element)=>{
//     if(element%2!=0){
//       basket=basket+element;
//     }
//   })
// console.log(basket)

// 49. Array icerisindeki tam ededlerin cemini tapin

// let arr= [10,22,23.5,45.6,450];
// let basket=0;
// arr.map((element)=>{
//   element=element*10
//   if(element%10==0){
//     element=element/10;
//     basket=basket+element;
//   }
// })

// console.log(basket);

// 50. Array icerisinde nece element oldugunu tapin
// let arr=[1,2,3,4,5,6];
// count=0;
// for(let i=0;i<100;i++){
//   if(arr[i]){
//     count++
//   }
// }
// console.log(count)
// 51. Istifadeci 0 daxil edenedek edelerin cemini tapin
// let x = 2;
// let basket=0;
// while (x != 0) {
//   x = +prompt("ededi daxil et");
//   basket=basket+x;
// }
// console.log(basket)


// 53. Arraydaki ededlerin ededi ortasini tapin
// let arr=[2,4,4,6];
// let basket=0;
// arr.map((element)=>{
// basket =basket+element;

// })
// let edediOrta=basket/arr.length;
// console.log(edediOrta)


// 72. Qarışıq array verilib, yalnızca stringləri çap etdirin
// let arr=[1,2,4,"dsfsdf","g",6,7,true];
// arr.map((element)=>{
//   if(typeof(element)==="string"){
//     console.log(element)
//   }
    
// })

// 73. Arrayda metodlar ile ededleri 5 vahid artirmaq
// let arr = [1, 2, 3, 4, 5];

// arr.map((element)=>{
//   element=element+5;
// console.log(element)
// })
 
 
// console.log(transposeMatrix([[1,2,3], [4,5,6], [7,8,9]])); // [[1,4,7], [2,5,8], [3,6,9]]
//  let arr=[1,2,3];
//  let arr2=[4,5,6];
//  let arr3=[7,8,9];
//  let newarr1=[];
//  let newarr2=[];
//  let newarr3=[];
//   newarr1.push(arr[0]);
//   newarr1.push(arr2[0]);
//   newarr1.push(arr3[0]);

//    newarr2.push(arr[1]);
//   newarr2.push(arr2[1]);
//   newarr2.push(arr3[1]);

//     newarr3.push(arr[2]);
//   newarr3.push(arr2[2]);
//   newarr3.push(arr3[2]);

//    console.log(newarr1,newarr2,newarr3)

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let sifirnci1=[array1[0]];
// let birlesmisArray = sifirnci1.concat(array2[0]);
// console.log(birlesmisArray); // [1, 4]
//  sifirnci1=[array1[1]];
// let birlesmisArray2 = sifirnci1.concat(array2[1]);
// console.log(birlesmisArray2)

// sifirnci1=[array1[2]]

// let birlesmisarray3=sifirnci1.concat(array2[2]);
// console.log(birlesmisarray3)

          //0     1          2
        //0 1 2   0 1 2   0 1 2
        // cetin sual 
// let arr=[[1,2,3],[4,5,6],[7,8,9]];
// let birinicihedliarr=[];
// let ikincihedliarr=[];
// let ucuncuhedliarr=[];

// for(let i=0;i<arr.length;i++){
//   birinicihedliarr.push(arr[i][0])
// }

// for(let i=0;i<arr.length;i++){
//   ikincihedliarr.push(arr[i][1])
// }

// for(let i=0;i<arr.length;i++){
//   ucuncuhedliarr.push(arr[i][2])
// }
// console.log(birinicihedliarr,ikincihedliarr,ucuncuhedliarr)

// let arr=[6,7,102,104,105,106,107];

// let basket=0;
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>100){
//     if(arr[i]%3==0){
//       basket=basket+arr[i];
//     }
//   }
// }
// console.log(basket)

// let arr = [6, 7, 102, 104, 105, 106, 107];
 
// let basket = arr
//   .filter(x => x > 100 && x % 3 === 0)
//   .reduce((sum, x) => sum + x, 0);

// console.log(basket); // 207


// const data={
//   student:[
//     {
//       name:"Togrul",
//       surname:"Zeynalli",  
//       email:"zzzzttttt63@gmail.com",
//     },
//     {
//       name:"Ayan",
//       surname:"Zeynallova",
//       email:"sss@gmail.com"

//     }
//   ],
//   teacher:[],
// }
// data.student[0].nickname="Togrul";
// data.teacher[0];
// console.log(data.student[0])

// const Togrul={
//   name:"Togrul",
//   surname:"Zeynalli",
//   email:"zzzzttttt63@gmail.com",
//   age:23
// }
// delete Togrul.age;


 // mentor dersi 21 may ///////////////////////////////////////////////////////////////////////////////////////////////
// array copy etmek 
//  let arr=[10,2,3,4,5,6,1]; 
//  let arr2=[];

//  for(let i=0;i<arr.length;i++){
//   arr2.push(arr[i]);
//  }
//  ////// 
//  console.log(arr2); // [10, 2, 3, 4, 5, 6, 1]


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((a, b) => (a + b), 0);
// console.log(sum);
// let arr = [1, 2, 327322222, 4, 5, 6, 7, 8, 9];
// arr.forEach((element)=>{
//   console.log(element);
// })


    // Verilmiş array-də neçə dəfə 5 rəqəmi təkrarlanıb?


// let arr = [10, 1, 2, 33,5,5,5,5,5, 44 , 5 , 5];
// const forEach = arr.forEach(s => {
//     if(s == 5){
//         console.log(s)
//     }
// })
// Verilmiş array-də bütün elementləri vergül ilə birləşdirib bir string yarat (join).
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = arr.join(",");
// console.log(str);  // "1,2,3,4,5,6,7,8,9"  

    // Verilmiş array-də təkrarlanan elementləri tap (yalnız unikal olanları göstər).
  //  let arr = [1, 2, 3, 4,4,4,4, 5, 6, 7, 8, 9, ];

  //  for (let i = 0; i < arr.length; i++) {
  //   let count = 0;
  //      for (let j = 0; j < arr.length; j++) {
  //          if (arr[i] === arr[j]) {
  //              count++;
  //          }
  //      }
  //      if (count === 1) {
  //          console.log(arr[i]);
  //      }
  //  }

      // Verilmiş string-lərdən ibarət array-i əlifba sırası ilə düz (sort).
      // let strArr = ["b", "a", "c"];
      // strArr.sort();
      // console.log(strArr); 

          // Verilmiş array-də elementlərdən biri 0-dırsa, "var" əks halda "yoxdur" de.
          // Verilmiş array-də splice ilə 2-ci elementdən başlayaraq 3 elementi sil.
          // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          // arr.splice(1, 3);
          // console.log(arr); // [1, 5, 6, 7, 8, 9] 
          // Verilmiş array-də 2-ci elementdən başlayaraq 3 elementi silin və onları yeni array-ə əlavə edin.

        // Verilmiş array-də elementlərdən biri 0-dırsa, "var" əks halda "yoxdur" de.


        // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        // if(arr.includes(0)){
        //     console.log("var")
        // }else{
        //     console.log("yoxdur")
        // }

            // Verilmiş array-dəki ən böyük 3 ədədi tap.

            // Verilmiş array-dəki ən böyük 3 ədədi tap.
            // let arr = [1, 23,2, 3, 4, 5, 6, 7, 8, 9];        
            // arr.sort((a, b) => a - b);
            // //  1,2,3,4,5,6,7,8,9,23
            // console.log(arr[arr.length-1]); // 23
            // console.log(arr[arr.length-2]); // 9
            // console.log(arr[arr.length-3]); // 8

                // Verilmiş array-də ədədlərin hansı biri 3-ə bölünür və həm də 5-ə bölünmür?
                // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                // for(let i=0;i<arr.length;i++){
                //     if(arr[i]%3==0 && arr[i]%5!=0){
                //         console.log(arr[i])
                //     }
// }


// funksiyalar

// function topla(a, b) {
//     return a + b;
// }

// function cix(a, b) {
//     return a - b;
// }

// function vur(a, b) {
//     return a * b;
// }

// function bol(a, b) {
//     if (b === 0) {
//         return "0-a bolmek olmaz";
//     }
//     return a / b;
// }

// topla(5, 10); // 15
// cix(10, 5); // 5
// vur(5, 10); // 50
// bol(10, 2); // 5


// tek yoxsa cut
// function tekYoxsaCut(eded) {
//     if (eded % 2 === 0) {
//         return "cut";
//     } else {
//         return "tek";
//     }
// }
// tekYoxsaCut(5); // "tek"
// tekYoxsaCut(10); // "cut"

// Array içindəki ədədlərin cəmini hesablayan funksiya yaz.

// function cem(arr) {
//     let toplam = 0;
//     for (let i = 0; i < arr.length; i++) {
//         toplam += arr[i];
//     }
//     return toplam;
// }
// cem([1, 2, 3, 4, 5]); // 15


// Verilən bir sözün tərsini (məsələn: "salam" → "malas") qaytaran funksiya yaz.
// function tersSöz(söz) {
//     let ters = "";
//     for (let i = söz.length - 1; i >= 0; i--) {
//         ters += söz[i];
//     }
//     return ters;
// }
// // tersSöz("salam"); // "malas"
 
// Bir cümlədə neçə söz olduğunu hesablayan funksiya yaz. 

// function cumledeSozSay(cumle) {
//    let sozler=cumle.split(" ");
//    return sozler.length;
// }
//   console.log(cumledeSozSay("salam bu uzun bir cumledir"));

//   function cumledeSozSay(cumle) {  
//     let cumlesozsayi=0;
//     let count = 0;
//     for (let i = 0; i < cumle.length; i++) {
//         if (cumle[i] == " ") {
//           count++;
//         }
//     }
//     return count + 1; // Söz sayını tapmaq üçün boşluqların sayına 1 əlavə edirik
//   }
// console.log(cumledeSozSay("salam bu uzun bir cumledir ss"



// // tarix hansi byukdur 
// function tarixHansiByukdur(tarix1, tarix2) {
//   if (tarix1 > tarix2) {
//     return "tarix1 daha büyüktür";
//   } else if (tarix1 < tarix2) {
//     return "tarix2 daha büyüktür";
//   } else {
//     return "her iki tarix eynidir";
//   }
// }
// let input1 = prompt("tarix1 daxil edin (YYYY-MM-DD formatında):");
// let input2 = prompt("tarix2 daxil edin (YYYY-MM-DD formatında):");
// tarix1 = new Date(input1);
// tarix2 = new Date(input2);
// console.log(tarixHansiByukdur(tarix1, tarix2)); // "tarix2 daha büyüktür"   