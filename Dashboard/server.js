const express = require('express')
const app = express()
const PORT = 3080

app.get('/', (req, res) => {
    
    res.json({
        success: true
    })

})

app.get('/devices', (req, res) => {
    const devices = ({

        id: 123, 
        name: "Alejo Test"

    })
    res.json({
        success: true,
        devices: devices
    })

})

app.listen(PORT)