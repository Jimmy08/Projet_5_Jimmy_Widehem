const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3003;

// Activer la compression
app.use(compression({
  threshold: 0,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    console.log(`Compressing ${req.url}`);
    return compression.filter(req, res);
  }
}));

// Servir les fichiers statiques depuis le dossier "assets"
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Servir le fichier index.html à la racine
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
