import { SimpleScrollingText } from './SimpleScrollingText';
import { LoadImage } from './Renderer';
import { loadImage } from 'canvas';

//To create a simple scrolling text ontop of an image.
//See examples/GameText.ts for usage
export class ScrollingTextOnImage extends SimpleScrollingText implements LoadImage {
    
    constructor(
        x: number, y: number
    ) {
        super(x, y);
    }

    public async loadImage(image: string, x: number, y: number) {
        let img: any = await loadImage(`assets/${image}`);
        this.ctx.drawImage(img, x, y);
    }


}