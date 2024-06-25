const fs = require('fs')

// Write file or create file

fs.writeFile('output.txt', 'Hello from NodeJS', (err) => {
    if (err) {
        throw err
    } else {
        console.log("File written successfully");
    }
})

// Reading file

fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) {
        throw err
    } else {
        console.log(data);
    }
})

// use fs.open for creating file or unlink for deleting file