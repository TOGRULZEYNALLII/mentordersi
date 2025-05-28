// let count = 0;
// const incrementButton = document.getElementById("btn");
// const decrementButton = document.getElementById("btn2");
// const item = document.getElementById("item");

// function updateDisplay() {
//     if (count >= -10 && count <= 10) {
//         item.innerText = count;
//     } else {
//         item.innerText = "Limit reached";
//     }
// }

// function increment() {
//     count++;
//     updateDisplay();
// }

// function decrement() {
//     count--;
//     updateDisplay();
// }

// incrementButton.addEventListener("click", increment);
// decrementButton.addEventListener("click", decrement);


// let button = document.querySelectorAll("button"); 
// function increment() {
//    if( item.classList.contains("salam")) {
//         item.classList.remove("salam");
//     }
//     else {
//          item.classList.add("salam");
//     }
//    }
//  button.forEach(btn => btn.addEventListener("click", increment))


// 2.	Input-a yazılan mətni canlı göstər:
// İstifadəçi input sahəsinə nə yazırsa, həmin yazı eyni anda ekranda başqa bir <p> tagında görünsün.

// const input = document.getElementById("input");
// const p = document.getElementById("p");

// function elaveet() {
//    p.innerText = input.value;
// }  
// input.addEventListener("input", elaveet);



// 3.	Şəkil dəyişdirici düzəlt:
// Bir düyməyə klik edəndə <img> içindəki şəkil başqa bir şəkillə əvəz olunsun.
// const div = document.getElementById("container");
// const button = document.getElementById("button");
// const arr =[
//    "https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/50_afi_article1_a-guide-to-introducing-two-cats.png",
//    "./image.png"
// ]
// let currentIndex = 0;

// function changeImage() {

//    div.innerHTML=`<img src="${arr[currentIndex]}"></img>`
//    currentIndex++;
//    if(currentIndex >= arr.length) {
//       currentIndex = 0;
//       }
// }

// button.addEventListener("click", changeImage);

// div.classList.add("div-red");

// 4.	Fon rəngi dəyişdirici yaz:
// Müxtəlif rəng düymələrinə klik etdikdə body elementinin fon rəngi dəyişsin.

// const body = document.body;
// const buttons = document.querySelectorAll("button");

// function changeBackgroundColor(button) {
//    if(button.classList.contains("red")) {
//       body.style.backgroundColor = "red";
//    }
//    else if(button.classList.contains("green")) {
//       body.style.backgroundColor = "green";
//    }
//    else if(button.classList.contains("blue")) {
//       body.style.backgroundColor = "blue";
//    }

// }

// buttons.forEach(button => {
//      button.addEventListener("click", () => changeBackgroundColor(button));
// });   



// 5.	Parol gücü göstər:
// İstifadəçi parol input sahəsinə yazdıqca, gücünü (zəif, orta, güclü) text və rənglə göstər.


// const p = document.getElementById("p");
// const input = document.getElementById("input");
// function checkPasswordStrength() {
//       if(input.value.includes("*")){
//          p.textContent="password is strong enough"
//       }else{
//          p.textContent="password is too weak!"
//       }
// }
 

// input.addEventListener("input", checkPasswordStrength);

// 6.	Random sitat generatoru hazırla:
// “Yeni Sitat” düyməsinə klik etdikdə, random motivasiyaedici sitatlardan biri DOM-da göstərilsin.


// const arr =[
//    "salam necesiniz?",
//    "yaxsiyam siz necesiz?",
//    "you must be strong!!!"
// ]

// const button=document.getElementById("button");
// const p=document.getElementById("p");
// let count=0;
// function randomselecter(){
//    p.innerText=`${arr[count]}`
//    count=Math.floor(Math.random() * arr.length)
// }

// button.addEventListener("click",randomselecter)



// 7.	Dropdown seçimi ilə məlumat göstər:
/* <select> ilə bir şəhər seçildikdə, alt hissədə şəhər haqqında qısa məlumat göstər. */

// const p= document.getElementById("p");
// const select = document.getElementById("city-select");

// select.addEventListener("change", function() {
//     p.innerText = select.value;
// });

// 8.	Mouse ilə hover edəndə məlumat göstər:
// Bir elementin üzərinə mouse gətirildikdə əlavə məlumat göstərilsin, çəkiləndə gizlənsin.


// const h1 = document.querySelector("h1");
// const h2 = document.querySelector("h2");

// const p = document.querySelector("p");

// h1.addEventListener("mouseover",function() {
   
//  p.textContent="Baki azerbaycanin paytaxtidir";
// });


// h2.addEventListener("mouseover",function() {
//    p.textContent="Gence azerbaycanin ikinci en boyuk seheridir";
// });

// h1.addEventListener("mouseout",function() {
//    p.textContent="";
// });

// h2.addEventListener("mouseout",function() {
//    p.textContent="";
// });


// 9.	Dark/Light mode keçidi et:
// Bir düyməyə klik etdikdə saytın rəngi dark və light mövzusu arasında dəyişsin.

// const body = document.body;

// const button = document.getElementById("button");

// button.addEventListener("click", function() {
//    if(body.style.backgroundColor === "black") {
//       body.style.backgroundColor = "white";
//    }
//    else {
//       body.style.backgroundColor = "black";
//    }
// });

// 10.	Klaviatura ilə basılan düyməni göstər:
// İstifadəçi klaviaturada hansısa düyməyə basdıqda, DOM-da həmin düymənin adı görünsün.
// 5,7,8,10

const p = document.getElementById("p");
const input = document.getElementById("input");

input.addEventListener("keydown", function(e) {
   p.textContent = `Pressed key: ${e.key}`;
});
