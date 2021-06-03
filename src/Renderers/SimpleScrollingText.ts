import { GIFRenderer } from './GIFRenderer';

//Class to help create simple scrolling text gif.
//See examples/SimpleScrollingText.ts for usage.
//Help from https://sebhastian.com/node-canvas/
export class SimpleScrollingText extends GIFRenderer{

    constructor(
        width: number,
        height: number
    ) {
        super(width, height);
    }

    public fillBackground(colour: string) {
        this.ctx.fillStyle = colour;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    public setWriteStyle(fillStyle: string, font: string, textAlign: CanvasTextAlign) {
        this.ctx.fillStyle = fillStyle;
        this.ctx.font = font;
        this.ctx.textAlign = textAlign;
    }

    protected writeText(text: string, x: number, y: number) {
        this.ctx.fillText(text, x, y);
    }

    protected measureText(text: string): number {
        return this.ctx.measureText(text).width;
    }

    public addScrollingText(text: string, xCoord: number, yCoord:number) {
        var prevWidth: number = 0; //Variable to track total width of text. Used for frame setting.

        for ( let i=0; i<text.length; i++ ) {
            this.writeText(text[i], xCoord+prevWidth+(this.measureText(text[i])/2), yCoord); //xCoord+prevWidth+(b.measureText(text[i])/2) gives the x coord to place the next letter.
            prevWidth += this.measureText(text[i]); //Add the current letter to the compounded width.
            this.setFrame(); //Set frame.
        }
    }
}