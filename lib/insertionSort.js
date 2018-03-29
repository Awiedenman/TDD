const insertionSort = (array) => {
    const sortedArray = [];
    while (array.length > 0) {
        sortedArray.push(array.shift())
        for (let i = sortedArray.length - 1; i > 0; i--) {
            if (sortedArray[i] < sortedArray[i - 1]) {
                [sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]];
            }
        }

    }
    return sortedArray;
}

module.exports = insertionSort;