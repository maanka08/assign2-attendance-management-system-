const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./config/db');

const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.use('/attendance', attendanceRoutes);

app.listen(3000,()=>console.log('Server running on 3000'));
