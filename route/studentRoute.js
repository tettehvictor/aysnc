const express = require('express')
const { getAllStudent, createStudent, getAStudent, updateStudent, deleteAStudent } = require('../controller/studentController')
const router = express.Router()

router.route('/students').get(getAllStudent).post(createStudent)
router.route('/students/:id').get(getAStudent).put(updateStudent).delete(deleteAStudent)




module.exports = router