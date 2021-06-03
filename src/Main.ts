import { CourtScene, CourtSceneData } from './Court';
import { ScrollingTextOnImage } from './Render';

const a = async () => {
    var b = new CourtScene({
        character: 'pheonix',
        background: 'prosecution',
        dialog: "The quick brown fox jumps over the lazy dog ",
        action: "normal_talking"
    });

    await b.litigate('test');
}


a();


//Next steps would be to get 0th frame items rendered using a "before" function
//Setup character sprites. (See http://www.court-records.net/sprites1.htm)







