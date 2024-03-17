let btn = document.querySelector("button");
let para = document.querySelector("p");
btn.addEventListener("click",() => {
    // let red = Math.floor(Math.random()*256);
    // let green = Math.floor(Math.random()*256);
    // let blue =  Math.floor(Math.random()*256);
    const randomNum = Math.floor(Math.random()*16777215);
    const randomCode ="#"+randomNum.toString(16);
//    colour= para.innerText= `rgb(${red},${green},${blue})`
colour= para.innerText= randomCode  ;
   let rgb =document.querySelector("body");
   rgb.style.backgroundColor=colour;
   navigator.clipboard.writeText(randomCode);
})

