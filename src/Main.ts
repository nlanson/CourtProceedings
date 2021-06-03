import { CourtRoom } from './Render';

const a = async () => {
    var b = new CourtRoom();

    await b.litigate('Hello Mizuki! What electives are you going to choose?');
}


a();

//Next steps would be to get 0th frame items rendered using a "before" function
//aswell as a class for generating court room gifs from JSON.







