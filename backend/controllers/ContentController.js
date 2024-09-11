const Dairy = require('../model/DairyModel')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const getDairy = async (req, res) => {
    try {
        const dairy = await Dairy.find().sort({ createdAt: -1 }); // Sorting by createdAt in descending order
        res.status(200).json(dairy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
 
const createDailyDairy = async (req, res) => {
    const { content } = req.body;
    try {
        const createDairy = await Dairy.create({content: content})
        res.status(200).json(createDairy);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteDailyDairy = async(req, res) => {
    const { id } = req.params;
    if(ObjectId.isValid(id)) {
        try {
            const deleteOne = await Dairy.findOneAndDelete({_id: id})
            if(!deleteOne) {
                return res.status(404).json({error: 'No such object'})
            }
            else {
                res.status(200).json(deleteOne);
            }
        } catch (error) {
            res.status(500).json({ error: 'Id is not valid' })
        }
    }

}
module.exports = { getDairy, createDailyDairy, deleteDailyDairy}