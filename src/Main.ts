import { RenderGIF } from './Render';


var b = new RenderGIF(1200, 620, 50);
b.startEncoder('hello');

b.fillBackground('yellow');

const text = 'Hello!';
var prevWidth: number = 0;
var gap: number = 2;

//Need to figure out how to have constant width between characters.
for ( let i=0; i<text.length; i++ ) {
    b.writeText(text[i], 400+prevWidth, 310);
    prevWidth += b.measureText(text[i])
    b.setFrame();
}

b.finishEncodig();
