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
    let txt = document.getElementById("text");
    txt.style.backgroundColor = "beige"

});

document.getElementById("btn6").addEventListener("click", function() {
    let img = document.getElementById("img")
    if (img.src === "https://i.pinimg.com/474x/49/26/7a/49267aed4812d9c11ac4a8d7db23d0c5.jpg") {
        img.src = "https://i.pinimg.com/474x/d8/a3/7e/d8a37e27e18a6649d1f6edf4d7e8d83c.jpg";  
    }
    else if (img.src ==="https://i.pinimg.com/474x/d8/a3/7e/d8a37e27e18a6649d1f6edf4d7e8d83c.jpg" )
    {
        img.src = "https://i.pinimg.com/474x/41/16/52/411652ca81182f1b9dd9b70f18e70a40.jpg"; 
    }});