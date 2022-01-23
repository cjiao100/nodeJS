const readline = require('readline')

const IReadline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

IReadline.question(`what's you are name\n`, (name) => {
    console.log(name)
    IReadline.close()
})
