/*
Tape bits are as follows
black, blue, green, orange, red, white, yellow

For example, green and yellow tapes gets you
0010001
*/

//Create constant list of tapes (in reverse order to make encoding and decoding purposes)
const tapeMap = ['yellow', 'white', 'red', 'orange', 'green', 'blue', 'black'];

//Function to decode tape bit string (represented as an integer) to list of tapes
function decodeTapes(tapeBits) {
    //Create list for tapes
    let tapes = [];

    //Iterate through all tapes, getting index and value
    for (const [i, tape] of tapeMap.entries()) {
        //If the tape's bit is set, add it to the list
        if (tapeBits & (1 << i)) {
            tapes.push(tape);
        }
    }

    return tapes;
}

//Function to encode list of tapes into bit string
function encodeTapes(tapes) {
    //Create integer to store tape bits.
    let tapeBits = 0;

    //Iterate through tapes
    for (const tape of tapes) {
        //Set tape bit
        tapeBits ^= (1 << tapeMap.indexOf(tape));
    }

    return tapeBits;
}

//Export tape services
export const tapeService = {
    decodeTapes,
    encodeTapes
};