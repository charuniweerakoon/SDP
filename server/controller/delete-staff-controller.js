import {db} from '../env.js';

export const deleteStaffController = async (req, res) => {
    const { staff_id } = req.body;

    try {
        const query = `DELETE FROM staff WHERE staff_id = ?`;
        db.query(query, [staff_id], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(200).json({ message: "Staff deleted successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

