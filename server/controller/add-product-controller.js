import {db} from '../env.js';

export const addProductController = async (req, res) => {
    const { product_id, supplier_id, purchase_price, sale_price, type, size, av_quantity } = req.body;

    try {
        const query = `INSERT INTO products (product_id, supplier_id, purchase_price, sale_price, type, size, av_quantity) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [product_id, supplier_id, purchase_price, sale_price, type, size, av_quantity], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(200).json({ message: "Product added successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

