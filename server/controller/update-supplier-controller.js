import {db} from '../env.js';

export const updateSupplierController = async (req, res) => {
    const { supplier_id, company_name, contact_name, phone, email } = req.body;

    try {
        const query = `UPDATE suppliers SET company_name = ?, contact_name = ?, phone = ?, email = ? WHERE supplier_id = ?`;
        db.query(query, [company_name, contact_name, phone, email, supplier_id], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Supplier not found" });
            } else {
                return res.status(200).json({ message: "Supplier updated successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


