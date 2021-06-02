//This example generates a GIF with text scrolling ontop of an image.

import { ScrollingTextOnImage } from '../src/Render';

const a = async () => {
    var b = new ScrollingTextOnImage(
        1000,  //Outut width
        750    //Output height
    );
    //x: 1000, y: 750 is optimal for the text box in assets/text-box.png 


    b.encoderOptions(50, false);    //Set encoder options.
    b.startEncoder('game-text');  //Start encoder and set output name. (Required)
    b.fillBackground('white');      //Fill image background with white. (Optional)
    b.setWriteStyle('#fff', '32px Arial', 'center'); //Set text style. (For best output)

    await b.loadImage('text-box.png', -10, 0);   //Load image onto canvas. (Can also be used to load a background image)
    b.addScrollingText('Hello World!', 10, 575); //Add scrolling text ontop of image.


    b.finishEncoding();  //Finish encoding.
}


a();