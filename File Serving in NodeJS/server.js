const http = require('http')
const fs = require('fs')
const path = require('path')
const filepath = path.join(__dirname, '/index.html')

const server = http.createServer((req, res) => {
    fs.readFile(filepath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write("Server error occured")
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
        }
        res.end()
    })
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})