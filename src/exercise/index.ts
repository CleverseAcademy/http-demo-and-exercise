import express, { Request } from 'express'
import {
  DivideHandler,
  MinusHandler,
  MultiplyHandler,
  PlusHandler,
} from './handlers/param'
import { DivideQueryHandler, MinusQueryHandler, PlusQueryHandler } from './handlers/query'

const app = express()
const port = 8080

interface CalculationQuery {}

type RequestWithQuery = Request<any, number, any, CalculationQuery>

app.get('/plus/:a/:b', PlusHandler)

app.get('/minus/:a/:b', MinusHandler)

app.get('/multiply/:a/:b', MultiplyHandler)

app.get('/divide/:a/:b', DivideHandler)

app.get('/plusQuery', PlusQueryHandler)

app.get('/minusQuery', MinusQueryHandler)

app.get('/multiplyQuery', MultiplyHandler)

app.get('/divideQuery', DivideQueryHandler)

app.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`)
})