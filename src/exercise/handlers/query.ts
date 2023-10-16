import { RequestHandler } from 'express'

interface CalculationQuery {}

export const PlusQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.send('TODO: plusQuery')
}

export const MinusQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.send('TODO: minusQuery')
}

export const MultiplyQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.send('TODO: multiplyQuery')
}

export const DivideQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.send('TODO: divideQuery')
}
