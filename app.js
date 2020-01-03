
const express = require('express');
const expressapp = express();
const port = 4000;
expressapp.listen(port, ()=> console.log(`Listening on port ${port}`));
expressapp.get('/', (req,res,next)=>{res.send(`Listening on port ${port}`) 
next()
},(req,res)=>{console.log('Here is the next handler')

})
// expressapp.post('/', (req,res)=>{res.send('Got a POST request')});
// expressapp.use(express.static('public'));