const express = require('express');
const app = express();
const port = 3000;

const ubigeos = require('./ubigeos');

app.get('/consulta', (req, res) => {
    const distritoBuscado = req.query.distrito.toLowerCase();

    const resultado = ubigeos.find(obj => obj.distrito.toLowerCase() === distritoBuscado);
    if (resultado) {
        res.json({ ubigeo: resultado.ubigeo });
    } else {
        res.status(404).send('Distrito no encontrado');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});