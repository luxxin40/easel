function init(){
	console.log("Javascript loaded");
	var stage = new createjs.Stage("easel");
	var shape = new createjs.Shape();
	var sec = new createjs.Shape();
	var third = new createjs.Shape();
	var sentence = new createjs.Text();

	var oneX = 200;
	var oneY = 200;
	
	// makes a tick-tac-toe shape
	// shape.graphics.beginStroke("white").setStrokeStyle(10, 1);
	// shape.graphics.mt(200-50, 100).lt(200-50, 400);
	// shape.graphics.mt(300-50, 100).lt(300-50, 400);
	// shape.graphics.mt(100-50, 200).lt(400-50, 200);
	// shape.graphics.mt(100-50, 300).lt(400-50, 300);
	// shape.graphics.endStroke();

	// shape.graphics.beginStroke("white").setStrokeStyle(10, 1);
	// shape.graphics.arc(95, 145, 30, 0, Math.PI*2);
	// shape.graphics.mt(200-25, 100+20).lt(250-25, 150+20).mt(250-25, 100+20).lt(200-25, 150+20);


	// stage.onPress = function() {
	// 	shape.graphics.arc(ev.stageX, ev.stageY; 30, 0, Math.PI*2);
	// }

	sentence.text = "LOADING";
	sentence.color = "white";
	sentence.font = "bold 80px 'Dosis'"
	sentence.x = 165;
	sentence.y = 250;
	sentence.shadow = new createjs.Shadow("#878787", 5, 5, 0);

	shape.graphics.beginFill("white").drawCircle(oneX, oneY, 20);
	shape.shadow = new createjs.Shadow("#878787", 5, 5, 0);
	shape.regX = oneX;
	shape.regY = oneY;
	shape.x = oneX;
	shape.y = oneY;
	shape.scaleX = 1;
	shape.scaleY = 1;
	var tweenOne = createjs.Tween.get(shape)
	.to({scaleX: 1.5, scaleY: 1.5}, 400, createjs.Ease.backIn)
	.wait(00)
	.to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.backOut)
	.wait(00)

	sec.graphics.beginFill("white").drawCircle(300, 200, 20);
	sec.shadow = new createjs.Shadow("#878787", 5, 5, 0);
	sec.regX = 300;
	sec.regY = 200;
	sec.x = 300;
	sec.y = 200;
	sec.scaleX = 1;
	sec.scaleY = 1;
	var tweenTwo = createjs.Tween.get(sec)
	.wait(200)
	.to({scaleX: 1.5, scaleY: 1.5}, 400, createjs.Ease.backIn)
	.wait(00)
	.to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.backOut)
	.wait(00)

	third.graphics.beginFill("white").drawCircle(400, 200, 20);
	third.shadow = new createjs.Shadow("#878787", 5, 5, 0);
	third.regX = 400;
	third.regY = 200;
	third.x = 400;
	third.y = 200;
	third.scaleX = 1;
	third.scaleY = 1;
	var tweenThree = createjs.Tween.get(third)
	.wait(400)
	.to({scaleX: 1.5, scaleY: 1.5}, 400, createjs.Ease.backIn)
	.wait(00)
	.to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.backOut)
	.wait(00)

	var timeline = new createjs.Timeline();
	timeline.addTween(tweenOne, tweenTwo, tweenThree);
	timeline.loop = -1;

	createjs.Ticker.setFPS(160);
    createjs.Ticker.addEventListener("tick", stage);

	stage.addChild(shape);
	stage.addChild(sec);
	stage.addChild(third);
	stage.addChild(sentence);
}