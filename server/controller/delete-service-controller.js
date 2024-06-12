import {db} from '../env.js';

export const deleteServiceController = async (req, res) => {
    const { service_id } = req.body;

    try {
        const query = `DELETE FROM services WHERE service_id = ?`;
        db.query(query, [service_id], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(200).json({ message: "Service deleted successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
