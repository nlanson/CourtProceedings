import { Canvas, createCanvas } from 'canvas';
import * as fs from 'fs';
import GIFEncoder from 'gifencoder';

export abstract class Renderer {
    
    protected canvas: Canvas;
    protected ctx: CanvasRenderingContext2D;

    constructor(
        protected width: number,
        protected height: number
    ) {
        this.canvas = createCanvas(this.width, this.height);
        this.ctx = this.canvas.getContext('2d');
    }

    //Save the canvas as an image
    public save(name: string) {
        const buffer = this.canvas.toBuffer('image/png');
        fs.writeFileSync(`./out/${name}.png`, buffer);
    }
}

export abstract class GIFRenderer extends Renderer {
    
    protected encoder: GIFEncoder;

    constructor(
        width: number,
        height: number
    ) {
        super(width, height);
        this.encoder = new GIFEncoder(width, height);
    }

    //Set encoder options
    public encoderOptions(timeDelay: number, repeat?: boolean, quality?: number) {
        this.encoder.setDelay(timeDelay);     //Frame delay in ms.
        
        if ( repeat != undefined ) {
            let param: number = (repeat) ? 0:-1;
            this.encoder.setRepeat(param);
        } else {
            this.encoder.setRepeat(-1);       //Default on no repeat.
        }
 
        if ( quality != undefined && quality <= 1 && quality >= 10) {
            this.encoder.setQuality(quality); //Image quality.
        } else {
            this.encoder.setQuality(10);      //Default quality = 10
        }  
    }

    //Start encoder with an output file name.
    public startEncoder(name: string) {
        this.encoder.createReadStream().pipe(fs.createWriteStream(`out/${name}.gif`));
        this.encoder.start();
    }

    //Finish encoding a gif/
    public finishEncoding() {
        this.encoder.finish();
    }

    //Add the current canvas frame to the gif.
    public setFrame() {
        this.encoder.addFrame(this.ctx);
    }
}

export interface LoadImage {
    loadImage(image: string, x: number, y: number): void
}