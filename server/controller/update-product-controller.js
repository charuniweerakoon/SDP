export const updateProductController = async (req, res) => {
    const { productId, supplier, purchasePrice, salePrice, type, size, availableQuantity } = req.body;

    try {
        const query = `UPDATE products SET supplier_id = ?, purchase_price = ?, sale_price = ?, type = ?, size = ?, av_quantity = ? WHERE product_id = ?`;
        db.query(query, [supplier, purchasePrice, salePrice, type, size, availableQuantity, productId], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(200).json({ message: "Product updated successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};