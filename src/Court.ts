//Internal
import { SimpleScrollingText } from './Renderers/SimpleScrollingText';
import { LoadImage } from './Renderers/Renderer';
import { PheonixActionsList, PheonixActionsDictionary, ActionTracker } from './Actions';


//External
import { loadImage } from 'canvas';
import * as fs from 'fs/promises';

export type Character = 'pheonix' | 'edgeworth';
export type Background = 'defence' | 'judge' | 'prosecution';


export type CourtSceneData = {
    character: Character,
    background: Background,
    dialog: string,
    action: PheonixActionsList 
}


//This court room class only has ONE possible background option and no character options setup yet.
//This should, take in a custom type param that will dictate how the gif renders.
//NOT FINAL
export class CourtScene extends SimpleScrollingText implements LoadImage {
    
    private action: ActionTracker;
    
    constructor(
        private scene: CourtSceneData
    ) {
        super(960, 640);

        //Validate action here. Make sure selected character has selection action available.
        this.action = PheonixActionsDictionary[this.scene.action];
    }

    public async litigate(save: string): Promise<void> {
        await this.setup(save);
        await this.preDialogueAnimation();
        await this.addScrollingText(this.scene.dialog, 10, 520);
        await this.postDialogueAnimation();
        this.finishEncoding();
    }

    private async setup(save: string) {
        this.encoderOptions(50);
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

    }

    private async loadTextBox() {
        await this.loadImage('text-box2.png', 0, 440);
    }

    private async preDialogueAnimation() {
        this.encoderOptions(100); //Set slower time delay for predialog animation.

        if ( this.action.pre != null ) {
            //this.action.pre[1] is where the frame count of the pre-dialog action is stored.
            for ( let i=0; i<=this.action.pre[1]; i++ ) {
                //Redraw background each frame to cancel out previous motions
                await this.loadBackground();
                
                // Index 0 stores the directory of the frames
                await this.loadImage(`${this.action.pre[0]}/${i}.png`, 0, 0);
                this.setFrame();
            }
        } else {
            console.log('no pre-dialog frames to render.')
            return
        }
    }

    async addScrollingText(text: string, xCoord: number, yCoord:number) {
        this.encoderOptions(50);
        
        var prevWidth: number = 0; //Variable to track total width of text. Used for frame setting.
        var frameCount: number = 0;

        for ( let i=0; i<=text.length; i++ ) {
            //Redraw background layer.
            await this.loadBackground();
            
            //If dialog animation loop is over reset to 0.
            //Then, draw dialog animation frame and then increment the frameCount
            if ( frameCount > this.action.dialog[1] )    
                frameCount = 0;
            

            //Draw the sprite
            await this.loadImage(`${this.action.dialog[0]}/${frameCount}.png`, 0,0);

            //Only increase the frame count every two letters. 
            //This is done to keep the sprite animation speed the same as the post and pre dialog animations whilst keeping the text speed fast.
            if ( i % 2 == 0 )
                frameCount++;

            //Draw the text box again
            await this.loadTextBox();

            //And add the scrolling text
            //idk why but the letters shake around without the Math.floor().
            this.writeText(text.slice(0, i), Math.floor(xCoord+(this.measureText(text.slice(0, i))/2)), yCoord); //Render the next letter
            

            //Todo:
            //Move long text onto the next row.

            this.setFrame(); //Set frame.
        }
    }

    private async postDialogueAnimation() {
        this.encoderOptions(100); //Set slower time delay for post dialog animation.
        
        if ( this.action.post != null ) {
                for ( let i=0; i<=this.action.post[1]; i++ ) {
                    await this.loadBackground();
                    await this.loadImage(`${this.action.post[0]}/${i}.png`, 0, 0);
                    await this.loadTextBox();
                    this.writeText(this.scene.dialog, 10+(this.measureText(this.scene.dialog)/2), 520);
                    
                    this.setFrame();
                }
        } else {
            console.log('no post-dialog frames to render.');
            return
        }
    }

    async loadImage(image: string, x: number, y: number): Promise<void> {
        let img: any = await loadImage(`assets/${image}`);
        this.ctx.drawImage(img, x, y);
    }
        
    
}