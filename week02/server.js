const http = require('http')

http
  .createServer((request, response) => {
    let body = []
    request
      .on('error', (err) => {
        console.error(err)
      })
      .on('data', (chunk) => {
        body.push(chunk)
      })
      .on('end', () => {
        body = body.join('')
        // body = Buffer.concat(body).toString()
        console.log('body:', body)
        response.writeHead(200, {
          'Content-Type': 'text/html',
          'Transfer-Encoding': 'chunked',
        })
        response.end('Hello World\n')
      })
  })
  .listen(8088)

console.log('server started')
