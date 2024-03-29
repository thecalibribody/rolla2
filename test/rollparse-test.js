const assert = require('assert');
const parseArgument = require('../src/rollparse.js')

describe('Argument Text Parser', ()=>{
    it ('Can parse 1d6', ()=>{
        let expected = [1,6];
        let input = '1d6';

        const result = parseArgument(input);

        assert.deepEqual(result,expected);
    });
    it ('Can parse 3d6', ()=>{
        let expected = [3,6];
        let input = '3d6';
        const result = parseArgument(input);
        assert.deepEqual(result,expected);
    });
    it ('Can parse 2d20', ()=>{
        let expected = [2,20];
        let input = '2d20';
        const result = parseArgument(input);

        assert.deepEqual(result,expected);

    });
});