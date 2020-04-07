module scenes 
{
    export class END extends objects.Scene
     {
         //Private instance members
        gameOverTitle: objects.Label;
        
        
        backButton: objects.Button;


        
         
        //Public Properties

        //Constructor
        constructor() 
        {
            
            super();
           
            

            this.Start();
        }
        //Private methods


        //Public methods
        public Start(): void 
        {
            this.gameOverTitle = new objects.Label("GAME OVER", "90px", "Consolas", "#000000", 245, 320, true);

            
            this.backButton = new objects.Button(config.Game.ASSETS.getResult("backutton"), 240, 400, true);
            
            
            this.Main();
        }

        public Update(): void 
        {
           
        }
        public Main(): void 
        {
            //Title

            this.addChild(this.gameOverTitle);
            //button

            this.addChild(this.backButton);
            this.backButton.on("click", () => {
                config.Game.SCENE = scenes.State.START;
            });

            

        }

    }
}