import { Details } from "./details.module.js";
import { Ui } from './ui.module.js';
// import {Details} from "./details.module.js"
export class Games{

    constructor(){
        this.getGames("mmorpg");
      
        document.querySelectorAll(".navbar-nav a").forEach((el)=>{
            el.addEventListener("click",()=>{
                this.category =  el.name;
                $(".navbar-nav a").not(this).removeClass("active");
                $(el).addClass("active");
                //tary2a
                /*  eltaniaaa
                 document.querySelector(".menu .active").classList.remove("active");
                 e.target.classList.add("active");
             */
            this.getGames(this.category)
           
            })
        })
        this.ui = new Ui();
        // this.details = new Details();
    }
  async  getGames(category){
    // const loading = document.querySelector(".loading");
    // loading.classList.remove("d-none");
    $(".load").removeClass(".d-none");
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dcfc05c621msh2b0d7924cb2a1b1p107921jsn6f98c6a22928',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            ,  Accept: "application/json",
            "Content-Type": "application/json",
        }
    };
    let req= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)
    const result = await req.json();
        console.log(result);
        this.ui.displayGames(result);
        this. startEvent();
        $(".load").addClass("d-none");
}
    startEvent(){
        document.querySelectorAll(".Gitem").forEach((item)=>{
            item.addEventListener("click",()=>{
                const idd = item.id;
                console.log(idd)
                this.showDetailse(idd);
                console.log(idd);
                console.log("::::")
            })
        })
    }
    showDetailse(id){
        const details = new Details(id);
        $(".Games").addClass("d-none");
        $(".details").removeClass("d-none");
    }

}