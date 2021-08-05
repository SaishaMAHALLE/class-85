canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
rover_image = "rover.png";

function add() {
    bb = new Image();
    bb.onload = bupload;
    bb.src = background_image;

    rr = new Image();
    rr.onload = rupload;
    rr.src = rover_image;
}

function bupload() {
    ctx.drawImage(bb, 0,0, canvas.width, canvas.height);
}

function rupload() {
    ctx.drawImage(rr, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed == '38') {
        up();
        console.log("up");
    }

    if(keypressed == '40') {
        down();
        console.log("down");
    }

    if(keypressed == '37') {
        left();
        console.log("left");
    }

    if(keypressed == '39') {
        right();
        console.log("right");
    }
}







function up() {
    if(rover_y >= 0) {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed, x = " +rover_x + "and y =" +rover_y);
        bupload();
        rupload();
    }
}

function down() {
    if(rover_y <= 500) {
        rover_y=rover_y +10;
        console.log("when down arrow is pressed, x = " +rover_x + "and y =" +rover_y);
        bupload();
        rupload();
    }
}

function left() {
    if(rover_x >= 0) {
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x = " +rover_x + "and y =" +rover_y);
        bupload();
        rupload();
    }
}

function right() {
    if(rover_x <= 700) {
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, x = " +rover_x + "and y =" +rover_y);
        bupload();
        rupload();
    }
}
