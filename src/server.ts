const { response } = require("express")
const express = require("express")

const app = express()

app.get('/ads', (request: any, response: { json: (arg0: { id: number; name: string }[]) => any }) => {
  return response.json([
    { id:1, name:"Anúncio 1"},
    { id:2, name:"Anúncio 2"},
    { id:3, name:"Anúncio 3"},
    { id:4, name:"Anúncio 4"},
    { id:4, name:"Anúncio 5"},
  ])
})

app.listen(3333)