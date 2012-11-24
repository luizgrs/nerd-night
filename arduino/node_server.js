var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/tty-usbserial1");

serialPort.on('data', function(data) { /* processing data */ });