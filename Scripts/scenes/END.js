var scenes;
(function (scenes) {
    class END extends objects.Scene {
        //Public Properties
        //Constructor
        constructor() {
            super();
            this.Start();
        }
        //Private methods
        //Public methods
        Start() {
            this.gameOverTitle = new objects.Label("GAME OVER", "70px", "Consolas", "#000000", 245, 320, true);
            this.backButton = new objects.Button(config.Game.ASSETS.getResult("backutton"), 240, 400, true);
            this.Main();
        }
        Update() {
        }
        Main() {
            //Title
            this.addChild(this.gameOverTitle);
            //button
            this.addChild(this.backButton);
            this.backButton.on("click", () => {
                config.Game.SCENE = scenes.State.START;
            });
        }
    }
    scenes.END = END;
})(scenes || (scenes = {}));
//# sourceMappingURL=END.js.map