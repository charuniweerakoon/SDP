import {db} from '../env.js';

export const addStaffController = async (req, res) => {
    const { staff_id, name, contact_number, email, nic_number, user_role } = req.body;

    try {
        const query = `INSERT INTO staff (staff_id, name, contact_number, email, nic_number, user_role) VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(query, [staff_id, name, contact_number, email, nic_number, user_role], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(200).json({ message: "Staff added successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

