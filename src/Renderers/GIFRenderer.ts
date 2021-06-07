import { Renderer } from './Renderer';
import * as fs from 'fs';
import GIFEncoder from 'gifencoder';

type frameTracker = {
    currentFrame: number,
    totalFrames: number
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