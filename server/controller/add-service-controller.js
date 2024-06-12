import {db} from '../env.js';

export const addServiceController = async (req, res) => {
    const { service_id, service_name, price, description } = req.body;

    try {
        const query = `INSERT INTO services (service_id, service_name, price, description) VALUES (?, ?, ?, ?)`;
        db.query(query, [service_id, service_name, price, description], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(200).json({ message: "Service added successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

