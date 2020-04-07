module scenes 
{
    export class Instruction extends objects.Scene
     {
         //Private instance members
        Title: objects.Label;
        instructionLabel: objects.Label;
        controlImage:objects.Button;
        backButton:objects.Button;
        
         
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
            
            this.Title = new objects.Label("INTRODUCTION", "70px", "Consolas", "#000000", 240, 100, true);
            
            this.instructionLabel = new objects.Label("Using WASD keys as Movement Control!", "13px", "Consolas", "#F30000", 240, 200, true);
            
            this.controlImage = new objects.Button("./Assets/images/keyboard.png",240,300,true);

            this.backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 240, 400, true);
            
            
            
            this.Main();
        }

        public Update(): void 
        {
            
        }
        public Main(): void 
        {
            //Title

            this.addChild(this.Title);


            this.addChild(this.instructionLabel);

            
            //button
            this.addChild(this.controlImage);

            this.addChild(this.backButton);
            this.backButton.on("click", () => {
                config.Game.SCENE = scenes.State.START;
            })

        }

    }
}