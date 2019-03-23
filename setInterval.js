var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = 10;
var y = 20;
var direction = 1;//controls the direction
var callMain = true;//variable to call main only one time, otherwise clicking button 
					//more than once would accelerate the box
var setIntervalVar;//variable needed to control start/stop drawing
    

function draw() {
  
	ctx.fillStyle = 'white';//clears the canvas
	ctx.fillRect(0,0,400,400);
	ctx.fillStyle = "rgba(0,200,0,1)";//style for a green box
	ctx.fillRect (x,y,50,50);//draw the rectangle
	if ((x>350)||(x<0)){direction=direction*(-1);}//reverse direction if boundary touched
	x=x+direction;
	ctx.font = "30px Arial";
	ctx.fillStyle = "rgba(0,0,0,1)";
	ctx.fillText(x,10,200);
     
}

start = function () {
    if (callMain){
		setIntervalVar = setInterval(draw, 3);//controls the loop, the number is the time 
											//in miliseconds for redrawing the canvas
	}
	callMain = false;
};

stop = function () {
	clearInterval(setIntervalVar);
	callMain = true; //to enable to start again if start button is pressed
}

