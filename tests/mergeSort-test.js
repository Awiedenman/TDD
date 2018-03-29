const numberArrayGenerator = require('../lib/randomNumberArray.js');
const letterArrayGenerator = require('../lib/randomLetterArray.js');

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const mergeSortSplit = require('../lib/mergeSort.js');

describe('mergeSortSplit', () => {

    beforeEach(() => {
        numbers = [6, 10, 8, 4, 3, 2, 5, 1, 7, 9];
    })

    it('should be a function', () => {
        expect(mergeSortSplit).to.exist;
    });

    it('should return an array', () => {
        const sortedArray = mergeSortSplit(numbers);
        mergeSortSplit(numbers);

        // assert.typeOf([numbers], 'array', 'we have an array')
        expect(sortedArray).to.be.an('array');
    })

    it('should sort an array of 10 numbers', () => {
        const randomArray = numberArrayGenerator(10);
        const sortedArray = mergeSortSplit([...randomArray]);
        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 100 numbers', () => {
        const randomArray = numberArrayGenerator(100);
        const sortedArray = mergeSortSplit([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    });


    it('should sort an array or 10000 numbers', () => {
        const randomArray = numberArrayGenerator(10000);
        const sortedArray = mergeSortSplit([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    });

    it('should sort an array or 15,000 numbers', () => {
        const randomArray = numberArrayGenerator(15000);
        const sortedArray = mergeSortSplit([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 40,000 numbers', () => {
        const randomArray = numberArrayGenerator(40000);
        const sortedArray = mergeSortSplit([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 60,000 numbers', () => {
        const randomArray = numberArrayGenerator(60000);
        const sortedArray = mergeSortSplit([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })
    
    it('should sort an array or 200,000 numbers', () => {
        const randomArray = numberArrayGenerator(200000);
        const sortedArray = mergeSortSplit([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 500,000 numbers', () => {
        const randomArray = numberArrayGenerator(500000);
        const sortedArray = mergeSortSplit([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 950,000 numbers', () => {
        const randomArray = numberArrayGenerator(925000);
        const sortedArray = mergeSortSplit([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array of letters', () => {
        const letters = ['f', 'h', 'e', 'i', 'c', 'a', 'j', 'b', 'd', 'g'];
        const sortedArray = mergeSortSplit(letters);

        expect(sortedArray).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    })
})