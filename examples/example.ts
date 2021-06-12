import { 
    CourtScene,
    CourtProceeding,
    PheonixActions,
    JudgeActions,
    EdgeworthActions
} from '../src/Main';


//Generate one court scene.
const a = async (): Promise<void> => {
    var b = new CourtScene({
        character: 'pheonix',
        displayName: 'nlanson',
        background: 'defence',
        dialog: "This library generates court scenes like this one.",
        action: PheonixActions.READ
    });

    await b.litigate('test');
}


a();

//Chaining court scenes.
const b = async (): Promise<void> => {
    var b = new CourtProceeding([
        {
        character: 'judge',
        displayName: 'Justice',
        background: 'judge',
        dialog: "How are you?",
        action: JudgeActions.EYES_CLOSED
        },
        {
            character: 'pheonix',
            displayName: 'nlanson',
            background: 'defence',
            dialog: "Very good thanks",
            action: PheonixActions.READ
        },
    ]);

    //await b.renderScenes();
    b.chainGifs();
}

//b();