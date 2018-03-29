const quickSort = (array) => {

    if (array.length <= 1) {
        return array;
    }
    let smallArray = [];
    let largeArray = [];
    let pivot = array[array.length - 1];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            smallArray.push(array[i])
        } else {
            largeArray.push(array[i])
        }
    }

    return [...quickSort(smallArray), pivot, ...quickSort(largeArray)]
}

module.exports = quickSort;