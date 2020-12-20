const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')

const stripe = require('stripe')('sk_test_51HypvfD6G0dITM6NuPY0yy2Sij6itQ87niYTJHgeKuCy9natdk5f9nYZEMfdkmtE2jFVoQsPaDKHZjp7GXCqQpkt00SnzAPn9T')

//API
const app = express()
//-App config

//-middleware
app.use(cors({origin:true}))
app.use(express.json())

//-API endpoints
app.get('/', (request,response) => {
    response.status(200).send('Hello my peeps! ')
})



app.post('/payments/create', async (request,response) => {
    const total = request.query.total
    console.log('Payment Request Received for this amount', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:'usd',
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })

    
})

//-Listen command 
exports.api = functions.https.onRequest(app)

//Firebase endpoint
//example end point
// http://localhost:5001/clone-e2c91/us-central1/api