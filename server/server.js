const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const usersRoutes = require('./routes/users');
const projetsRoutes = require('./routes/projetsRoutes');
const contactRoutes = require('./routes/contactRoutes');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');
const likesRoutes = require('./routes/likes');
const viewsRoutes = require('./routes/views');
const categoriesRoutes = require('./routes/categories');
const tagsRoutes = require('./routes/tags');

//environnement .env
dotenv.config();

// Initialisation
const app = express();

//utilisation du route 
app.use('/api/users', usersRoutes);
app.use('/api', projetsRoutes);
app.use('/api', contactRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/likes', likesRoutes);
app.use('/api/views', viewsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/tags', tagsRoutes);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Database connection error:', err));

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));