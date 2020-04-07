module scenes 
{
    export class Play extends objects.Scene
     {
         //Private instance members
         road?:objects.Road;
         getScore:number;
         player?:objects.Player;
         


        
         
        //Public Properties

        //Constructor
        constructor() 
        {
            
            super();
            this.road = new objects.Road();
            this.player = new objects.Player();

            this.Start();
        }
        //Private methods


        //Public methods
        public Start(): void 
        {
            this.road = new objects.Road();
            
            this.Main();
        }

        public Update(): void 
        {
            this.player.Update();
            this.road.Update();

            //managers.Collision.AABBCheck(this.player, this.playBtn);

        }
        public Main(): void 
        {
            this.addChild(this.road);

            //Player

            this.player.image.addEventListener("load", () => {
                this.player.isCentered = true;
            })
            this.player.isCentered = true;
            this.addChild(this.player);
        }

       
        }
        
}