const numberArrayGenerator = (arrayLength) => {
    const randomArray = [];
    for ( let i = 0 ; i < arrayLength ; i++) {
        randomArray.push( Math.floor(Math.random() * arrayLength));
    }
    return randomArray;
}

module.exports =  numberArrayGenerator;