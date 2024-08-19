var net = require('net')

const server = net.createServer((c) => {
    c.setEncoding('utf-8')
    console.log('client connected');
    x = 1
    c.on('end', () => {
        console.log('client disconnected');
    });
    c.setDefaultEncoding('utf-8')
    c.on('data', (data) => {
      console.log(data)
datas = data
    })
    c.write('hello\r\n');
    c.pipe(c);
    module.exports = {server,x, c}
});
server.listen(90, () => {
 console.log("test")
})