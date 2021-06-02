import { CourtScene, CourtSceneData } from './Court';

const a = async () => {
    var b = new CourtScene({
        character: 'pheonix',
        background: 'defence',
        dialog: "'The quick brown fox jumps over the lazy dog' contains all letters of the alphabet. ",
        action: "normal_talking"
    });

    await b.litigate('test');
}


a();

//Next steps would be to get 0th frame items rendered using a "before" function
//Fix normal talking gif







