const chai = require('chai');
const expect = chai.expect;
const bubbleSort = require('../lib/bubbleSort.js');

describe('bubbleSort' , () => {

    beforeEach(() => {
        numbers = [10, 8, 4, 3, 2, 5, 1, 7, 9];
    })

    it('should be a function', () => {
        expect(bubbleSort).to.exist;
    });
})