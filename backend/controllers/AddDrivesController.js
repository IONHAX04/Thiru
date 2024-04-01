const addDriveModel = require('../models/AddDrivesModels')

module.exports.getDrive = async (req, res) => {
    const drives = await addDriveModel.find()
    res.send(drives)
}

module.exports.setDrive = async (req, res) => {
    console.log('Checking drive', req.body);
    const { selectedType, placementType, instituteType, offerType, editorValue, driveName, companyName, companyURL, location } = req.body;

    try {
        const newDrive = await addDriveModel.create({
            selectedType,
            placementType,
            instituteType,
            offerType,
            editorValue,
            driveName,
            companyName,
            companyURL,
            location
        });

        console.log("Drive Saved:", newDrive);
        res.status(201).json(newDrive);
    } catch (err) {
        console.error("Error saving drive:", err);
        res.status(400).json({ error: err, msg: "Save failed" });
    }
}


module.exports.updateDrive = (req, res) => {
    const { id } = req.params
    const { task } = req.body
    addDriveModel.findByIdAndUpdate(id, { task })
        .then(() => res.send("Drive Updated da"))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Update aagala" })
        })
}

module.exports.deleteDrive = (req, res) => {
    const { id } = req.params
    const { task } = req.body
    addDriveModel.findByIdAndDelete(id)
        .then(() => res.send("Deleted da"))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: 'Delete aagala' })
        })
}