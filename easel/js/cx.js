var stage;
var strips;
var negStrips;
var loadtxt;
var negTxt;
var colorList = ["#c64949", "#db824e", "#dbd34e", "#57db4e", "#4ebedb", "#4e5edb", "#a04edb"];
var shadowList = ["#661c1c", "#7a3e16", "#7a6912", "#256817", "#176868", "#172068", "#651768"];

function init(){
	console.log("cx.js loaded");
	stage = new createjs.Stage("easel");

	makeStrips();
	makeTxt();

	makeNegS();
	makeNegT();

	stage.update();
	createjs.Ticker.setFPS(160);
    createjs.Ticker.addEventListener("tick", stage);
}

function makeStrips(){
	for(var i = 0; i < 7; i++){
		strips = new createjs.Shape();
		strips.graphics.beginFill(colorList[i]).drawRect(0, i * 105, 500, 100);
		stage.addChild(strips);
	}
}

function makeTxt(){
	for(var i = 0; i < 7; i++){
		loadtxt = new createjs.Text();
		loadtxt.text = "LOADING . . .";
		loadtxt.color = "white";
		loadtxt.font = "bold 60px 'Dosis'"
		loadtxt.x = 50;
		loadtxt.y = i * 105 + 5;
		loadtxt.shadow = new createjs.Shadow(shadowList[i], 4, 4, 0);
		stage.addChild(loadtxt);
	}
}

function makeNegS(){
	for(var i = 0; i < 7; i++){
		negStrips = new createjs.Shape();
		negStrips.graphics.beginFill("white").drawRect(500, i * 105, 500, 100);
		stage.addChild(negStrips);
	}
}

function makeNegT(){
	for(var i = 0; i < 7; i++){
		negTxt = new createjs.Text();
		negTxt.text = "LOADING . . .";
		negTxt.color = shadowList[i];
		negTxt.font = "bold 60px 'Dosis'"
		negTxt.x = 550;
		negTxt.y = i * 105 + 5;
		negTxt.shadow = new createjs.Shadow(colorList[i], 4, 4, 0);
		stage.addChild(negTxt);
	}
}