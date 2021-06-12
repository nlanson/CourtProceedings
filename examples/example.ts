import { 
    CourtScene,
    PheonixActions,
    JudgeActions,
    EdgeworthActions
} from '../src/Main';


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