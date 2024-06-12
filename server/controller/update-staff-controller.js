import {db} from '../env.js';

export const updateStaffController = async (req, res) => {
    const { staff_id, name, contact_number, email, nic_number, user_role } = req.body;

    try {
        const query = `UPDATE staff SET name = ?, contact_number = ?, email = ?, nic_number = ?, user_role = ? WHERE staff_id = ?`;
        db.query(query, [name, contact_number, email, nic_number, user_role, staff_id], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(200).json({ message: "Staff updated successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

