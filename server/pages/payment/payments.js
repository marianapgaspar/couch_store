const dotenv = require("dotenv");
dotenv.config();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripe = require("stripe")(stripeSecretKey);

    const storeItems = new Map([
        [1, {price: 1000, name: "First product"}],
        [2, {price: 2000, name: "Second product"}],
    ])
exports.checkout = async function (req, res) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: req.body.items.map(item => {
              const storeItem = storeItems.get(item.id)
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: storeItem.name,
                  },
                  unit_amount: storeItem.price,
                },
                quantity: item.quantity,
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