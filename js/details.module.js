import { Ui } from "./ui.module.js";
export class Details{
    constructor(id){
        this.ui = new Ui();

        document.getElementById("btnClose").addEventListener("click", () => {
            // document.querySelector(".games").classList.remove("d-none");
            // document.querySelector(".details").classList.add("d-none");
            $(".Games").removeClass("d-none");
            $(".details").addClass("d-none");
         });
         this.getDetails(id);
    }
   async getDetails(id) {
        // const loading = document.querySelector(".loading");
        // loading.classList.remove("d-none");
        $(".load").removeClass("d-none");
  
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'dcfc05c621msh2b0d7924cb2a1b1p107921jsn6f98c6a22928',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            }
        };
        let res =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        .then((res) => res.json())
        .then((res) => this.ui.displayDetails(res))
        .catch((err) => console.error(err))
        .finally(() => {
            $(".load").addClass("d-none");
        });
            
     }
}