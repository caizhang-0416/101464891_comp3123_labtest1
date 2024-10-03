const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject('Input should be an array.');
            return;
        }
        let result = []; 
        for (let i = 0; i < mixedArray.length; i++) {
            if (typeof mixedArray[i] === 'string') { 
                result.push(mixedArray[i].toLowerCase()); 
            }
        }
        resolve(result); 
    });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result)) 
    .catch(error => console.error(error));
