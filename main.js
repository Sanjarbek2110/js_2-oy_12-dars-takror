// Asinxron va sinxron funksiyalar

// console.log("1");
// // setTimeout(() => {
// //     console.log("2");
// // },1000)
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res => res.json())
// .then(data => {
//     console.log( data , "2");
// })
// console.log("3");

// async await

// console.log("1");


// // },1000)
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res => res.json())
// .then(data => {
//     console.log( data , "2");
// })

// console.log("1");

// async function renderApi(){
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//         const data = await res.json()
//         console.log(data , "2");
        
//     }
//     catch(error){
//         console.log("Xatolik" , error);
        
//     }
//     console.log("3");
// }
// renderApi()

// const wrapper = document.querySelector("#users")
// async function renderUser(url) {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();

//         console.log(data.results);

//         data.results.forEach(item => {
//             wrapper.innerHTML += 
//             `
//             <p>
//             <h2>${item.name.title} ${item.name.first} ${item.name.last}</h2>
//             </p>
//             `
//         });

        

//     } catch (error) {
//         console.log("xatoli" ,error);
        
//     }finally{
// console.log("Jonka");

//     }
    
// }
// renderUser("https://randomuser.me/api/")

const wrapper = document.getElementById("users");

function showLoading() {
  wrapper.innerHTML = `
    <li class="flex justify-center gap-4 items-center text-[20px] pt-[200px] p-10">Loading
      <span class="loading loading-spinner text-neutral text-center"></span>
    </li>
  `;
}

async function renderUser(url) {
  showLoading(); // ⏳ Avval loading chiqsin

  setTimeout(async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      // 🔄 wrapper ni yangilaymiz
      wrapper.innerHTML = "";

      data.results.forEach((element) => {
        wrapper.innerHTML += `
          <li class="flex flex-col items-center  pt-5 ">
              <img src="${element.picture.large}" class="rounded-full mb-5">
              <p class="text-[30px] font-semibold">${element.name.first} ${element.name.last}</p>
              <p class="text-[25px] font-semibold text-green-400 mb-5">Frontend Developer</p>

              <span class="w-full border border-black opacity-40 mb-1"></span>

                <div class="flex gap-2 text-left items-end mr-auto mb-1">
                    <p class="text-[20px] font-bold">Phone: </p>
                    <span class="text-[18px]">${element.phone}</span>
                </div>

                <div class="flex gap-2 text-left items-end mr-auto mb-1">
                    <p class="text-[20px] font-bold">Yoshi: </p>
                    <span class="text-[18px]">${element.dob.age}</span>
                </div>

                <div class="flex gap-2 text-left items-end mr-auto mb-1">
                    <p class="text-[20px] font-bold">Manzil: </p>
                    <span class="text-[18px]">${element.location.city}, ${element.location.country}</span>
                </div>

                <a href="${element.email}" class="flex gap-2 text-left items-end mr-auto mb-7">
                    <p class="text-[20px] font-bold">Email: </p>
                    <span class="text-[18px]">${element.email}</span>
                </a>

              <button class="btn btn-primary w-full change">Change user</button>
          </li>
        `;
      });

      // Tugmalarni qayta ulaymiz
      const btns = document.querySelectorAll(".change");
      btns.forEach(btn => {
        btn.addEventListener("click", () => {
          renderUser("https://randomuser.me/api/");
        });
      });

    } catch (error) {
      wrapper.innerHTML = `<p class="text-red-500">Xatolik yuz berdi!</p>`;
    }
  }, 1500); // ⏳ 3 soniya kutib render qilish
}

// Ilk yuklash
renderUser("https://randomuser.me/api/");
