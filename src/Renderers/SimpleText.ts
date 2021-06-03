import { Renderer } from './Renderer';

//Create an image, add background and write text.
export class SimpleText extends Renderer{
    
    constructor(
        width: number,
        height: number
    ) {
        super(width, height)
    }

    public fillBackground(colour: string) {
        this.ctx.fillStyle = colour;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    public writeText(text: string) {
        this.ctx.fillStyle = "#000";
        this.ctx.font = "72px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text, 400, 120);
    }

}