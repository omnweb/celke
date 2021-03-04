const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orcamento = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    whatsapp: {
        type: String,
    },
    project: {
        type: String,
    }

}, {
    timestamps: true
})

mongoose.model('Orcamento', orcamento)