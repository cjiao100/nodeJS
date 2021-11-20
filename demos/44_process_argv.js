// node 44_process_argv.js nane=test
console.log(process.argv)

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})