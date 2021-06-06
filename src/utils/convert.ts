import * as fs from 'fs';
const gifFrames = require('gif-frames');


//Use this function to convert sprite gif to png frames.
const convert = async () => {
    const gifdir: string  = `assets/sprites/judge/stand/stand_talking.gif`;
    const savedir: string = `assets/sprites/judge/stand/stand_talking/`
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

convert();