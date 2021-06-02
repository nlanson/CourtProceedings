import { loadImage } from 'canvas';
import * as fs from 'fs/promises';
const gifFrames = require('gif-frames');

import { SimpleScrollingText } from './Render';
import { LoadImage } from './root_renderers';

export type Character = 'pheonix' | 'edgeworth';
export type Background = 'defence' | 'judge' | 'prosecution';
//Might need an Action type later on.

export type CourtSceneData = {
    character: Character,
    background: Background,
    dialog: string,
    action: string
}

//This court room class only has ONE possible background option and no character options setup yet.
//This should, take in a custom type param that will dictate how the gif renders.
//NOT FINAL
export class CourtScene extends SimpleScrollingText implements LoadImage {
    
    constructor(
        private scene: CourtSceneData
    ) {
        super(1000, 720);
    }

    public async litigate(save: string): Promise<void> {
        await this.setup(save);
        await this.addScrollingText(this.scene.dialog, 10, 575);
        this.finishEncoding();
    }

    private async setup(save: string) {
        this.encoderOptions(50, false);
        this.setWriteStyle('#fff', '32px Arial', 'center');
        this.startEncoder(save);
        await this.loadBackground();
    }

    private async loadBackground() {
        //Sets the background. (Only one asset avail atm)
        switch (this.scene.background) {
            case 'defence':
                await this.loadImage('bg_court_defence.jpg', 0, 0);
                break;
            case 'prosecution':
                await this.loadImage('bg_court_defence.jpg', 0, 0);
                break;
            case 'judge':
                await this.loadImage('bg_court_defence.jpg', 0, 0);
                break;
            default:
                await this.loadImage('bg_court_defence.jpg', 0, 0);
        }

        await this.loadImage('/text-box.png', -10, 0);
    }

    async addScrollingText(text: string, xCoord: number, yCoord:number) {
        var prevWidth: number = 0; //Variable to track total width of text. Used for frame setting.
        var k: number = 0;

        for ( let i=0; i<text.length; i++ ) {
            this.writeText(text[i], xCoord+prevWidth+(this.measureText(text[i])/2), yCoord); //xCoord+prevWidth+(b.measureText(text[i])/2) gives the x coord to place the next letter.
            prevWidth += this.measureText(text[i]); //Add the current letter to the compounded width.

            //(NOT FINISHED)
            //Will loop the action.
            //For non-looping actions I may need to create an Action type or dictionary to accomadate for this.
            let frameCount: Array<string> = await fs.readdir(`./assets/${this.scene.character}/${this.scene.action}`);
            if ( k >= frameCount.length ) k=0;
            await this.loadImage(`${this.scene.character}/${this.scene.action}/${k}.png`, 250, 250);
            k++

            this.setFrame(); //Set frame.
        }
    }

    async loadImage(image: string, x: number, y: number): Promise<void> {
        let img: any = await loadImage(`assets/${image}`);
        this.ctx.drawImage(img, x, y);
    }
        
    
}