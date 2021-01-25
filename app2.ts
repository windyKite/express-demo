import express from 'express'
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.get('/xxx', (request, response) => {
  response.send('This is a XXX page!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})