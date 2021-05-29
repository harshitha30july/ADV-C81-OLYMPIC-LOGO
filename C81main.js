var canvas = document.getElementById("mylogo");
var cntx = canvas.getContext("2d");


color = "blue";

cntx.beginPath();
cntx.strokeStyle = color;
cntx.lineWidth = 5;
cntx.arc(200, 200, 50, 0, 30 * Math.PI);
cntx.stroke();

color = "yellow";

cntx.beginPath();
cntx.strokeStyle = color;
cntx.lineWidth = 5;
cntx.arc(250, 250, 50, 0, 30 * Math.PI);
cntx.stroke();

color = "red";

cntx.beginPath();
cntx.strokeStyle = color;
cntx.lineWidth = 5;
cntx.arc(430, 200, 50, 0, 30 * Math.PI);
cntx.stroke();


color = "black";

cntx.beginPath();
cntx.strokeStyle = color;
cntx.lineWidth = 5;
cntx.arc(315, 200, 50, 0, 30 * Math.PI);
cntx.stroke();

color = "green";

cntx.beginPath();
cntx.strokeStyle = color;
cntx.lineWidth = 5;
cntx.arc(380, 250, 50, 0, 30 * Math.PI);
cntx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("x= " + mouse_x + " y=" + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
    cntx.beginPath();
    cntx.strokeStyle = color;
    cntx.lineWidth = 2;
    cntx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    cntx.stroke();
}

function clear_area() {
    cntx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("insideclear");
}
