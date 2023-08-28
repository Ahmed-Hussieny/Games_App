// // let recipesList = []
// // async function getData(type = 'pizza') {
   // // let myReq = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${type}`)
// //     let Data = await myReq.json()



// //     recipesList = Data.recipes
// //     // console.log(recipesList);
// //     display()
// // }
// // getData()
// // function display() {
// //     let temp = ""
// //     recipesList.forEach((element) => {
// //         temp += `<div class="col-md-3">
// //         <div  data-bs-toggle="modal" data-bs-target="#exampleModal" recipeId="${element.recipe_id}" class="item bg-info text-center">
// //             <img src="${element.image_url}" class="w-100" alt="${element.title}">
// //             <h6>${element.title}</h6>

// //         </div>
// //     </div>`
// //     })
// //     document.getElementById("myData").innerHTML = temp
// //     getItems()


// // }

// // function getItems() {
// //     let items = document.querySelectorAll(".item")
// //     items.forEach((el) => {
// //         el.addEventListener("click", function () {

// //             let id = this.getAttribute("recipeId")

// //             console.log(id);
// //             getDetails(id)
// //         })
// //     })
// //     console.log(items);

// // }

// // let DataDetails = {}

// // async function getDetails(id) {
// //     let myReq = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
// //     let Data = await myReq.json()
// //     DataDetails = Data.recipe
// //     displayDetails()
// // }

// // function displayDetails(){

// //     let temp = ""
// //     DataDetails.ingredients.forEach((Elment) => {
// //         temp += `<li>${Elment}</li>`
// //     })

// //     document.getElementById("ingredients").innerHTML = temp
// //     document.getElementById("title").innerHTML = DataDetails.title
// //     document.getElementById("myImage").setAttribute("src", DataDetails.image_url)

// //     let urlTemp = `<a target="_blank" href="${DataDetails.publisher_url}"> ${DataDetails.publisher} </a>`
// //     document.getElementById("url").innerHTML = urlTemp
// // }


// // let navlist = document.querySelectorAll(".nav-link")
// // navlist.forEach((el) => {
// //     el.addEventListener("click", function (e) {
// //         let typeCategory = e.target.getAttribute("typeRecipe")
// //         console.log(typeCategory);
// //         getData(typeCategory)
// //     })
// // })








// let newsList = []
// let type = "business"
// let country = "us"
// async function getNews(country = "us", category = "business") {
//     let req = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1d2c37a4a4874379acb400eb87870c4d`)
//     let data = await req.json()
//     newsList = data.articles
//     // console.log(newsList);
//     display()
// }
// // getNews()
// function display() {
//     let temp = ""
//     newsList.forEach((el) => {

//         temp += `
//         <div class="col-md-3">
//             <div class="item border">
//                 <img src="${el.urlToImage == null ? "images/portfolio-1.jpg" : el.urlToImage}" class="w-100" alt="">
//                <a href="${el.url}"><h6>${el.title}</h6></a> 
//                 <p>${el.description != null ? el.description : ""}</p>
//             </div>
//         </div>
// `
//     })
//     document.getElementById("myData").innerHTML = temp
// }

// let navlist = document.querySelectorAll(".nav-link")

// navlist.forEach((element) => {
//     element.addEventListener("click", function () {
//         type = this.getAttribute("type")
//         console.log(type);
//         getNews(country, type)
//     })
// })

// let countryElement = document.querySelector("#country")

// countryElement.addEventListener("change", function () {
//     country = countryElement.value

//     getNews(country, type)
// })











// // spread op
// // ...


// let product1 = {
//     nameproduct: "nokia",
//     price: 5000,
//     colors: ["red", "blue"],
//     obj: {
//         taxs: 0.15,
//         extra: 500
//     }
// }

// let { obj, nameproduct, colors } = product1
// let { taxs } = obj
// let [color1, color2,color3] = colors
// console.log(extra);

//-----------------------------------------------------------------------/MEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE//

// let foodLis=[];
// async function getData(type='pizza'){
//     let myData = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${type}`);
//     let Data =await myData.json();
//     foodLis=Data.recipes
//     console.log(foodLis)
//     displayData();

// }

// getData();

// function displayData(){
//     let temp="";
//     foodLis.forEach((el)=>{
//         temp+=`<div class="col-md-3">
//                 <div  data-bs-toggle="modal" data-bs-target="#exampleModal" recipeId="${el.recipe_id}" class="item bg-info text-center">
//                     <img src="${el.image_url}" class="w-100" alt="${el.title}">
//                     <h6>${el.title}</h6>
        
//                 </div>
//             </div>`
//     })
//     document.getElementById("myData").innerHTML=temp;
//     getItems()
// }
// function getItems(){
//     let items=document.querySelectorAll('.item');
//         items.forEach((el)=>{
//             el.addEventListener("click",function(e){
//                 let id =this.getAttribute("recipeId");
//                 getingredianse(id)

//             })
// })
//     console.log(items)
// }
// let navList = document.querySelectorAll(".nav-link");
// navList.forEach((el)=>{
//     el.addEventListener("click",function(e){
//        let type=e.target.getAttribute("typerecipe");
//        getData(type);
//     })
// })
// async function getingredianse(id){
//     let myreq = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
//     let Data= await myreq.json();
//    let ingData=Data.recipe.ingredients;
//     console.log(Data.recipe.ingredients);
//     displayDetails(Data);
   
// } 
// function displayDetails(Data){
//     let temp="";
//     Data.recipe.ingredients.forEach((el)=>{
//         temp+=` <li>${el}</li>`
//     })
//     document.getElementById("ingredients").innerHTML=temp;
//     document.getElementById("myImage").setAttribute("src",Data.recipe.image_url)
//     document.getElementById("exampleModalLabel").innerHTML=(Data.recipe.title)

//     let urlTemp=`<a target="_blank" href="${Data.recipe.publisher_url}">${Data.recipe.publisher}</a>`
//     document.getElementById("url").innerHTML=urlTemp;
// }


//-----------------------------------------------------------------------/MEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE/-------------NEWS/
import { Games } from "./games.module.js";
let l=new Games()