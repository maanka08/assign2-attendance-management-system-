const express = require('express');
const Attendance = require('../models/Attendance');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async(req,res)=>{
  res.json(await Attendance.create(req.body));
});

router.get('/', auth, async(req,res)=>{
  res.json(await Attendance.find().populate('student'));
});

module.exports = router;
