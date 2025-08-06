const fs = require('fs');

// destructing
const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//this will create or overwrite the text content 
writeFileSync('./content/third.txt',`Hello this is third text file with ${first} ${second}`)


//this will create or append in the file
writeFileSync('./content/third.txt',`Hello this is third text file with ${first} ${second}`, {flag:'a'})



console.log(first, second)







