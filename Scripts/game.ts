//IIFE - Immediately Invoked Function Expression
//means - > self-executiong anonymous function

(function (){
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let gameTitle:objects.Label;
    let gameTitleShadow:objects.Label;
    let playBtn:objects.Button;
    let exitBtn:objects.Button;
    let instructionBtn:objects.Button;

    
    function Start():void{
        console.log("Test game started--->");
        stage = new createjs.Stage(canvas);
        
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        Main();
    }

    function CheckBounds():void
    {
        
    }
    function Update():void{
        
        stage.update();
    }

    function Main():void{
        console.log("Test Main--->");

        gameTitleShadow = new objects.Label("JET Rider", "60px","Consolas","#000000",245,325,true)
        stage.addChild(gameTitleShadow)
        gameTitle = new objects.Label("JET Rider", "60px", "Consolas", "#FF3030",240,320,true);
        stage.addChild(gameTitle);
        
        //button
        playBtn = new objects.Button("./Assets/images/playButton.png",160,400,true);
        stage.addChild(playBtn);
        playBtn.on("click",function () 
            {
                playBtn.rotation +=5;
            }
        );

        exitBtn = new objects.Button("./Assets/images/exitButton.png",220,400,true);
        stage.addChild(exitBtn);
        exitBtn.on("click",function()
            {

            }
        );

        instructionBtn = new objects.Button("./Assets/images/instructionButton.png",280,400,true);
        stage.addChild(instructionBtn);
        instructionBtn.on("click", function()
            {

            }
        );

        //Vector2 testing
        let vector = new objects.Vector2(300, 400);
        console.log(vector.magnitude);
        console.log(vector.normalized());
        let vector2 = new objects.Vector2(300,550);
        console.log(objects.Vector2.sqrDistance(vector,vector2));
        console.log(vector.toString());
    }


    //Call back function
    window.addEventListener("load", Start);

})();