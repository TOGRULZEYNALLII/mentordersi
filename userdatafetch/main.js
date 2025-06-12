const data =document.querySelector("#data");
const show =document.querySelector("#show");
const tbody =document.querySelector("#tbody")
const users =[
        {   
        id:1,
        name:"Togrul",
        surname:"Zeynalli",
        age:21,
        gender:"Male"
    },  
    {        id:2,
         name:"Lala",
        surname:"Malakova",
        age:23,
        gender:"Female"
    },
      {
        id:3,
         name:"Murad",
        surname:"Abilov",
        age:25,
        gender:"Male"
    },
      {
                id:4,
         name:"Gulay",
        surname:"Necefova",
        age:18,
        gender:"Female"
    },
]

console.log(users)
console.log(data[1])

users.forEach(element => {
      tbody.innerHTML +=
      `<tr>
         <td> ${element.id}</td>
         
         <td>${element.name}  </td>
         <td>${element.surname}</td> 
         <td> ${element.age} </td>    
         <td> ${element.gender}</td>
    </tr>
    `;
});
//  for(let i=0;i<users.length;i++){
//     data.innerHTML +=`gender: ${users[i].gender} <br>
//     age: ${users[i].age} <br>
//     name: ${users[i].name} <br> surname: 
//     ${users[i].surname } <br>----<br>` ;
//     }
// show.addEventListener('click',()=>{
//     for(let i=0;i<users.length;i++){
//     data.innerHTML +=`gender: ${users[i].gender} <br>
//     age: ${users[i].age} <br>
//     name: ${users[i].name} <br> surname: 
//     ${users[i].surname } <br>----<br>` ;
//     }

// });


