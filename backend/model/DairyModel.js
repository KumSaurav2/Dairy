const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DairySchema = new Schema({
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Dairy', DairySchema);

