import { RequestHandler } from 'express'

interface CalculationQuery {}

export const PlusQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.send('TODO: plusQuery').end()
}

export const MinusQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.send('TODO: minusQuery').end()
}

export const MultiplyQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.send('TODO: multiplyQuery').end()
}

export const DivideQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.send('TODO: divideQuery').end()
}
