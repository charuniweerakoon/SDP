import {db} from '../env.js';
export const getNextStaffId = (lastStaffId) => {
    if (!lastStaffId) return 'S0001';
    const number = parseInt(lastStaffId.slice(1)) + 1;
    return 'S' + number.toString().padStart(4, '0');
};

export const getNextStaffIdController = async (req, res) => {
    try {
        const query = 'SELECT staff_id FROM staff ORDER BY staff_id DESC LIMIT 1';
        const result = await new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const lastStaffId = result.length ? result[0].staff_id : null;
        const newStaffId = getNextStaffId(lastStaffId);

        res.json({ staff_id: newStaffId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};
