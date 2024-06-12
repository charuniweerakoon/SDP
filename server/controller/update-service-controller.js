import {db} from '../env.js';

export const updateServiceController = async (req, res) => {
    const { service_id, service_name, price, description } = req.body;

    try {
        const query = `UPDATE services SET service_name = ?, price = ?, description = ? WHERE service_id = ?`;
        db.query(query, [service_name, price, description, service_id], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(200).json({ message: "Service updated successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

