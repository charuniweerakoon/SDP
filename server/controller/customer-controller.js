import {db} from '../env.js';

// export const addcustomerController = async(req,res) => {
//     const {customerId,firstName,lastName,phone,email} = req.body;

//     try{
//         const data = await addcustomerService(customerId,firstName,lastName,phone,email);
//         return res.status(200).json(data);
//     }catch(err){
//         return res.status(500).json({message:err.message});
//     }
// }




// export const addcustomerService = async(customerId,firstName,lastName,phone,email) => {
//     return new Promise((resolve, reject) => {
//         const q = `INSERT INTO customer(customer_id,first_name,last_name,phone,email) VALUES(?,?,?,?,?)`;
//         db.query(q,[customerId,firstName,lastName,phone,email],(err,data) => {
//             if(err) {
//                 reject(err);
//             }else{
//                 resolve ("added successfully");
//             }
//         })
//     })
   

   
// }

// import {db} from '../db.js'; // Ensure this is the correct path to your database connection file

export const addCustomerController = async (req, res) => {
    const {  first_name, last_name, phone, email } = req.body;

    try {
        const query = `INSERT INTO customer ( first_name, last_name, phone, email) VALUES ( ?, ?, ?, ?)`;
        db.query(query, [first_name, last_name, phone, email], (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            } else {
                return res.status(200).json({ message: "Customer added successfully" });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
