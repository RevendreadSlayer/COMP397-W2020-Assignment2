var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        //Public Properties
        //Constructor
        constructor() {
            super();
            this.road = new objects.Road();
            this.player = new objects.Player();
            this.Start();
        }
        //Private methods
        //Public methods
        Start() {
            this.road = new objects.Road();
            this.Main();
        }
        Update() {
            this.player.Update();
            this.road.Update();
            //managers.Collision.AABBCheck(this.player, this.playBtn);
        }
        Main() {
            this.addChild(this.road);
            //Player
            this.player.image.addEventListener("load", () => {
                this.player.isCentered = true;
            });
            this.player.isCentered = true;
            this.addChild(this.player);
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map