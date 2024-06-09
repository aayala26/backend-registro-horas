const mysql = require('mysql2');

// Configuración de la conexión a la base de datos MySQL
const conexion = mysql.createConnection({
  host: 'uniminuto-db-instance.cxicswy2ibrh.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: '12345678',
  database: ''
});

// Conectar a la base de datos
conexion.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión establecida con la base de datos MySQL');
});

module.exports = conexion;