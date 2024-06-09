const express = require('express');
const path = require('path');
const db = require('./db/conexion'); // Importa la conexión a la base de datos


const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos exportados de Next.js
app.use(express.static(path.join(__dirname, 'out')));

// API para verificar la conexión a la base de datos
app.get('/api/verificar-conexion', (req, res) => {
    db.query('SELECT 1', (err) => {
      if (err) {
        console.error('Error al verificar la conexión a la base de datos:', err);
        res.status(500).send('Error al conectar a la base de datos');
      } else {
        res.send('Conexión a la base de datos verificada con éxito');
      }
    });
  });
// Manejar todas las demás rutas con el archivo HTML de Next.js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


