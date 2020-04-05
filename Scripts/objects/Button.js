var objects;
(function (objects) {
    class Button extends createjs.Bitmap {
        constructor(imagePath, x = 0, y = 0, isCentered = false) {
            console.log("Imageload");
            super(imagePath);
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.x = x;
            this.y = y;
            this.on("mouseover", this.MouseOver);
            this.on("mouseout", this.MouseOut);
        }
        MouseOver() {
            this.alpha = 0.7;
        }
        MouseOut() {
            this.alpha = 1.0;
        }
    }
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=Button.js.map