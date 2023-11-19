const express = require('express')
const app = express()
const router = app.router();
const port = 3000
const dotenv = require('dotenv')
dotenv.config()
app.use(express.json())
const { exec } = require("child_process");

app.post('/hooks/${app}', (req, res) => {
  const secrete = req.body.secrete

  if (secrete === process.env.SECRETE) {
    const path = `/home/camindev/${req.body.path}`
    exec(path, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message1}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
