const http = require('http')

const host = 'localhost';
const puerto = 8000;

const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'package/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ nombre: 'marilin', mensaje: 'aprendiendo un poco mas' }));
  })

  servidor.listen(puerto, host, () => {
    const mensaje = `Servidor en ejecución en http://$host:${puerto}`;
    console.log(chalk.green(mensaje));
  });