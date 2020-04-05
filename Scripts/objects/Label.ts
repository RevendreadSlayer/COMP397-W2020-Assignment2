module objects
{
    export class Label extends createjs.Text
    {
        constructor(
            public labelInput:string,
            public fontSize:string,
            public fontFamily:string,
            public fontColour:string,
            public x : number =0,public y:number=0 ,public isCentered:boolean)
            {
                super(labelInput, fontSize +" "+fontFamily,fontColour);

                if(isCentered == true)
                {
                    this.regX = this.getMeasuredWidth()*0.5;
                    this.regY = this.getMeasuredHeight()*0.5;

                }
                this.x = x;
                this.y = y;
            }
    }
}