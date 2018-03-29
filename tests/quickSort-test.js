const numberArrayGenerator = require('../lib/randomNumberArray.js');
const letterArrayGenerator = require('../lib/randomLetterArray.js');

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const quickSort = require('../lib/quickSort.js');

describe('quickSort', () => {

    beforeEach(() => {
        numbers = [6, 10, 8, 4, 3, 2, 5, 1, 7, 9];
    })

    it('should be a function', () => {
        expect(quickSort).to.exist;
    });

    it('should return an array', () => {
        const sortedArray = quickSort(numbers);
        quickSort(numbers);

        // assert.typeOf([numbers], 'array', 'we have an array')
        expect(sortedArray).to.be.an('array');
    })

    it('should sort an array of 10 numbers', () => {
        const randomArray = numberArrayGenerator(10);
        const sortedArray = quickSort([...randomArray]);
        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 100 numbers', () => {
        const randomArray = numberArrayGenerator(100);
        const sortedArray = quickSort([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    });


    it('should sort an array or 10000 numbers', () => {
        const randomArray = numberArrayGenerator(10000);
        const sortedArray = quickSort([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    });

    it('should sort an array or 15,000 numbers', () => {
        const randomArray = numberArrayGenerator(15000);
        const sortedArray = quickSort([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 80,000 numbers', () => {
        const randomArray = numberArrayGenerator(29600);
        const sortedArray = quickSort([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 150,000 numbers', () => {
        const randomArray = numberArrayGenerator(150000);
        const sortedArray = quickSort([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 250,000 numbers', () => {
        const randomArray = numberArrayGenerator(250000);
        const sortedArray = quickSort([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 600,000 numbers', () => {
        const randomArray = numberArrayGenerator(600000);
        const sortedArray = quickSort([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 1,000,000 numbers', () => {
        const randomArray = numberArrayGenerator(1000000);
        const sortedArray = quickSort([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array of letters', () => {
        const letters = ['f', 'h', 'e', 'i', 'c', 'a', 'j', 'b', 'd', 'g'];
        const sortedArray = quickSort(letters);

        expect(sortedArray).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    })
})