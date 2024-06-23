// http module
const http = require('http')
// file system module
const fs = require('fs')
// path module
const path = require('path')
// os module
const os = require('os')

//---------------------------------------------------
// creating server
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("<h1>Hello World</h1>")
    res.end
}).listen(3000,()=>{
    console.log("Server is running on port 3000")
})

// server running or listening

//---------------------------------------------------

// file writing or reading

// can be created also with fs.open

fs.writeFile('hello.txt',"Hello Node JS" , (err)=>{
    if (err) {
        throw err
    }
    else{
        console.log("File written successfully")
    }
})

fs.readFile('hello.txt','utf8',(err,data)=>{
    if (err) {
        throw err
    } else {
        console.log(data);        
    }
})

// for deleting use fs.unlink instead of fs.writefile & fs.open

//---------------------------------------------------

// working with file paths

const filepath = '/hello.txt'

console.log("Directory: " ,path.dirname(filepath));
console.log("Basename: " ,path.basename(filepath));
console.log("Extention: " ,path.extname(filepath));

//-----------------------------------------------------

// os info

console.log('OS Platform:', os.platform());
console.log('OS CPU Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log('Uptime:', os.uptime());