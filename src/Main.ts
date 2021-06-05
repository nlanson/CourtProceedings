import { CourtScene } from './Court';
import { PheonixActionsList } from './Actions';

import * as fs from 'fs';
const gifFrames = require('gif-frames');

const a = async () => {
    var b = new CourtScene({
        character: 'pheonix',
        background: 'defence',
        dialog: "Yes, I made this library out of bordom.",
        action: PheonixActionsList.NOD
    });

    await b.litigate('test');
}


a();




//Use this function to convert sprite gif to png frames.
//Only SIP action not converted
const convert = async () => {
    const gifdir: string  = `assets/sprites/pheonix/read/read_talking.gif`;
    const savedir: string = `assets/sprites/pheonix/read/read_talking2/`
    fs.mkdirSync(savedir);
    
    gifFrames({ url: gifdir, frames: 'all', outputType: 'png', cumulative: false })
    .then(function (frameData: any, err: any) {
      if (err) {
        throw err;
      }

      frameData.forEach(async function (frame: any) {
        frame.getImage().pipe(fs.createWriteStream(
          savedir + frame.frameIndex + '.png'
        ));
      });
    });

}

//convert();


//Next steps would be to get 0th frame items rendered using a "before" function
//Setup character sprites from objection.lol.







