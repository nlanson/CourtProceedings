import { AceAttorneyImage, AceAttorneyTextBox } from './Render';


var b = new AceAttorneyImage('Hello');
//b.drawBackground(`white`);
b.loadImage();
b.save('pic');
