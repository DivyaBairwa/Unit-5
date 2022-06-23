const file = require("fs")
const path = require('path')
// for reading data....
const data = file.readFileSync('./test.txt',{encoding:"utf-8"},{encoding:"utf-8"})
file.readFile(
    path.join(".","test.txt"),
    {encoding:"utf-8"},
    (err,data)=>{
    if(err)
    {
        console.log(err);
    }
    console.log(data)
})
 


// // for adding data to existing data
file.appendFile('./test.txt', " to masai school",(err,data)=>{
    if(err){
        console.log(err);
    }
  
})
file.appendFileSync("./test.txt", ". And learn Coding")
file.writeFileSync("test.txt","Divya")


const data1=file.readFileSync('./test.txt',{encoding:"utf-8"},{encoding:"utf-8"})
console.log(data1);



file.renameSync('./test.txt',"new.txt")


const directionaryPath = path.join(__dirname, './');
file.readdir(directionaryPath,(err,data)=>{
    if(err){
        return console.log("unable to find directionary"+ err)
    }
    else{
        console.log("All Files :",data);
        data.map((item)=>{
            console.log(item);
        })
    }
})
