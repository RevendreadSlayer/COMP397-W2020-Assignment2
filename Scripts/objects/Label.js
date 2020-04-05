var objects;
(function (objects) {
    class Label extends createjs.Text {
        constructor(labelInput, fontSize, fontFamily, fontColour, x = 0, y = 0, isCentered) {
            super(labelInput, fontSize + " " + fontFamily, fontColour);
            this.labelInput = labelInput;
            this.fontSize = fontSize;
            this.fontFamily = fontFamily;
            this.fontColour = fontColour;
            this.x = x;
            this.y = y;
            this.isCentered = isCentered;
            if (isCentered == true) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
        }
    }
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=Label.js.map