import mongoose from 'mongoose'

const Schema = mongoose.Schema

const fishSchema = new Schema({
name: {type: String, required: true},
breed: {type: String, default: 'Mixed'},
age: {type: Number, default: 0},
}, {
timestamps: true
})

const Fish = mongoose.model('Fish', fishSchema)

export {Fish}