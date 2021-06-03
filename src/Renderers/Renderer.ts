import { Canvas, createCanvas } from 'canvas';
import * as fs from 'fs';

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
        console.log(`Image saved to ./out/${name}.png`);
    }
}


export interface LoadImage {
    loadImage(image: string, x: number, y: number): void
}