import express, { Request } from 'express'

const app = express()
const port = 8080

app.get(
  '/', (req, res) => {
    res.send("Hello, world!")
  },
)

app.get(
  '/hello', (req: Request<undefined, string, any, { name: string }>, res) => {
    res.send(`Hello, ${req.query.name}`)
  },
)

app.get('/concatString/:a/:b', (req, res) => {
  res.send(`Concatenation result: ${req.params.a}${req.params.b}`)
})

app.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`)
})
