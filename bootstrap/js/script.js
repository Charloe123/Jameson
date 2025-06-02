


const Button = document.getElementById("alert-button");
const menu = document.getElementById("contents");
const closeBtn = document.querySelector(".close-Modal");




function openModal(){
    menu.style.display="flex";
    
}


 
function closeModal(){
    menu.style.display="none";
}



Button.addEventListener("click",openModal);

closeBtn.addEventListener("click",closeModal);

const cardDetails =[
    {
        Image:"images/whiskey/whiskey1.png",
        heading:"select reserve",
       
        paragraph:"Select Reserve is a tripple br distilled blend of rich pot still br and grain whiskey that is br matured in a mixture of sherry br casks and bourbon barrells",
        Button:"order now",
        rating:"4",
        

    },

    {
        Image:"images/whiskey/whiskey2.png",
        heading:"Limited Reserve",
        paragraph:"Matured for 18 years in hand- br selected aak casks from Europe br and America,this rare Whiskey br is finishes in first-fill bourbon <br> <br>",
        Button:"order now",
        rating:"4",
        

    },


    {
        Image:"images/whiskey/whiskey3.png",
        heading:"Limited Reserve",
        paragraph:"A rich and chewy entry in the br Jameson range, with three br styles of pot still spirit carefully br balanced <br> <br> <br>",
        Button:"order now",
        rating:"4",
        

    },



    {
        Image:"images/whiskey/whiskey4.png",
        heading:"Gold Reserve",
        paragraph:"This is a smooth,spicy 12 br year old blended Irish br whiskey with a good content br of pure postpill <br> <br> <br> ",
        Button:"order now",
        rating:"4",
        

    },


];
//cards
function cardsCreation() {
    const container = document.getElementById("cardsContainer");

    cardDetails.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
         

        let star ='';
        for (let i = 0; i < 5; i++){
            if (i < Math.floor(card.rating)){
                star += '<span class="star filled">★</span'
            }
            else{
                star += '<span class="star">☆</span>'
            }

        }




        cardElement.innerHTML = `
            <img src="${card.Image}" alt="${card.heading}">
           
            <h2>${card.heading}</h2>
            <div class="star">${star}</div>
            <p>${card.paragraph}</p>
             <button>${card.Button}</button>
        `;

        container.appendChild(cardElement);
    });
}
document.addEventListener("DOMContentLoaded",cardsCreation());





       



        
    

const cardContent =[
    {
        Image:"images/second-whiskey/whiskey6.png",
        heading:"Caskmates",
        paragraph:"Jameson Caskmate Stout and br IPA edition-triple distilled br whiskey you love finish in br craft beer barrels ",
        Button:"order now",
        rating:"4",
        

    },

    {
        Image:"images/second-whiskey/whiskey0.png",
        heading:"Blender's Dog",
        paragraph:"Blender,round,creamy br mouthfeelscotch, giving way to br the prickle of the pot still spices <br> <br> ",
        Button:"order now",
        rating:"4",
        

    },


    {
        Image:"images/second-whiskey/second-whiskey/whiskey7.png",
        heading:"Bkack burrel",
        paragraph:"Is our coopers, br who painstakingly give their br bourbon barrels an additional br charring to reveal their untodl br richness ",
        Button:"order now",
        rating:"4",
        

    },



    {
        Image:"images/second-whiskey/whiskey9.png",
        heading:"Crested",
        paragraph:"Crested is a tribute to the first br drops bottled at The Bow br Sreet Destillery and it is br Jameson's oldest distillery bottled brand",
        Button:"order now",
        rating:"4",
        

    },


];
//cards
function cardsMaking() {
    const container = document.getElementById("cardsMaking");

    cardContent.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        let star ='';
        for (let i = 0; i < 5; i++){
            if (i < Math.floor(card.rating)){
                star += '<span class="star filled">★</span'
            }
            else{
                star += '<span class="star">☆</span>'
            }

        }

        cardElement.innerHTML = `
            <img src="${card.Image}" alt="${card.heading}">
            <h2>${card.heading}</h2>
             <div class="star">${star}</div>
            <p>${card.paragraph}</p>
            <button>${card.Button}</button>
        `;

        container.appendChild(cardElement);
    });
}
document.addEventListener("DOMContentLoaded",cardsMaking());





       
const cardMenu=[
    {
        Image:"images/second-whiskey/Ellipse 1.png",
       
        paragraph:"Jameson Gold Reserve br Remarkably, it lingers br with the assence of br milk chocolate and br butterscotch <br> <br> <br> ",
        heading:"David Beckam",
        rating:"4",

        

    },

    {
        Image:"images/second-whiskey/Ellipse 2.png",
       
        paragraph:"My go-to cocktail. br The best everyday br whiskey in the world <br> <br> <br> <br>  <br>                                                      ",

        heading:"Jordan Sancho",
        rating:"4",
        

    },


    {
        Image:"images/second-whiskey/Ellipse 3.png ",
        heading:"",
        paragraph:"Excellent Irish whiskey.But if br you have to dilute there is nothing br better than Jamison and ginger ale br with a slice of lime! And if you are in br Northern Ireland,visit the distillery, br great tour ",
        heading:"Serena Williams",
        Button:"order now",
        rating:"4",
       
        

    },

];


function carding() {
    const container = document.getElementById("carding");

    cardMenu.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        let star ='';
        for (let i = 0; i < 5; i++){
            if (i < Math.floor(card.rating)){
                star += '<span class="star filled">★</span'
            }
            else{
                star += '<span class="star">☆</span>'
            }

        }


        cardElement.innerHTML = `
            <img src="${card.Image}" alt="${card.heading}">
            <div class="star">${star}</div>
            <p>${card.paragraph}</p>
             <h6>${card.heading}</h6>
            
        `;

        container.appendChild(cardElement);
    });
}
document.addEventListener("DOMContentLoaded",carding());

        
    
















