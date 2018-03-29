const mergeSortSplit = (array) => {
    let middle = Math.floor(array.length / 2);
    let leftArray = array.slice(0, middle);
    let rightArray = array.slice(middle);

    if (array.length <= 1) {
        return array;
    }
        
    return mergeSortCombine(mergeSortSplit(rightArray), mergeSortSplit(leftArray));
};

const mergeSortCombine = (leftArray, rightArray) => {
    let sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        // console.log(rightArray.length)
        if (leftArray[i] < rightArray[j]) {
            sortedArray.push(leftArray[i]);
            i++;
        } else {
            sortedArray.push(rightArray[j]);
            j++;
        }

    }
    return [...sortedArray, ...leftArray.slice(i), ...rightArray.slice(j)];
};

module.exports = mergeSortSplit;