"use strict"
let http=require('http');
let port=3000;
let reads=0;

let server=http.createServer(function(req,res){
  reads++;
  if(reads==5){
    throw new Error("test 5");
  }
  res.write('hello, this is a test '+reads);
  res.end();
});
server.on("listening",function(){
  console.log(`server listening on ${port}`);
});
server.listen(port)