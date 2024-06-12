import {db} from '../env.js';

export const deleteSupplierController = async (req, res) => {
    const { supplier_id } = req.body;

    try {
        const query = `DELETE FROM suppliers WHERE supplier_id = ?`;
        db.query(query, [supplier_id], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Supplier not found" });
            } else {
                return res.status(200).json({ message: "Supplier deleted successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


