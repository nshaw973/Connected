require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const multer = require('multer');
const crypto = require('crypto');
const cors = require('cors');

const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
const { authMiddleware } = require('./utils/auth.js');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    crypto.randomBytes(4, (err, buffer) => {
      if (err) {
        return cb(err);
      }
      const randomString = buffer.toString('hex');
      const fileExtension = path.extname(file.originalname);
      const filename = randomString + fileExtension;
      cb(null, filename);
    });
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(new Error('Only PNG and JPEG file types are allowed'), false);
  }
};

const limits = {
  fileSize: 3 * 1024 * 1024, // 3MB file size limit
};

const upload = multer({ storage, fileFilter, limits });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post('/upload', upload.single('file'), (req, res) => {
  const { filename } = req.file;
  res.json({ filename: filename, message: 'File uploaded successfully!' });
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// This is to get stripe to take the user back the the /success page of our application
app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get('/jobs', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get('/myportal/developer', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get('/developer', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get('/myportal/recruiter', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get('/recruiter', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/image/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', filename);
  
  res.sendFile(filePath);
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();
