import { RenderGIF } from './Render';


var b = new RenderGIF(1200, 620, 50);

//Set encoder params
b.startEncoder('hello');                          //Start encoder and set file outputname.
b.fillBackground('yellow');                       //Set image background colour.
b.setWriteStyle('#000', '72px Arial', 'center');  //Set text styles

//Text to print
const text = 'Hello World!';

//Text print options
var xCoord: number = 400;  //Base x coordinate
var yCoord: number = 310   //Y coordinate
var prevWidth: number = 0; //Variable to track total width of text. Used for frame setting.


//Make this a built in method in RenderGIF function?
for ( let i=0; i<text.length; i++ ) {
    b.writeText(text[i], xCoord+prevWidth+(b.measureText(text[i])/2), yCoord); //xCoord+prevWidth+(b.measureText(text[i])/2) gives the x coord to place the next letter.
    prevWidth += b.measureText(text[i]); //Add the current letter to the compounded width.
    b.setFrame(); //Set frame.
}


b.finishEncodig();
