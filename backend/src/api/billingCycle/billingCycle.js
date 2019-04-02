const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: true},
    value: { type: Number, min: 0, required: true}
})

const debitSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name not found']},
    value: { type: Number, min: 0, required: [true, 'Value not found']},
    status: { type: String, required: false, uppercase: true, enum: ['PAYMENT Ok', 'PENDING', 'SCHEDULE']}
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name not found']},
    month: { type: Number, min: 1, max: 12, required: [true, 'Value not found']},
    year: { type: Number, min: 1970, max: 2100, required: [true, 'Year not found']},
    credits: [creditSchema],
    debits: [debitSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)