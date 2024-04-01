const cors = require('cors');

const { Router } = require('express')
const {getDrive, setDrive, updateDrive, deleteDrive} = require('../controllers/AddDrivesController')

const router = Router()

router.get("/getDrive", getDrive);
router.post("/savedrive", setDrive);
router.put("/update/:id", updateDrive);
router.delete("/delete/:id", deleteDrive);

module.exports = router