var objects;
(function (objects) {
    class Road extends objects.GameObject {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("road"));
            this.i = 0;
            this.Start();
        }
        // PRIVATE METHODS
        _checkBounds() {
            if (this.y >= 0) {
                this.Reset();
            }
        }
        _move() {
            this.position = objects.Vector2.add(this.position, this.velocity);
        }
        // PUBLIC METHODS
        Start() {
            this._verticalSpeed = 5;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        }
        Update() {
            this._move();
            this._checkBounds();
        }
        Reset() {
            this.i++;
            this.position = new objects.Vector2(0, -1440);
            if (this.i == 3) {
                config.Game.SCENE = scenes.State.END;
            }
        }
    }
    objects.Road = Road;
})(objects || (objects = {}));
//# sourceMappingURL=Road.js.map