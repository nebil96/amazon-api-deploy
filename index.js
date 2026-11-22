    const express = require("express");
    const cors = require("cors");
    const dotenv = require("dotenv");
    dotenv.config();
    const stripe = require("stripe")(process.env.STRIPE_KEY);

    const app = express();
    app.use(cors({ origin: true }));
    app.use(express.json());

    app.get("/", (req, res) => {
    res.status(200).json({
        message: "Working...",
    });
    });

    app.post("/payment/create", async (req, res) => {
    try {
        // the frontend sends dollars (20.98), Stripe needs cents (2098)
        const total = Math.round(Number(req.query.total) * 100);

        if (total > 0) {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
        });

        res.status(201).json({
            clientSecret: paymentIntent.client_secret,
        });
        } else {
        res.status(403).json({
            message: "total must be greater than 0",
        });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
    });

    // Render gives the port through process.env.PORT
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${PORT}`);
    });