let navbarLogo = document.querySelector(".logos");
navbarLogo.addEventListener("click", function() {
  
    window.scrollTo({
        top: 0,         
        behavior: 'smooth'  
    });
});
document.getElementById("product-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".navslider2").scrollIntoView({
        behavior: "smooth"
    });
});
document.querySelector(".product2").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".navslider2").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("contact").addEventListener("click", function(event){
   event.preventDefault();
  document.querySelector(".formn").scrollIntoView({
    behavior: "smooth"
  })

})
document.querySelector(".contact2").addEventListener("click", function(event){
   event.preventDefault();
  document.querySelector(".formn").scrollIntoView({
    behavior: "smooth"
  })

})
document.querySelector(".about").addEventListener("click", function(jibran){
    jibran.preventDefault();
    document.querySelector(".ab").scrollIntoView({
        behavior:"smooth"
    })
})
document.querySelector(".home").addEventListener("click", function(jib){
    jib.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});

document.querySelector(".about2").addEventListener("click", function(jib){
    jib.preventDefault();
    document.querySelector(".ab").scrollIntoView({
        
        behavior: "smooth",
    })
});

let products = {
    data:[
        {
        productName:"Hair Strengthening oil",
        category:"Hair",
        price:"250 PKR",
        image: "images data/hair 1.jpg",
        button: "Buy NOW",
        rating: "images/rate3.png",
        
    },
        {
        productName:"Hair Care Bundle",
        category:"sale",
        price:"2550 PKR",
        image: "images data/hair 2.jpg",
        button: "Buy NOW",
        rating: "images/rate2.png",
    
    },
        {
        productName:"Hair Care Bundle",
        category:"Hair",
        price:"3550 PKR",
        image: "images data/hair 3.jpg",
        button: "Buy NOW",
        rating: "images/rate1.png",
    },
        {
        productName:"Makeup Blush Pink",
        category:"Makeup",
        price:"2550 PKR",
        image: "images data/makeup 1.jpg",
        button: "Buy NOW",
        rating: "images/rate1.png",
    },
        {
        productName:"Makeup Blush Cherry Red",
        category:"sale",
        price:"5550 PKR",
        image: "images data/makeup 2.jpg",
        button: "Buy NOW",
        rating: "images/rate2.png",
    },
        {
        productName:"Makeup Blush Brown",
        category:"Makeup",
        price:"4999 PKR",
        image: "images data/makeup 3.jpg",
        button: "Buy NOW",
        rating: "images/rate2.png",
    },
        {
        productName:"Brightening Serum",
        category:"Serum",
        price:"2999 PKR",
        image: "images data/serum 1.jpg",
        button: "Buy NOW",
        rating: "images/rate2.png",
    },
        {
        productName:"Brightening Serum",
        category:"sale",
        price:"2999 PKR",
        image: "images data/serum 2.jpg",
        button: "Buy NOW",
        rating: "images/rate2.png",
    },
        {
        productName:"Brightening Serum",
        category:"sale",
        price:"2999 PKR",
        image: "images data/serum 3.jpg",
        button: "Buy NOW",
        rating: "images/rate1.png",
    },
        {
        productName:"Brightening Serum",
        category:"Serum",
        price:"2999 PKR",
        image: "images data/serum 4.jpg",
        button: "Buy NOW",
        rating: "images/rate3.png",
    },
        {
        productName:"Brightening Serum",
        category:"Serum",
        price:"2999 PKR",
        image: "images data/serum 5.jpg",
        button: "Buy NOW",
        rating: "images/rate2.png",
    },
        {
        productName:"Brightening Serum",
        category:"Serum",
        price:"2999 PKR",
        image: "images data/serum 6.jpg",
        button: "Buy NOW",
        rating: "images/rate2.png",
    },
        {
        productName:"Face Protective SunScreen",
        category:"Sunscreen",
        price:"1999 PKR",
        image: "images data/sunscreen 1.jpg",
        button: "Buy NOW",
        rating: "images/rate3.png",
    },
        {
        productName:"Face Protective SunScreen",
        category:"sale",
        price:"1599 PKR",
        image: "images data/sunscreen 2.jpg",
        button: "Buy NOW",
        rating: "images/rate3.png",
    },
        {
        productName:"Face Protective SunScreen",
        category:"Sunscreen",
        price:"1999 PKR",
        image: "images data/sunscreen 3.jpg",
        button: "Buy NOW",
        rating: "images/rate2.png",
    },


],
};

