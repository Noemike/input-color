/*
HTML

let color= $('input').css("background-color", "blue")

$('button').click (() => {
    color
});

<input id='input' type="text">
<button>Change color</button>
    

$('button').click (() => {
    $('input').css("background-color","pink")
});*/


function changeBackground() {
    var color = document.getElementById("color").value; // cached

    // The working function for changing background color.
    document.bgColor = color;

    // The code I'd like to use for changing the text simultaneously - however it does not work.
    document.getElementById("coltext").style.color = color;
}

document.getElementById("submitColor").addEventListener("click", changeBackground, false);