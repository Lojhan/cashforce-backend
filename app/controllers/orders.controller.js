const db = require('../config/database');
const Order = db.orders
const Buyer = db.buyers
const Provider = db.providers

exports.getAll = async (req, res) => {
    try {
        const orders = await Order.findAll({ include: [Buyer, Provider] })
        res.send(orders)
    } catch {
        res.status(404)
    }
}

