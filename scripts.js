/*function changeBackground () {
    let color=document.getElementById("input").value;
    document.bgColor = color;
    document.getElementById("button").style.color = color;
}

document.getElementById('button').addEventListener("click", changeBackground, false);*/

$('#btnChangeColor').click(() => {
    let backGroundColor = $("#inpColor").val();
    $("#btnChangeColor").css("background-color", backGroundColor)
});
