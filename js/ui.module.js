export class Ui{
    displayGames(data){
        let GameBox = "";
        let x = "b,b";
        x = x.replace(",", " ");
        console.log(x); // Output will be "b,b"
        
        data.forEach((e)=>{
           
           let disc = e.short_description;
           disc = disc.replace(",", " ");
           disc = disc.split(' ');
let sevenWords = disc.slice(0, 7).join(' ');
            GameBox += `
            <div class="col-lg-3 col-md-4 ">
            <div id="${e.id}" class="Gitem overflow-hidden h-100 pt-3 px-3 border-2 border-dark rounded border">
                <div class="imgg">
                    <img src="${e.thumbnail}" class="w-100 rounded-2 " alt="">
               </div>
               <div class="pt-3 ">
                <div class="d-flex justify-content-between align-items-baseline">
                    <p class="text-white fs">${e.title}</p>
                    <button type="button" class="btn btn-sm btn-info fs">Free</button>
                </div>
                <p class="text-secondary fs">${sevenWords}</p>
               </div>
               <hr width="100%" color="#0d0d0d" size="5">

               <div class="d-flex justify-content-between align-items-center">
                <p class="fs text-white bg-secondary px-2 rounded-pill ">${e.genre}</p>
                <p class="fss text-white bg-secondary px-2 rounded-pill ">${e.platform}</p>
               </div>
            </div>
        </div>
        
            `
        })
        document.getElementById("myData").innerHTML = GameBox;
    }
    displayDetails(data) {
        const content = `
        <div class="col-md-4 ">
        <img src="${data.thumbnail}" class="w-100" alt="image details" />
     </div>
     <div class="col-md-8 text-white">
        <h3 class="text-white">Title: ${data.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
        <p class="small">${data.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
     </div>
        
        `;
  
        document.getElementById("detailsContent").innerHTML = content;
     }
}