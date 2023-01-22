// Script for Crausol starts here
let arr = ["https://assets.tatacliq.com/medias/sys_master/images/45554503090206.jpg","https://assets.tatacliq.com/medias/sys_master/images/45584595386398.jpg","https://assets.tatacliq.com/medias/sys_master/images/45581158940702.jpg","https://assets.tatacliq.com/medias/sys_master/images/45581159006238.jpg","https://assets.tatacliq.com/medias/sys_master/images/45581158809630.jpg","https://assets.tatacliq.com/medias/sys_master/images/45584593518622.gif"]

slider(arr);

function slider(arr){
    let crausol = document.getElementById("slider");
    console.log(crausol)
    let img = document.createElement("img");
    let x = 0;
    setTimeout(()=>{
        img.setAttribute("src",arr[0])
    },0)
        setInterval(()=>{
            if(x==6){
            x=0;
        }
        img.setAttribute("src",arr[x++])
    },3000)
    crausol.append(img);
}
// Script for Crausol Ends here


// script for offers section cards 
function offers(){
let right = document.getElementById("off-btnright");
let left = document.getElementById("off-btnleft");
let imgs = document.getElementById("off-img");

let L = 0;
left.addEventListener("click",()=>{
    imgs.style.transform = `translateX(${L = L-275}px)`;
})

right.addEventListener("click",()=>{
    imgs.style.transform = `translateX(${L = L+275}px)`;
})
}
offers();
// script for offers section cards


// Deals Wells Section
function DealsWells(){
    let right = document.getElementById("D-right");
    let left = document.getElementById("D-left");
    let imgs = document.getElementById("dealweels");

    let L = 0;
    left.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L-275}px)`;
    })
    
    right.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L+275}px)`;
    })
}

DealsWells();
// Deals Wells Section

// New on order Karo Section 
function Newon(){
    let right = document.getElementById("new-right");
    let left = document.getElementById("new-left");
    let imgs = document.getElementById("new-on-ok");

    let L = 0;
    left.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L-275}px)`;
    })
    
    right.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L+275}px)`;
    })
}
Newon();
// New on order Karo Section 

// Featured Brands section
function featuredBrands(){
    let right = document.getElementById("F-right");
    let left = document.getElementById("F-left");
    let imgs = document.getElementById("F-Brands");

    let L = 0;
    left.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L-275}px)`;
    })
    
    right.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L+275}px)`;
    })
}
featuredBrands();
// Featured Brands section

//Popular Piqs Section

function Popular(){
    let right = document.getElementById("P-right");
    let left = document.getElementById("P-left");
    let imgs = document.getElementById("P-Brands");

    let L = 0;
    left.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L-275}px)`;
    })
    
    right.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L+275}px)`;
    })
}
Popular();

//Popular Piqs Section

// WomensWear By Order Karo section
// FIRST SLIDER

function wfirstslider(){
    let right = document.getElementById("w1-right");
    let left = document.getElementById("w1-left");
    let imgs = document.getElementById("first-WS");

    let L = 0;
    left.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L-275}px)`;
    })
    
    right.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L+275}px)`;
    })
}
wfirstslider();

// FIRST SLIDER
// SECOND SLIDER

function wsecondslider(){
    let right = document.getElementById("w2-right");
    let left = document.getElementById("w2-left");
    let imgs = document.getElementById("second-WS");

    let L = 0;
    left.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L-275}px)`;
    })
    
    right.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L+275}px)`;
    })
}
wsecondslider();

// SECOND SLIDER
// WomensWear By Order Karo section


// MensWear By Order Karo section
// FIRST SLIDER

function mfirstslider(){
    let right = document.getElementById("m1-right");
    let left = document.getElementById("m1-left");
    let imgs = document.getElementById("first-mS");

    let L = 0;
    left.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L-275}px)`;
    })
    
    right.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L+275}px)`;
    })
}
mfirstslider();

// FIRST SLIDER
// SECOND SLIDER

function msecondslider(){
    let right = document.getElementById("m2-right");
    let left = document.getElementById("m2-left");
    let imgs = document.getElementById("second-mS");

    let L = 0;
    left.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L-275}px)`;
    })
    
    right.addEventListener("click",()=>{
        imgs.style.transform = `translateX(${L = L+275}px)`;
    })
}
msecondslider();

// SECOND SLIDER
// MensWear By Order Karo section
