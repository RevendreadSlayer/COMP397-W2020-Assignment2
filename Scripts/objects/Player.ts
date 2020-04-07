module objects
{
    export class Player extends GameObject
    {
        //Private instance members

        //Public Properties

        //Constructor
        constructor()
        {
            super(config.Game.ASSETS.getResult("Player"));


            this.Start();
        }


        //Private method
        protected _checkBounds(): void
        {
            // Left boundary

            // Right boundary
           

        }

        private _move():void
        {
            //this.position = new Vector2 (this.stage.mouseX, 500);
            this.position = new Vector2 (this.stage.mouseX, 550);
        }
        //Public method
        public Start(): void {
            this.name = "Player";
        }
        public Update(): void {
            this._move();
            this._checkBounds();
        }
        public Reset(): void {
            
        }
        
    }
    function keyboardInput(event:KeyboardEvent) 
        {
            if(event.keyCode == 87)
            {
                console.log("up");
                
            }
            else if(event.keyCode == 83)
            {
                console.log("down");
            }
            else if(event.keyCode == 65)
            {
                
                console.log("left");
                
            }
            else if(event.keyCode == 68)
            {
                console.log("right");
            }
    }
    window.addEventListener("keydown",keyboardInput);
}