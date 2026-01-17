const express = require('express');
const Student = require('../models/Student');
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const router = express.Router();

router.post('/', auth, role('admin'), async(req,res)=>{
  res.json(await Student.create(req.body));
});

router.get('/', auth, async(req,res)=>{
  res.json(await Student.find());
});

module.exports = router;
