var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor(); 
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<colors.length;++i){
		squares[i].style.backgroundColor = colors[i];
		var k = i+colors.length;
		squares[k].style.display = "none";
	}
});

hardBtn.addEventListener("click", function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor(); 
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<colors.length;++i){
		squares[i].style.backgroundColor = colors[i];
	}
	for(var i=3;i<colors.length;++i){
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(colors.length);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0;i<squares.length; ++i){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;++i){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to the squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor===pickedColor){
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
			resetButton.textContent = "PLAY AGAIN";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	//loop through all the squares
	for(var i=0;i<squares.length;++i){
		//change each color to match the clicked color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0;i<num;++i){
		//get the random colors and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var red=Math.floor(Math.random()*256);
	//pick green from 0-255
	var green=Math.floor(Math.random()*256);
	//pick blue from 0-255
	var blue=Math.floor(Math.random()*256);
	//"rgb(r, g, b)"
	return "rgb("+red+", "+green+", "+blue+")";
}
