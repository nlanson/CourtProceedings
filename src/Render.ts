import { createCanvas, loadImage } from 'canvas';
import GIFEncoder from 'gifencoder';
import * as fs from 'fs';


//Doesn't work (produces transparent blank)
export class AceAttorneyImage {
    private canvas = createCanvas(200,200);
    private ctx = this.canvas.getContext('2d');

    constructor(
        private text: string
    ) { }

    public drawBackground(color: string):void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, 200, 200);
    }

    public async loadImage() {
        let image = await loadImage('assets/text-box.png');
        this.ctx.drawImage(image, 50, 0, 100, 100);
        console.log('Image drawn');
    }

    public save(name: string) {
        const buffer = this.canvas.toBuffer("image/png");
        fs.writeFileSync(`./out/${name}.png`, buffer);
    }

}


//Doesn't work (producing white image with grey line)
export class AceAttorneyTextBox {
    private encoder: GIFEncoder;
    private canvas: any;
    private ctx: any;
    
    constructor(
        private text: string,
        private char: string,
        private readonly x: number,
        private readonly y: number,
        private outfile: string
    ) {
        this.encoder = new GIFEncoder(x, y);
        this.canvas = createCanvas(x, y);
        this.ctx = this.canvas.getContext('2d');

        this.setDefaultEncoderProperties();
        this.startEncoder();
        //this.addBackground(`white`);
        this.loadAceAttorneyTextBox();
        this.draw();
        this.stopEncoder();
    }

    private setDefaultEncoderProperties() {
        this.encoder.setRepeat(0);   // 0 for repeat, -1 for no-repeat
        this.encoder.setDelay(100);  // frame delay in ms
        this.encoder.setQuality(10); // image quality. 10 is default.
    }

    private addBackground(colour: string) {
        this.ctx.fillStyle = colour;
        this.ctx.fillRect(0,0,200,200);
    }

    private loadAceAttorneyTextBox() {
        // Draw cat with lime helmet
        loadImage('assets/text-box.png').then((image) => {
            this.ctx.drawImage(image, 50, 0, 70, 70)
        
            console.log('<img src="' + this.canvas.toDataURL() + '" />')
        });
    }

    private startEncoder() {
        this.encoder.createReadStream().pipe(fs.createWriteStream(`./out/${this.outfile}.gif`));
        this.encoder.start();
    }

    private draw() {
        const write = () => {
            //Write text
            this.ctx.font = '20px impact';
            this.ctx.fillText(this.text, 50, 100);
        }

        const drawLines = () => {
            //Draw line under text
            var mtext = this.ctx.measureText(this.text);
            this.ctx.strokeStyle = 'rgba(0,0,0,0.5)';
            this.ctx.beginPath();
            this.ctx.lineTo(50,102);
            this.ctx.lineTo(50 + mtext.width, 102);
            this.ctx.stroke();
        }

        const setFrame = () => {
            this.encoder.addFrame(this.ctx);
        }

        //No loop. Just a simple write
        write();
        drawLines();
        setFrame();
    }

    private stopEncoder() {
        this.encoder.finish();
    }

}


//Produces a rainbow rgb rectangle.
//Change incremental values in drawFrames() method to change how many colours are rendered.
//More incrementations = more colours and more render time.
export class FlashingRects {

    private canvas: any;
    private ctx: any;
    private encoder: GIFEncoder;

    constructor(
        private readonly x: number,
        private readonly y: number
    ) { 
        this.canvas = createCanvas(x, y);
        this.ctx = this.canvas.getContext('2d');
        this.encoder = new GIFEncoder(x, y);

        this.startEncoder();
        this.drawFrames();
        this.endEncoder();
    }

    private startEncoder() {
        this.encoder.createReadStream().pipe(fs.createWriteStream('out/rgb.gif'));
        this.encoder.start();
        this.encoder.setRepeat(0);   //0 for repeat, -1 for no-repeat.
        this.encoder.setDelay(1);  //Frame delay in ms.
        this.encoder.setQuality(1); //Image quality.
    }

    private drawFrames() {
        for ( let red=0; red<256; red = red + 50 ) {
            for ( let green=0; green<256; green = green + 50 ){
                for ( let blue=0; blue<256; blue = blue + 50 ) {
                    this.ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
                    this.ctx.fillRect(0, 0, this.x, this.y);
                    this.encoder.addFrame(this.ctx);
                }
            }
        }
    }

    private endEncoder() {
        this.encoder.finish();
    }
}