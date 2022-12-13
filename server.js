// // this is the entry file, routing file controller file 
// import http from 'http';
// // const http = require('http');

// const requestListener=(req, res)=>{
//     res.writeHead(200);
//     res.end("My First Server!");
// };

// const server=http.createServer(requestListener);

// server.listen(port,host,()=>{
//     console.log(`Server started in http://${host}:${port}`);
// })
import express from 'express';
const app= express()
const port=5999;
const host='localhost';

app.get('/',(req,res,next)=>{
    res.json({status:true,message:'----server is alive----'})
})
 app.listen(port,host,()=>{
        console.log(`Server started in http://${host}:${port}`);
    })