var stage;
var shape;
var colorNum = 0;
var colorLoop = setInterval(colorTimer, 1000);
var things = setInterval(makeShapes, 1000);
var colors = ["#9b4545","#ad783e","#acbc42","#49a048","#3ea58a","#448bba","#563fbf","#cc5dca"];

function init(){
	console.log("Javascript Loaded");
	stage = new createjs.Stage("easel");
	shape = new createjs.Shape();
	makeShapes();
	moveShapes();

	createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}

function selColor(){
	if(colorNum > 0){
		return 1;
	}else{
		return -7
	}
}

function makeShapes(){
	shape.graphics.beginFill(colors[colorNum]).drawRect(-1600, 0, 1600, 1200);
	stage.addChild(shape);
	stage.update();
	document.querySelector("body").style.backgroundColor = colors[colorNum - selColor()];
}

function moveShapes(){
	createjs.Tween.get(shape, {loop:true})
      .to({x: 1600}, 1000, createjs.Ease.getPowInOut(5))
      // .to({x: 0, y: 0}, 500, createjs.Ease.cubicOut)
}

function colorTimer(){
	if(colorNum <= 6){
		colorNum++;
	}else{
		colorNum = 0;
	}
}

