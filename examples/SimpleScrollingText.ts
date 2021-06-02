//This example will render scrolling text on a static background
//and output a gif.

import { SimpleScrollingText } from '../src/Render';

var b = new SimpleScrollingText(1200, 620);

//Set encoder params
b.encoderOptions(50, false);                       //Set encoder options.
b.startEncoder('hello-world');                           //Start encoder and set file outputname.

//Output settings
b.fillBackground('yellow');                       //Set gif background colour.
b.setWriteStyle('#000', '72px Arial', 'center');  //Set text styles.

//Text to print
const text = 'Hello World!';

//Text print options
var xCoord: number = 400;                         //Base x coordinate
var yCoord: number = 310                          //Y coordinate
b.addScrollingText(text, xCoord, yCoord);


//Finish encoder.
b.finishEncoding();