for(let i of products.data){

    let card = document.createElement("div");
    card.classList.add("card", i.category , "hide");
    let imgContainer=document.createElement("div");
    imgContainer.classList.add("image-container");
    let image= document.createElement("img");
    image.setAttribute("src", i.image);
      
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    let stars=document.createElement("div");
    stars.classList.add("stars-rating");
    let star=document.createElement("img");
    star.setAttribute("src", i.rating);
    stars.appendChild(star);
    card.appendChild(stars)
    let container = document.createElement("div");
    container.classList.add("container");

    let name=document.createElement("h5");
    name.classList.add("product-nam");
    name.innerHTML=i.productName.toUpperCase();
    container.appendChild(name);
    card.appendChild(container);

    let container2 = document.createElement("div");
    container2.classList.add("container2");

    let price=document.createElement("h6");
    price.classList.add("price-product");
    price.innerText = i.price.toUpperCase();
    container2.appendChild(price);
    card.appendChild(container2);
    document.getElementById("products").appendChild(card);

    let container3 = document.createElement("div");
    container3.classList.add("container3");

    let btn=document.createElement("button");
    btn.classList.add("product-btn");
    btn.innerText = i.button.toUpperCase();
    container2.appendChild(btn);
    card.appendChild(container3);

    document.getElementById("products").appendChild(card);
}


function searchProduct() {
    let value = document.getElementById("searchInput").value;
    filterProduct(value);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-insert");
    buttons.forEach((button) => {
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll('.card');
    elements.forEach((element) => {
        let productName = element.querySelector(".product-nam").innerText.toUpperCase();
        let category = element.classList[1].toUpperCase();
        if (value === "" || value.toLowerCase() === "all" || productName.includes(value.toUpperCase()) || category.includes(value.toUpperCase())) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
}
window.onload = () => {
    filterProduct('all');
};

const buttons =document.querySelectorAll(".product-");
const popmain =document.querySelector(".popupmain");
const poptitle =document.querySelector(".popuptitle");
const popdetails =document.querySelector(".popupdetails");
const popbuttons =document.querySelector(".popupbutton");
const close=document.querySelector(".close");

buttons.forEach(button =>{
    button.addEventListener("click" , ()=>{
         
        const productittle=button.getAttribute("data-product");
        const producdetails=button.getAttribute("data-details");
         const producbutton=button.getAttribute("data-button");

        poptitle.textContent= productittle;
        popdetails.textContent = producdetails;
        popbuttons.textContent = producbutton;

        popmain.style.display="flex";
    })
   close.addEventListener("click",()=>{
    popmain.style.display="none";
   })

   popmain.addEventListener('click', (jibran)=>{
    if(jibran.target === popmain){
        popmain.style.display="none";
    }
   })
   popbuttons.addEventListener('click',()=>{
    popmain.style.display="none";
   })

   const btns = document.querySelectorAll(".product-btn ,.popupbutton");
const main = document.querySelector(".more");

btns.forEach(button=>{
    button.addEventListener("click",()=>{
        main.style.display="flex";
    })
    main.addEventListener("click" ,(event)=>{
        if(event.target === main){
            main.style.display="none";
        }
    })
})
})

const hovermain=document.querySelectorAll(".games");

hovermain.forEach(hover =>{


hover.addEventListener("mouseenter",function(event){
        hover.style.opacity= "1";
        hover.classList.add("hover-animation");

})
hover.addEventListener("mouseleave" , function(event){
    hover.style.opacity= "0";
    hover.classList.remove ("hover-animation");
})
})

const btn= document.querySelectorAll(".soldout");
const soldout= document.querySelector(".sold");
btn.forEach(button=>{
    button.addEventListener("click",()=>{
       soldout.style.display="flex";
       
    })
    soldout.addEventListener("click",(event)=>{
       if(event.target === soldout){
        soldout.style.display="none";
       }
    })
})


const ad=new Audio();
ad.src="images/success-1-6297.mp3"

let audios= document.querySelectorAll(".product-btn ,.popupbutton")

audios.forEach(audio =>{
    audio.addEventListener("click",function(){
            ad.play();
    })
})
let Once =false;
window.onload = () => {
    if (Once) return;
    Once = true;
    const see = document.querySelector(".morepoint");
    const moreclose= document.querySelector(".moreclose")
    if (see) {
        see.style.display = "flex";
      
    }
    see.addEventListener("click", (event)=>{
        if(event.target === see){
            see.style.display = "none";
    
        }
        
    })
    moreclose.addEventListener("click",()=>{
        see.style.display="none";
       })
 };