var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p3button = document.getElementById("p3");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var limit = document.getElementById("limit");
var input = document.querySelector("input");
var p1=0; var p2=0; var gameover=false; 

p1button.addEventListener("click",function(){
	if(!gameover) ++p1; 
	p1display.textContent = p1;
	if(p1==limit.textContent){
		p1display.style.color = "green"; gameover=true;
	}
});

p2button.addEventListener("click",function(){
	if(!gameover) ++p2; 
	p2display.textContent = p2;
	if(p2==limit.textContent){
		p2display.style.color = "green"; gameover=true;
	}
});

function reset(){
	p1=0; p2=0;
	p1display.textContent = 0; p2display.textContent = 0; 
	p1display.style.color = "black"; p2display.style.color = "black"; gameover=false;
}

p3button.addEventListener("click",function(){
	reset();
});

input.addEventListener("change",function(){
	limit.textContent=input.value;
	reset();
});

