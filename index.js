const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req,resp) => {
    resp.json({
        "Hey":"NodeJS"
    })
})

app.listen(PORT,()=>{
    console.warn("App Listning on Port:",PORT)
})