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
app.get('/', (req,res) => {
    res.status(200).send('hello world ')
})

app.post('/payments/create', async (req,res) => {
    const total = req.query.total
    console.log('Payment Request received for this amount', total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount:total,
        currency:'usd',
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })

    
})

//-Listen command 
exports.api = functions.https.onRequest(app)

