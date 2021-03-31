var http=require('http')

http.createServer(function(req,res){
  res.write("Getting started with nodejs")
  res.end()


}).listen(8000)