// establishes a connection with the game server
const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: "8000",
    //host: "165.227.47.243",
    //port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
   // console.log("Wohoo we're connected!")
    // code that does something when the connection is first established
console.log('Successfully connected to game server');
conn.write('Name: DHS');

//conn.write('Wohoo you\re connected!')
});
  //);

  return conn;
  
};

//const conn = connect();

//const connect = require('./play');

// conn.setEncoding('utf8');

// conn.on('Connect', () => {
//   conn.write('Name: DHS');
// });

module.exports = {connect}