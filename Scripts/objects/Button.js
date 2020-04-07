var objects;
(function (objects) {
    class Button extends objects.GameObject {
        constructor(imagePath = config.Game.ASSETS.getResult("button"), x = 0, y = 0, isCentered = false) {
            super(imagePath, x, y, isCentered);
            this.on("mouseover", this.MouseOver);
            this.on("mouseout", this.MouseOut);
            this.Start();
        }
        _checkBounds() {
        }
        MouseOver() {
            this.alpha = 0.7;
        }
        MouseOut() {
            this.alpha = 1.0;
        }
        Start() {
            this.name = "Button";
        }
        Update() {
        }
        Reset() {
        }
    }
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=Button.js.map