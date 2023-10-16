import { RequestHandler } from 'express'

interface CalculationQuery {}

export const PlusQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.json('TODO: plusQuery').end()
}

export const MinusQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.json('TODO: minusQuery').end()
}

export const MultiplyQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.json('TODO: multiplyQuery').end()
}

export const DivideQueryHandler: RequestHandler<
  any,
  number,
  any,
  CalculationQuery
> = (req, res) => {
  res.json('TODO: divideQuery').end()
}
