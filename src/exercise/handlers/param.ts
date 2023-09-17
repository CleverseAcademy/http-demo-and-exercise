import { RequestHandler } from "express";

interface ParamScheme {
  a: string;
  b: string;
}

export const PlusHandler: RequestHandler<ParamScheme, string> = (req, res) => {
  res.send(`${req.params.a} + ${req.params.b} = ?`)
}

export const MinusHandler: RequestHandler<ParamScheme, string> = (req, res) => {
  res.send(`${req.params.a} - ${req.params.b} = ?`)
}

export const MultiplyHandler: RequestHandler<ParamScheme, string> = (req, res) => {
  res.send(`${req.params.a} * ${req.params.b} = ?`)
}

export const DivideHandler: RequestHandler<ParamScheme, string> = (req, res) => {
  res.send(`${req.params.a} / ${req.params.b} = ?`)
}