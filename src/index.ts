import express, { NextFunction, Express, Request, Response } from "express"

// const express = require('express')
const app: Express = express()
const PORT = 3000


app.get('/', (req: Request, res: Response, next: NextFunction) => {

    res.send("WELCOME TO NODE + Express + TYPESCRIPT APP 67")
})

app.listen(PORT, () => {
    console.log(`App is  listening on PORT : ${PORT}`)
})