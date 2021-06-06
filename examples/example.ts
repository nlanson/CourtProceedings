import { CourtScene, PheonixActionsList } from '../src/Main';


const a = async (): Promise<void> => {
    var b = new CourtScene({
        character: 'pheonix',
        background: 'defence',
        dialog: "This coffee is delicious!",
        action: PheonixActionsList.SIP
    });

    await b.litigate('test');
}


a();