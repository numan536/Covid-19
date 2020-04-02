const express = require('express');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, './build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'))
})

app.listen(process.env.PORT || 4000, () => {
    console.log('port is listening on port 4000')
})