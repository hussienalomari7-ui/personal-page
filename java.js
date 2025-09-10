
function changeColorIf() {
    const color = prompt("أدخل لونًا (أحمر، أزرق، أخضر):");
    
    if (color === "أحمر") {
        document.getElementById("myBox").style.backgroundColor = "#e74c3c";
    } else if (color === "أزرق") {
        document.getElementById("myBox").style.backgroundColor = "#3498db";
    } else if (color === "أخضر") {
        document.getElementById("myBox").style.backgroundColor = "#2ecc71";
    } else {
        alert("اللون غير معروف!");
    }
}


function changeColorSwitch() {
    const randomNum = Math.floor(Math.random() * 4);
    
    switch(randomNum) {
        case 0:
            document.getElementById("myBox").style.backgroundColor = "#9b59b6";
            break;
        case 1:
            document.getElementById("myBox").style.backgroundColor = "#f1c40f";
            break;
        case 2:
            document.getElementById("myBox").style.backgroundColor = "#e67e22";
            break;
        case 3:
            document.getElementById("myBox").style.backgroundColor = "#1abc9c";
            break;
    }
}


function changeColorFor() {
    const colors = ["#ff7979", "#7ed6df", "#badc58", "#f6e58d"];
    const box = document.getElementById("myBox");
    
    for (let i = 0; i < colors.length; i++) {
        setTimeout(function() {
            box.style.backgroundColor = colors[i];
        }, i * 1000);
    }
}

function resetColors() {
    document.getElementById("myBox").style.backgroundColor = "";
}