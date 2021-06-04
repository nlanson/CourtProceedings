import { CourtScene, CourtSceneData } from './Court';
import { ScrollingTextOnImage } from './Renderers/ScrollingTextOnImage';
import { PheonixActionsList } from './Actions';

import * as fs from 'fs';
const gifFrames = require('gif-frames');

const a = async () => {
    var b = new CourtScene({
        character: 'pheonix',
        background: 'defence',
        dialog: "The quick brown fox jumps over the lazy dog",
        action: PheonixActionsList.SILLY
    });

    await b.litigate('test');
}


a();




//Use this function to convert sprite gif to png frames.
//Only SIP action not converted
const convert = async () => {
    const gifdir: string  = `assets/sprites/pheonix/thinking/thinking_talking.gif`;
    const savedir: string = `assets/sprites/pheonix/thinking/thinking_talking/`
    await fs.mkdirSync(savedir);
    
    gifFrames(
        { url:  gifdir, frames: 'all', outputType: 'png', cumulative: true },
        function (err:any, frameData:any) {
          if (err) {
            throw err;
          }
          frameData.forEach(function (frame:any) {
            frame.getImage().pipe(fs.createWriteStream(
              savedir + frame.frameIndex + '.png'
            ));
          });
        }
      );

}

//convert();


//Next steps would be to get 0th frame items rendered using a "before" function
//Setup character sprites from objection.lol.







