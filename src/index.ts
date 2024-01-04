import express, { NextFunction, Express, Request, Response } from "express"


// const express = require('express')
const app: Express = express()
const PORT: number = 3000

function Middleware(req: Request, res: Response, next: NextFunction): Number {

    console.log('Inside Middleware : ' + req.originalUrl)

    next()

    return 1;
    // doesn't affect functionality of code
}

function Middleware2(req: Request, res: Response, next: NextFunction) {

    console.log('Inside Middleware 2 : ' + req.originalUrl)
    res.locals.temp_var = "Hi there"
    next()

}

app.use(Middleware)
// app.use(Middleware)
//  Adding same middlewar again makes it call multiple time
app.use(Middleware2)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('inside get:/')


    res.send("WELCOME TO NODE + Express + TYPESCRIPT APP \n\n" + JSON.stringify(res.locals))

})


function Middleware3(req: Request, res: Response, next: NextFunction) {

    console.log('Inside Middleware 3 : ' + req.originalUrl)

}

app.use(Middleware3)

app.listen(PORT, () => {
    console.log(`App is  listening on PORT : ${PORT}`)
})