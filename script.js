let one = document.getElementById("one")

console.log(one);

let two = document.getElementsByClassName("two")

console.log(two);

let peragraph = document.getElementsByTagName("p")

console.log(peragraph[0]);

let java = document.querySelectorAll(".two")

console.log(java[0]);

console.log(java[1]);

console.log(java[2]);

let btn = document.querySelector(".btn")
let box = document.querySelector(".box")
let result = document.querySelector(".result")


btn.addEventListener("click", function() {
         console.log(box.value);    
    }
)

let votting = document.querySelector(".votting")
let btns = document.querySelector(".btns")

btns.addEventListener("click", function () {
        if (votting.value >= 18) {
            console.log( "You Are Eligible For Vote" );
        }else{
            console.log( "You Are Not Eligible For Vote" );
        }
    
    }
)

let text = "JavaScript (JS) is a lightweight interpreted \"or just-in-time compiled\" programming language with first-class functions.";

document.getElementById("double-coteshon").innerHTML = text; 