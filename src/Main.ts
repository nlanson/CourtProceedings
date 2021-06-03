import { CourtScene, CourtSceneData } from './Court';
import { ScrollingTextOnImage } from './Renderers/ScrollingTextOnImage';
import { PheonixActionsList } from './Actions';

import * as fs from 'fs';
const gifFrames = require('gif-frames');

const a = async () => {
    var b = new CourtScene({
        character: 'pheonix',
        background: 'defence',
        dialog: "Elon musk needs to stay the fuck out of crypto.",
        action: PheonixActionsList.NORMAL
    });

    await b.litigate('test');
}


a();




//Use this function to convert sprite gif to png frames.
const convert = async () => {
    const dir: string  = `assets/sprites/pheonix/normal/normal_talking.gif`;
    
    gifFrames(
        { url:  dir, frames: 'all', outputType: 'png', cumulative: true },
        function (err:any, frameData:any) {
          if (err) {
            throw err;
          }
          frameData.forEach(function (frame:any) {
            frame.getImage().pipe(fs.createWriteStream(
              'assets/sprites/pheonix/normal/normal_talking/' + frame.frameIndex + '.png'
            ));
          });
        }
      );

}

//convert();


//Next steps would be to get 0th frame items rendered using a "before" function
//Setup character sprites from objection.lol.







