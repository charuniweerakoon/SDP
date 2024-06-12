import { db } from '../env.js';

export const getNextServiceId = (lastServiceId) => {
    if (!lastServiceId) return 'SER-001';
    const number = parseInt(lastServiceId.slice(4)) + 1;
    return 'SER-' + number.toString().padStart(3, '0');
};

export const getNextServiceIdController = async (req, res) => {
    try {
        const query = 'SELECT service_id FROM services ORDER BY service_id DESC LIMIT 1';
        const result = await new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const lastServiceId = result.length ? result[0].service_id : null;
        const newServiceId = getNextServiceId(lastServiceId);

        res.json({ service_id: newServiceId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};
