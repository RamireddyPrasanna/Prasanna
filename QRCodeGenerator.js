//mport express from 'express';
const express=require('express');
const code=require('qrcode');
//import code from 'qrcode';
const app=express();
const port=5000;
app.get('/qrcode',(req,res)=>
{
    const url='https://jbtechsolutions.github,io/Home/';
    code.toDataURL(url,(err,qrCodeUrl)=>{
        if(err)
        {
            res.status(500).send('Internal Server Error');
        }
        else{
            res.send(`
                <!DOCTYPE HTML>
                <html>
                    <head>
                        <title>QR Code Generator</title>
                    </head>
                    <body>
                        <h1>QR Code Generator</h1>
                        <img src="${qrCodeUrl}" alt="QR code">
                    <p>scan the QR Code to visit website</p>    
                    </body>
                </html>
                `)
        }
    });
});
app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
});