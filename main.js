document.getElementById("btn1").addEventListener("click", function() {
    let txt = document.getElementById("text");
    txt.textContent = "Hello";  
});

document.getElementById("btn2").addEventListener("click", function() {
    let txt = document.getElementById("text");
    txt.style.fontSize = "40px"
});

document.getElementById("btn3").addEventListener("click", function() {
    let txt = document.getElementById("text");
    txt.style.fontSize = "16px"
});

document.getElementById("btn4").addEventListener("click", function() {
    let txt = document.getElementById("text");
    txt.style.color = "hotpink"
});

document.getElementById("btn5").addEventListener("click", function() {
    let bdy = document.body;
    bdy.style.backgroundColor = "beige"

});

document.getElementById("btn6").addEventListener("click", function() {
    let img = document.getElementById("img")
    img.src = "https://i.pinimg.com/474x/e8/e8/f8/e8e8f8e7ee539900ea6ac4fe4a02de17.jpg"
});