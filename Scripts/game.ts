//IIFE - Immediately Invoked Function Expression
//means - > self-executiong anonymous function

(function (){
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    
    
    let currentSceneState:scenes.State;
    let currentScene:objects.Scene;

    let assets:createjs.LoadQueue;

    let assetManifest =
    [
        {id:"playButton", src:"./Assets/images/playButton.png"},
        {id:"exitButton", src:"./Assets/images/exitButton.png"},
        {id:"instructionButton", src:"./Assets/images/instructionButton.png"},
        {id:"backButton", src:"./Assets/images/backButton.png"},
        {id:"road", src:"./Assets/images/ROAD.gif"},
        {id:"Player", src:"./Assets/images/Player.png"},
        {id:"button",src:"./Assets/images/button.png"}

    
    ];

    function Preload():void
    {
        assets = new createjs.LoadQueue();
        config.Game.ASSETS = assets;
        assets.installPlugin(createjs.Sound);
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    
    
    function Start():void{
        console.log("Test game started--->");
        stage = new createjs.Stage(canvas);
        
        createjs.Ticker.framerate = config.Game.FPS;
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);

        currentSceneState = scenes.State.No_SCENE;

        config.Game.SCENE = scenes.State.START;
    }
    function Update():void
    {
        if(currentSceneState != config.Game.SCENE)
        {
            Main();
        }
        currentScene.Update();
                
                


        stage.update();
    }

    function Main():void{
        console.log("Change Scene--->");
        
       //clean up
        if(currentSceneState != scenes.State.No_SCENE)
        {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }
       //Switch to the new scene
       switch(config.Game.SCENE)
       {
            case scenes.State.START:
                console.log("Switch to Start");
                currentScene = new scenes.Start();
                console.log("Switch over");
               break;
            
            case scenes.State.PLAY:
                currentScene = new scenes.Play();
                break;

            case scenes.State.INSTRUCTION:
                console.log("Switch to INSTRUCTION");
                currentScene = new scenes.Instruction();
                console.log("Switch over");
                break;
            case scenes.State.END:
                console.log("Switch to END");
                currentScene = new scenes.END();
                console.log("Switch over");
                break;
       }

        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);
    }


    //Call back function
    window.addEventListener("load", Preload);

})();