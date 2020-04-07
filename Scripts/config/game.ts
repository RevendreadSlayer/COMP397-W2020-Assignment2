module config
{
    export class Game
    {
        public static SCREEN_WIDTH:number = 480;
        public static SCREEN_HEIGHT:number = 640;
        public static SCENE:scenes.State;
        public static ASSETS:createjs.LoadQueue;
        public static FPS: number = 60;
    }
}