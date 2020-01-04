//A server created using the node.js express framework and serves/hosts
//a public folder where the site html resides to render the web page
const express = require('express');
const expressapp = express();
const port = 4000;
expressapp.listen(port, ()=> console.log(`Listening on port ${port}`));
// expressapp.get('/', (req,res)=>{res.send(`Listening on port ${port}`) 

// })
// expressapp.post('/', (req,res)=>{res.send('Got a POST request')});
expressapp.use(express.static('public'));