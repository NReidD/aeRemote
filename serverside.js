var data = ""

const net = require('net');
var servRun = false
const server = net.createServer((c) => {
c.setEncoding('utf-8')
    c.on('connect', () => {
        servRun = true
    })
    console.log('client connected');
    c.on('end', () => {
        console.log('client disconnected');
    });
    c.on('data', (data) => {
      iterNum(data)
    })
    module.exports = {c}
    c.write('GetNum\r\n');
    c.pipe(c);
 function iterNum(nums){
    var amt = Number(nums)
    for (let index = 1; index < amt; index++) {
        c.write("GetData: "+index+"\n")
        c.on('data', (info) =>{

        })
    }
}


    return c;

});


server.listen(9000, () => {
    console.log('server socket listening ...');
});

module.exports = {server, servRun}