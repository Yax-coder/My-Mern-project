const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const connectDB = require('./config/db')
// mongoose.connect("mongodb+srv://yahaya:12345@devconnector.lbu7w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");




const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const auth = require('./routes/api/auth');

const app = express();


connectDB();
app.use(express.json({ extended: false }))
app.use(
     cors({
       origin: "http://localhost:3000"
     })
   );

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB


app.get('/', (req, res) => res.send('Hello World Yax'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
