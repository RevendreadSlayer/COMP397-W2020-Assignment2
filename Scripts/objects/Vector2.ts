module objects
{
    export class Vector2
    {
        //Private instance members
        private _x:number = 0;
        private _y:number = 0;
        private _magnitude:number = 0;
        private _sqrMagnitude:number= 0;

        //Public properties
        get x():number
        {
            return this._x;

        }

        set x(newX:number)
        {
            this._x=newX;
            this.sqrMagnitude = this._computeSqrMagnitude();
            this.magnitude = this._computeMagnitude();
        }

        get y():number
        {
            return this._y;
        }

        set y(newY:number)
        {
            this._y=newY;
            this.sqrMagnitude = this._computeSqrMagnitude();
            this.magnitude = this._computeMagnitude();
        }

        get magnitude():number
        {
            return this._magnitude;
        }

        set magnitude(newMagnitude:number)
        {
            this._magnitude = newMagnitude;
        }

        get sqrMagnitude():number
        {
            return this._sqrMagnitude;
        }

        set sqrMagnitude(newSqrMagnitude:number)
        {
            this._sqrMagnitude = newSqrMagnitude;
        }
        //Constructor
        constructor(x:number = 0,y:number = 0)
        {
            this,this.magnitude = this._computeMagnitude();
        }

        //Private methods
        private _computeSqrMagnitude():number
        {
            return (this._x * this._x) + (this._y * this._y);
        }

        private _computeMagnitude():number
        {
            return Math.sqrt(this._computeSqrMagnitude());
        }
        //Public methods
        public add(rhs:Vector2):void
        {
            this.x += rhs.x;
            this.y +=rhs.y;
        }

        public subtract(rhs:Vector2):void
        {
            this.x -= rhs.x;
            this.y -= rhs.y;
        }

        public scale(scalar:number):void
        {
            this.x *= scalar;
            this.y *= scalar;
        }

        public toString():string
        {
            return "(" + this.x + "," + this.y + ")";
        }
        /**
         * This method sets the current vector to a magnitude of 1(this unit vector)
         * @member Vector2
         */
        public normalize():void
        {
            let tempX = this.x / this.magnitude;
            let tempY = this.y / this.magnitude;
            this.x = tempX;
            this.y = tempY;
        }

        /**
         * Computes the current vector's direction without changing it
         * 
         * @returns {Vector2}
         * @memberof Vector2
         */
        public normalized():Vector2
        {
            let vector = new Vector2(this.x,this.y);
            vector.normalize();
            return vector;
        }
        //Public static methods
        public static zero():Vector2
        {
            return new Vector2(0,0);
        }

        public static one():Vector2
        {
            return new Vector2(1,1);
        }

        public static up():Vector2
        {
            return new Vector2(0,-1);
        }

        public static down():Vector2
        {
            return new Vector2(0,1);
        }

        public static left():Vector2
        {
            return new Vector2(-1,-1);
        }

        public static right():Vector2
        {
            return new Vector2(1,0);
        }

        public static dot(lhs:Vector2,rhs:Vector2):number
        {
            return (lhs.x * rhs.x) + (lhs.y * rhs.y);
        }

        public static distance(P1:Vector2,P2:Vector2):number
        {
            let diffXs= P2.x - P1.x;
            let diffYs= P2.y - P1.y;
            return Math.sqrt((diffXs * diffXs) + (diffYs * diffYs));
        }

        public static sqrDistance(P1:Vector2,P2:Vector2):number
        {
            let diffXs= P2.x - P1.x;
            let diffYs= P2.y - P1.y;
            return Math.sqrt((diffXs * diffXs) + (diffYs * diffYs));
        }
    }
}