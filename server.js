const express = require('express');
const path = require('path');
const db = require('./db/conexion'); // Importa la conexión a la base de datos


const app = express();
app.use(express.json());
const port = process.env.PORT || 3005;

// Servir archivos estáticos exportados de Next.js
app.use(express.static(path.join(__dirname, 'out')));
// API para agregar un nuevo usuario
app.post('/api/usuariosAdd', (req, res) => {
  console.log("req.body",req.body);

  const { nombre, cedula, apellidos, estado } = req.body;
  const estadoNum = estado === 'Activo' ? 1 : 0;
  db.query('INSERT INTO usuarios (NombreUsuario, Documento, ApellidoUsuario, Estado) VALUES (?, ?, ?, ?)', [nombre, cedula, apellidos, estadoNum], (err, result) => {
    if (err) {
      console.error('Error al agregar usuario:', err);
      res.status(500).send('Error al agregar usuario');
    } else {
      res.send({ message: 'Usuario agregado correctamente', id: result.insertId });
    }
  });
});

app.get('/api/usuarios', (req, res) => {
  db.query('SELECT IdUsuario,NombreUsuario as nombre , Documento as cedula,ApellidoUsuario as apellidos, Estado as estado FROM usuarios', (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      res.status(500).send('Error al obtener usuarios');
    } else {
      res.send(results);
    }
  });
});

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


