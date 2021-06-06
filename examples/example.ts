import { 
    CourtScene,
    PheonixActions,
    JudgeActions
} from '../src/Main';


const a = async (): Promise<void> => {
    var b = new CourtScene({
        character: 'judge',
        background: 'judge',
        dialog: "lmao this worked on the first try.",
        action: JudgeActions.SURPRISED
    });

    await b.litigate('test');
}


a();