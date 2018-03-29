const numberArrayGenerator = require('../lib/randomNumberArray.js');
const letterArrayGenerator = require('../lib/randomLetterArray.js');

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const insertionSort = require('../lib/insertionSort.js');

describe('insertionSort', () => {

    beforeEach(() => {
        numbers = [6, 10, 8, 4, 3, 2, 5, 1, 7, 9];
    })

    it('should be a function', () => {
        expect(insertionSort).to.exist;
    });

    it('should return an array', () => {
        const sortedArray = insertionSort(numbers);
        insertionSort(numbers);

        // assert.typeOf([numbers], 'array', 'we have an array')
        expect(sortedArray).to.be.an('array');
    })

    it('should sort an array of 10 numbers', () => {
        const randomArray = numberArrayGenerator(10);
        const sortedArray = insertionSort([...randomArray]);
        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 100 numbers', () => {
        const randomArray = numberArrayGenerator(100);
        const sortedArray = insertionSort([...randomArray]);
        
        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))

    });


    it('should sort an array or 10000 numbers', () => {
        const randomArray = numberArrayGenerator(10000);
        const sortedArray = insertionSort([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    });

    it('should sort an array or 15,000 numbers', () => {
        const randomArray = numberArrayGenerator(15000);
        const sortedArray = insertionSort([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })

    it('should sort an array or 80,000 numbers', () => {
        const randomArray = numberArrayGenerator(29600);
        const sortedArray = insertionSort([...randomArray]);

        assert.deepEqual(sortedArray, randomArray.sort((a, b) => a - b))
    })


    it('should sort an array of letters', () => {
        const letters = ['f', 'h', 'e', 'i', 'c', 'a', 'j', 'b', 'd', 'g'];
        const sortedArray = insertionSort(letters);

        expect(sortedArray).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    })




    // an array of 1 number.

    // an array of 2 numbers.

    // when an aray hs duplicate numbers.

    // chai.use(require())

    // chai sorted
})