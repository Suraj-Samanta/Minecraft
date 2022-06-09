var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 10;
player_y = 10;
player_x = 10;
var block_image_object = "";
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
 player_object = Img;
 player_object.scaleToWidth(150);
 player_object.scaleToHeight(140);
 player_object.set({
     top:player_y,
     left:player_x

 });
 canvas.add(player_object);   
    });
}
    function new_Image(get_Image){
        fabric.Image.fromURL(get_Image, function(Img){
            block_image_object = Img;
            block_image_object.scaleToWidth(block_image_width);
            block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({
                top:player_y,
                left:player_x
            });
            canvas.add(block_image_object);
        });
    }
window.addEventListener("keydown",keyboard );
function keyboard(e)
{
    key= e.keyCode;
    console.log(key);
    if(e.shiftKey == true && key =='77')
    {
        console.log("M and Shift are pressed together");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_height").innerHTML=block_image_height;
        document.getElementById("current_width").innerHTML= block_image_width;


    }
    if(e.shiftKey == true && key == '80')
    {
        console.log("P and Shift are pressed together");
        block_image_height = block_image_height - 5;
        block_image_width = block_image_width - 5;
        document.getElementById("current_height").innerHTML = block_image_height;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if (key == '37')
    {
        left();
        console.log("left");
    }
    if(key == '38')
    {
        up();
        console.log("up");
    }
    if(key == '39')
    {
        right();
        console.log("right");
    }
    if(key == '40')
    {
        down();
        console.log("down");
    }
    if(key == '84')
    {
        new_Image('trunk.jpg');
        console.log("t");
    }
    if(key == '68')
    {
        new_Image('dark_green.png');
        console.log("d");
    }
    if(key == '76')
    {
        new_Image('light_green.png');
        console.log("l");
    }
    if(key == '71')
    {
        new_Image('ground.png');
        console.log("g");
    }
    if(key == '88')
    {
        new_Image('wall.jpg');
        console.log("w");
    }
    if(key == '89')
    {
        new_Image('yellow_wall.png');
        console.log("y");
    }
    if(key == '82')
    {
        new_Image('roof.jpg');
        console.log("r");
    }
    if(key == '67')
    {
        new_Image('cloud.jpg');
        console.log("c");
    }
    if(key == '85')
    {
        new_Image('unique.png');
        console.log("u");
    }
    function up()
    if(player_y >= 0)
    {
        player_y = player_y - block_image_height;
        console.log("block_image_height = "+ block_image_height);
        console.log("When up arrow key is pressed, X = "+ player_x+", Y ="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
    function down()
    if(player_y <= 500){
        player_y = player_y + block_image_height;
        console("block_image_height"+ block_image_height);
        console.log("When down arrow key is pressed, X = "+ player_x+", Y"+player_y);
        canvas.remove(player_object);
        player_update();
    }
    function left()
    if(player_x >= 0 )
    {
       player_x = player_x + block_image_width;
       console.log("block_image_width"+ block_image_width);
       console.log("When left arrow key is pressed, X = "+ player_x+", Y"+ player_y);
       canvas.remove(player_object);
       player_update();
    }
    function right()
    if(player_x <= 850){
        player_x = player_x - block_image_width;
        console.log("block_image_width"+ block_image_width);
        console.log("When right arrow is pressed, X = "+player_x+", Y"+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}