import { loadImage } from 'canvas';
import * as fs from 'fs/promises';

import { SimpleScrollingText } from './Renderers/SimpleScrollingText';
import { LoadImage } from './Renderers/Renderer';

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
        super(960, 640);
    }

    public async litigate(save: string): Promise<void> {
        await this.setup(save);
        await this.addScrollingText(this.scene.dialog, 10, 520);
        this.finishEncoding();
    }

    private async setup(save: string) {
        this.encoderOptions(50, false);
        this.setWriteStyle('#fff', '24px Arial', 'center');
        this.startEncoder(save);
        await this.loadBackground();
    }

    private async loadBackground() {
        //Sets the background. (Only one asset avail atm)
        switch (this.scene.background) {
            case 'defence':
                await this.loadImage('bg_defence.png', 0, 0);
                break;
            case 'prosecution':
                await this.loadImage('bg_prosecution.png', 0, 0);
                break;
            case 'judge':
                await this.loadImage('bg_judge.jpg', 0, 0);
                break;
            default:
                await this.loadImage('bg_defence.png', 0, 0);
        }

        await this.loadImage('text-box2.png', 0, 440);
    }

    async addScrollingText(text: string, xCoord: number, yCoord:number) {
        var prevWidth: number = 0; //Variable to track total width of text. Used for frame setting.
        var k: number = 0;

        for ( let i=0; i<text.length; i++ ) {
            this.writeText(text[i], xCoord+prevWidth+(this.measureText(text[i])/2), yCoord); //xCoord+prevWidth+(b.measureText(text[i])/2) gives the x coord to place the next letter.
            prevWidth += this.measureText(text[i]); //Add the current letter to the compounded width.

            //Todo:
            //1. Split sprite GIFs into individual frame PNGs.
            //   Sprite GIFs are ignored by git as they take up lots of space. Should upload to some file storage for access.
            //2. Create a function that adds the character sprite into the context based on talking status, idle status or motion status.
            //   Use the this.scene.action property to determine what animations to use.
            //   Make a dictionary for the different characters and their animations to create instructions on which animation to loop(talking), any pre animations(motions such as pointing) and post animations(static standing).

            this.setFrame(); //Set frame.
        }
    }

    async loadImage(image: string, x: number, y: number): Promise<void> {
        let img: any = await loadImage(`assets/${image}`);
        this.ctx.drawImage(img, x, y);
    }
        
    
}