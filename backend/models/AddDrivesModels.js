const mongoose = require('mongoose');

const addDrivesSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    companyURL: {
        type: String,
        required: true
    },
    driveName: {
        type: String,
        required: true
    },
    editorValue: {
        type: String,
        required: true
    },
    selectedType: {
        type: [Array],
        required: false
    },
    placementType: {
        type: [Array],
        required: false
    },
    instituteType: {
        type: [Array],
        required: false
    },
    offerType: {
        type: [Array],
        required: false
    },
    location: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('AddDrive', addDrivesSchema);
