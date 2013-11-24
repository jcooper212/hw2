#! /usr/bin/env node

var fs = require('fs');

var outfile = "hello.txt";

var prt_line = "Startup is built to grow rapidly \n"; 

fs.writeFileSync(outfile, prt_line);

console.log("Script: " + __filename + "\nWrote: " + prt_line + "To: " + outfile);





