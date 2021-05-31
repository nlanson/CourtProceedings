import { createCanvas, loadImage } from 'canvas';
import GIFEncoder from 'gifencoder';
import * as fs from 'fs';


//Create an image, add background and write text.
export class RenderImage {

    private canvas: any;
    private ctx: any;
    
    constructor(
        private width: number,
        private height: number
    ) {
        this.canvas = createCanvas(this.width, this.height);
        this.ctx = this.canvas.getContext('2d');
    }

    public save(name: string) {
        const buffer = this.canvas.toBuffer('image/png');
        fs.writeFileSync(`./out/${name}.png`, buffer);
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

//Class to help create text gif.
//See Main.ts for usage.
//Help from https://sebhastian.com/node-canvas/
export class RenderGIF {

    private canvas: any;
    private ctx: any;
    private encoder: GIFEncoder;

    constructor(
        private width: number,
        private height: number,
        private timeDelay: number
    ) {
        this.canvas = createCanvas(width, height);
        this.ctx = this.canvas.getContext('2d');
        this.encoder = new GIFEncoder(width, height);
    }

    public startEncoder(name: string) {
        this.encoder.createReadStream().pipe(fs.createWriteStream(`out/${name}.gif`));
        this.encoder.start();
        this.encoder.setRepeat(-1);   //0 for repeat, -1 for no-repeat.
        this.encoder.setDelay(this.timeDelay);    //Frame delay in ms.
        this.encoder.setQuality(10);  //Image quality.
    }

    public finishEncodig() {
        this.encoder.finish();
    }

    public setFrame() {
        this.encoder.addFrame(this.ctx);
    }

    public fillBackground(colour: string) {
        this.ctx.fillStyle = colour;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    public setWriteStyle(fillStyle: string, font: string, textAlign: string) {
        this.ctx.fillStyle = fillStyle;
        this.ctx.font = font;
        this.ctx.textAlign = textAlign;
    }

    public writeText(text: string, x: number, y: number) {
        this.ctx.fillText(text, x, y);
    }

    public measureText(text: string): number {
        return this.ctx.measureText(text).width;
    }
}