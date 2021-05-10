const express = require('express')
const app = express()
const PORT = '3000'
const HOST = 'localhost'

app.use(express.json())

app.get('/GATEForm.html', function (req, res) {
    res.sendFile(__dirname + "/" + "GATEForm.html");
})

app.get('/register_conference', function (req, res) {
    res.json({
        yourName: req.query['Name'],
        yourCity: req.query['City'],
        yourAadharNo: req.query['NO'],
        yourMobileNo: req.query['MobileNo'],
    })
})

app.listen(PORT, HOST, () => console.log(`Server listening on http://${HOST}:${PORT}`))