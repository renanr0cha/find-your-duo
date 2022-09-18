import { Request, Response } from "express"

const express = require("express")

const app = express()

app.get('/games', (request: Request, response: Response) => {
  return response.json([])
})

app.post('/ads', (request: Request, response: Response) => {
  return response.status(201).json([])
})

app.get('/games/:id/ads', (request: Request, response: Response) => {
  //const gameId = request.params.id

  return response.json([
    { id:1, name:"Anúncio 1"},
    { id:2, name:"Anúncio 2"},
    { id:3, name:"Anúncio 3"},
    { id:4, name:"Anúncio 4"},
    { id:5, name:"Anúncio 5"},
  ])
})

app.get('/games/:id/discord', (request: Request, response: Response) => {
  //const gameId = request.params.discord

  return response.json([])
})

app.listen(3333)