# Ecommerce Demo

A full-stack online shopping demo project. Browse products, add them to a cart, sign in, pay with Stripe, and view your order history.

> Demo project only. Not a real store. Do not enter real card details or passwords.

## Features
- Product listing, categories and product detail pages
- Cart with add/remove and quantity
- Sign up and sign in with Firebase Authentication
- Protected routes (payment and orders need a signed-in user)
- Stripe card payments in test mode (PaymentIntent created on the backend)
- Orders saved in Firestore and shown on the Orders page; cart clears after payment

## Tech stack
React, Vite, React Router, Firebase (Auth, Firestore), Stripe, Node.js, Express, Axios

## Run locally
1. Clone the repo and run `npm install`
2. Copy `.env.example` to `.env` and fill in your Firebase and Stripe publishable keys
3. Start the backend (set `STRIPE_KEY` in the server's `.env`)
4. Run `npm run dev`

## Test card
`4242 4242 4242 4242`, any future date, any CVC
