mouseEvent = "empty";

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = black;
width = 5;
radius = 10;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("thickness").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        console.log("Current X and Y co-ordinates are - ");
        console.log("X = " + current_mouse_x + " Y = " + current_mouse_y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_mouse_x, current_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}