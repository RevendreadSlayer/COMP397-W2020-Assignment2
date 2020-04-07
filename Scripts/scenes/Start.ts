module scenes 
{
    export class Start extends objects.Scene
     {
         //Private instance members
        private _gameTitle: objects.Label;
        private _gameTitleShadow: objects.Label;
        private _playBtn: objects.Button;
        private _exitBtn: objects.Button;
        private _instructionBtn: objects.Button;


        
         
        //Public Properties

        //Constructor
        constructor() 
        {
            
            super();
            //Initialization    
            // this.gameTitle = new objects.Label();
            // this.gameTitleShadow=new objects.Label();
            // this.playBtn=new objects.Button();
            // this.exitBtn=new objects.Button();
            // this.instructionBtn=new objects.Button();

            

            this.Start();
        }
        //Private methods


        //Public methods
        public Start(): void 
        {
            this._gameTitleShadow = new objects.Label("JET Rider", "90px", "Consolas", "#000000", 245, 320, true);

            this._gameTitle = new objects.Label("JET Rider", "90px", "Consolas", "#FF3030", 240, 315, true);
            
            this._playBtn = new objects.Button(config.Game.ASSETS.getResult("playButton"), 140, 400, true);
            
            this._exitBtn = new objects.Button(config.Game.ASSETS.getResult("exitButton"), 220, 400, true);
            
            this._instructionBtn = new objects.Button(config.Game.ASSETS.getResult("instructionButton"), 300, 400, true);
            
            
            this.Main();
        }

        public Update(): void 
        {
            //this.player.Update();

            //managers.Collision.AABBCheck(this.player, this.playBtn);

        }
        public Main(): void 
        {
            //Title

            this.addChild(this._gameTitleShadow);


            this.addChild(this._gameTitle);

            //button

            this.addChild(this._playBtn);
            this._playBtn.on("click", () => {
                config.Game.SCENE = scenes.State.PLAY;
            })

            this.addChild(this._exitBtn);
            this._exitBtn.on("click", () => {
                config.Game.SCENE = scenes.State.END;
            })

            this.addChild(this._instructionBtn);
            this._instructionBtn.on("click",() => {
                config.Game.SCENE = scenes.State.INSTRUCTION;
            })
        }

    }
}