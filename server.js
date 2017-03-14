const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/public'))
app.use('/vendors', express.static(__dirname + '/node_modules'))

app.get('/', (req,res,next)=>{
  res.sendFile(__dirname + '/index.html');
})

const port = process.env.PORT || 3000;
app.listen(port, console.log(`listening on port ${port}`))
