(function (){
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    
    function Start():void{
        console.log("Test game started--->");
        stage = new createjs.Stage(canvas);
        
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        Main();
    }

    function Update():void{
        stage.update();
    }

    function Main():void{
        console.log("Test Main--->");
    }


    //Call back function
    window.addEventListener("load", Start);

})();