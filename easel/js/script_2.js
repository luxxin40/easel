function init(){
	console.log("Javascript for page 2 loaded")
	var stage = new createjs.Stage("easel");
	var container = new createjs.Shape();
	var bar = new createjs.Shape();
	var sentence = new createjs.Text();

	container.graphics.beginStroke("white").setStrokeStyle(10, 1, 1);
	container.graphics.mt(100, 200).lt(700, 200).lt(700, 260).lt(100, 260).cp();
	container.shadow = new createjs.Shadow("#878787", 5, 5, 0);

	sentence.text = "LOADING";
	sentence.color = "white";
	sentence.font = "bold 100px 'Dosis'";
	sentence.x = 225;
	sentence.y = 300;
	sentence.shadow = new createjs.Shadow("#878787", 5, 5, 0);


	for(var i = 0; i < 30; i++){
		bar.graphics.beginFill("white").drawRect(i*15+110, 210, 10, 40);
	}

	createjs.Tween.get
	// bar.graphics.beginFill("white").drawRect(110, 210, 10, 40).drawRect(125, 210, 10, 40);

	createjs.Ticker.setFPS(160);
    createjs.Ticker.addEventListener("tick", stage);

	stage.addChild(container);
	stage.addChild(bar);
	stage.addChild(sentence);
}