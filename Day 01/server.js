const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // res.writeHead(200, { 'Content-Type': 'text/html' })
        // res.write("<h1>Hello From NodeJS Server</h1>")
        const filepath = path.join(__dirname, '/index.html')
        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write("<h1>Server Error</h1>")
                res.end()
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                res.end
            }
        })
    }
    else {
        res.writeHead(400, { 'Content-Type': 'text/html' })
        res.write("<h1>Server Error</h1>")
        res.end()
    }
})

server.listen(8000, () => {
    console.log("Server is running on Port 8000");
})