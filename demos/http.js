const http = require("http");

const options = {
    // hostname: "http://server.nodejs.cn/",
    "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "proxy-connection": "keep-alive",
        "Referer": "http://nodejs.cn/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
}

const url = 'http://server.nodejs.cn/node/api/count?m=http&id=request_write_chunk_encoding_callback'

const req = http.request(url, options, res => {
    console.log(`状态码: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()

//
// const responsePromise = await fetch("http://server.nodejs.cn/node/api/count?m=http&id=request_write_chunk_encoding_callback", {
//     "headers": {
//         "accept": "*/*",
//         "accept-language": "zh-CN,zh;q=0.9",
//         "proxy-connection": "keep-alive",
//         "Referer": "http://nodejs.cn/",
//         "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": null,
//     "method": "GET"
// });
//
// console.log(responsePromise);
