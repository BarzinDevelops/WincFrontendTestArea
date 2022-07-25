const log = console.log;


/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a 
Promise that tests if the value is less than or greater than the value 10. 
Log the result to the console.
*/
/* const testNum = (number) => { 
    return new Promise((resolve, reject)=>{
        if(number < 10) resolve(`${number} is less than value 10`);
        else if(number > 10) resolve(`${number} is greater than value 10`);
        else reject(`Error-message:\t${number} is equal to value 10.
        \t\tWhat we want check is if number is bigger/smalle than value 10!`);
    })
    .then(result=> log(result))
    .catch(err => log(err.message ? err.message : err)); // if its an custom error msg than err is loged else err.message
};

testNum(11);
testNum(9);
testNum(10);*/
 

/*
Exercise 2:
Write two functions that use Promises that you can chain! 
The first function, makeAllCaps(),
    will take in an array of words and capitalize them, 
The second function, sortWords(), 
    will sort the words in alphabetical order. 
If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (wordsArr) => {
    return new Promise( (resolve, reject) => {
       const checkIfString = wordsArr.every(i => (typeof i === 'string'));
       if(checkIfString) resolve( wordsArr.map(word => word.toUpperCase()) )
       else reject(`Error: Your array must only contain strings!!`);
    } );
};  

const sortWords = (capArr) => {
    return new Promise((resolve, reject) => resolve(capArr.sort()));
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const otherArrayOfWords = ['promise', 'break', 'practise'];
const complicatedArray = ['cucumber', 44, true];

// call both functions, chain them together and log the result to the console
makeAllCaps(arrayOfWords)
    .then(capWords => sortWords(capWords))
    .then(sortedCapWords => log("The sorted Capitalized Words: ",sortedCapWords))
    .catch(err => log(err.message ? err.message : err));

// trying with other words array:    
makeAllCaps(otherArrayOfWords)
    .then(capWords => sortWords(capWords))
    .then(sortedCapWords => log("The sorted Capitalized Words: ",sortedCapWords))
    .catch(err => log(err.message ? err.message : err));

// checking functionality with a array that causes error!
makeAllCaps(complicatedArray)
    .then(capWords => sortWords(capWords))
    .then(sortedCapWords => log("The sorted Capitalized Words: ",sortedCapWords))
    .catch(err => log(err.message ? err.message : err));