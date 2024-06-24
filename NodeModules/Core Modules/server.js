const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(202,{'Content-Type':'text/html'})
    res.write("<h1>Hello NodeJS</h1>")
    res.end()
})

const PORT = 3000

server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})