import {db} from '../env.js';

export const deleteProductController = async (req, res) => {
    const { productId } = req.body;

    try {
        const query = `DELETE FROM products WHERE product_id = ?`;
        db.query(query, [productId], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(200).json({ message: "Product deleted successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};