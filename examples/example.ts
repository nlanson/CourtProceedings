import { 
    CourtScene,
    PheonixActions,
    JudgeActions
} from '../src/Main';


const a = async (): Promise<void> => {
    var b = new CourtScene({
        character: 'pheonix',
        displayName: 'nlanson',
        background: 'defence',
        dialog: "This coffee is delicious!",
        action: PheonixActions.SIP
    });

    await b.litigate('test');
}


a();