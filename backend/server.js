const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')
const dailyDairy = require('./routes/dailyDairy')
const cors = require('cors')

app.use(cors({
    origin: 'https://dairy-2.onrender.com',
    methods: ['GET', 'POST', 'DELETE']
}))
app.use(express.json());
app.use('/api/dairy', dailyDairy);


mongoose.connect(process.env.MONG_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server is listening on port 4000... & Connected to DB');
    })
})
.catch(error => {
    console.log(error)
})
