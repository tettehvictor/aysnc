const Student = require('../models/studentModel')

const getAllStudent = async (req, res) => {
    try {
        const students = await Student.find()
        return res.status(200).json(students)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const createStudent = async (req, res) => {
   if(!req.body.name){
    return res.status(400).json({message: 'please enter your name'})
   }if(!req.body.email){
    return res.status(400).json({message: 'please enter your email'})
   }if(!req.body.phone){
    return res.status(400).json({message: 'please enter your phone'})
   }if(!req.body.password){
    return res.status(400).json({message: 'please enter your password'})
   }

   try{
        const newStudent = await Student.create({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
           password:req.body.password,
        })
        return res.status(201).json(newStudent)
   }catch (error) {
    return res.status(500).json(error)
   }
}
const getAStudent = async (req, res) => {
    try {
        const singleStudent = await Student.findById(req.params.id)
        return res.status(200).json(singleStudent)
    } catch (error) {
        return res.status(500).json(error)
    }
}
const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(updatedStudent) {
            return res.status(200).json(updatedStudent);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}
const deleteAStudent = async (req,res) => {
    try {
      const deletedStudent = await Student.findByIdAndDelete(req.params.id)
      if(deletedStudent){
        return res.staus(200).json({message: 'student deleted sucessfully'})
      }  
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getAllStudent, createStudent, getAStudent, updateStudent, deleteAStudent} 