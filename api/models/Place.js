const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    owener: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },    
    title : String,
    address : String,
    description : String,
    photos: [String],
    description : String,
    perks: [String],
    extraInfo: String,
    checkIn: Number,
    checkOut: Number,
    maxGuests: Number, 
})

const PlaceModel = mongoose.model('Place', placeSchema)

mongoose.model.exports = PlaceModel;