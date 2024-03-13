const express = require('express');
const PORT = 8000;
const app = express();

app.get('/api/users', (req, res)=>{
 res.send({
    data: conected,
 })
});

app.listen(PORT, (req, res)=>{
    console.log(`Application is listening on ${PORT}`)
})