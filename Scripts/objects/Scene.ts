module objects
{

    export abstract class Scene extends createjs.Container
    {
        //Private instance members

        //Public Propertis

        //Constructor
        constructor()
        {
            super();
        }
        //Private methods

        //Public Methods


        //Lift Cycle Methods

               /**
         * This method is used for Initialization
         *
         * @abstract
         * @memberof Scene
         */
        public abstract Start():void;

        /**
         * This method is used to update all child objects in the scene
         *
         * @abstract
         * @memberof Scene
         */
        public abstract Update():void;

        /**
         * This method is where all the work happens for the scene
         *
         * @abstract
         * @memberof Scene
         */
        public abstract Main():void;
    }
}