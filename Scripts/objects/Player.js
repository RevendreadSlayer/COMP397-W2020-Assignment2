var objects;
(function (objects) {
    class Player extends objects.GameObject {
        //Private instance members
        //Public Properties
        //Constructor
        constructor() {
            super(config.Game.ASSETS.getResult("Player"));
            this.Start();
        }
        //Private method
        _checkBounds() {
            // Left boundary
            // Right boundary
        }
        _move() {
            //this.position = new Vector2 (this.stage.mouseX, 500);
            this.position = new objects.Vector2(this.stage.mouseX, 550);
        }
        //Public method
        Start() {
            this.name = "Player";
        }
        Update() {
            this._move();
            this._checkBounds();
        }
        Reset() {
        }
    }
    objects.Player = Player;
    function keyboardInput(event) {
        if (event.keyCode == 87) {
            console.log("up");
        }
        else if (event.keyCode == 83) {
            console.log("down");
        }
        else if (event.keyCode == 65) {
            console.log("left");
        }
        else if (event.keyCode == 68) {
            console.log("right");
        }
    }
    window.addEventListener("keydown", keyboardInput);
})(objects || (objects = {}));
//# sourceMappingURL=Player.js.map