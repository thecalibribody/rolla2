const assert = require('assert');
const roll = require('../src/rollfunc.js')

describe('Dice Rolling Length', ()=>{
    it ('Can roll 1d6', ()=>{
        const input = [1,6];
        const expectedMaximum = input[0];

        const results = roll(input)
        console.log(results);

        assert(results.length <= expectedMaximum);
        
    });
    it ('Can roll 3d6',()=>{
        const input = [3,6];
        const expectedMaximum = input[0];

        const results = roll(input)
        console.log(results);

        assert(results.length <= expectedMaximum);

    });
    it ('Can roll 2d20', ()=>{
        const input = [2,20];
        const expectedMaximum = input[0];

        const results = roll(input)
        console.log(results);

        assert(results.length <= expectedMaximum);

    });
});