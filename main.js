// 1 
let h1 = document.querySelector("h1");
h1.setAttribute("class","text-blue");
// 2
let h3 = document.querySelector("h3");
h3.addEventListener("dblclick",() => {
    h3.setAttribute("class","text-error");
});
// 3
let p = document.querySelector("p");
p.setAttribute("class","text-style");
// 4
let p1 = document.querySelectorAll("p")[1];
span2 = p1.querySelectorAll("span")
span2.forEach(el => {
    el.addEventListener("click",() => {
        el.setAttribute("class","bolder");
    })
});
// 5
let p2 = document.querySelectorAll("p")[2];
span3 = p2.querySelectorAll("span")
span3.forEach(el => {
    el.addEventListener("click",() => {
        el.setAttribute("class","bolder-red");
    });
});