module objects
{
    export class Button extends createjs.Bitmap
    {
        constructor(imagePath:string,
            x:number=0,
            y:number=0,
            isCentered:boolean = false)
            {
                console.log("Imageload");
                super(imagePath,x,y,isCentered);
                this.on("mouseover",this.MouseOver);
                this.on("mouseout",this.MouseOut);

                }
                this.x=x;
                this.y=y;

                this.on("mouseover",this.MouseOver);
                this.on("mouseout",this.MouseOut);
            }

            MouseOver():void
            {
                this.alpha = 0.7;
            }

            MouseOut():void
            {
                this.alpha=1.0;
            }
    }
}