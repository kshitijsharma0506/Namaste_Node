const fs = require('fs');

// destructing
const {readFile, writeFile} = require('fs');
readFile('./content/first.txt','utf8', (err,res)=>{
    if(err){
        console.log(err)
    } else{
        console.log(res)
    }
})

writeFile('./content/thirdAsync.txt','This is the third file using async method!', 'utf8',(err,res)=>{
    if(err){
        console.log(err);
    } else{
        console.log('The file has been saved!')
    } 
})




