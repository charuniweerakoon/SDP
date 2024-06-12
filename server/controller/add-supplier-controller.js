import {db} from '../env.js';

export const addSupplierController = async (req, res) => {
    const { supplier_id, company_name, contact_name, phone, email } = req.body;

    try {
        const query = `INSERT INTO suppliers (supplier_id, company_name, contact_name, phone, email) VALUES (?, ?, ?, ?, ?)`;
        db.query(query, [supplier_id, company_name, contact_name, phone, email], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(200).json({ message: "Supplier added successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
