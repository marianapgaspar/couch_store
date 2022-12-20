const dotenv = require("dotenv");
dotenv.config();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripe = require("stripe")(stripeSecretKey);

exports.checkout = async function (req, res) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: req.body.items.map(item => {
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: item.name,
                  },
                  unit_amount: item.price,
                },
                quantity: item.quantity
              }
            }),
            success_url: "http://localhost:3000/payment-sucess",
            cancel_url: "http://localhost:3000/",
        })
        res.json({ url: session.url })
    } catch (e){
        res.status(500).json({error: e.message})
    }
}