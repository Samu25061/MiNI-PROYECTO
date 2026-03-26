const express = require('express');
const app = express();

app.use(express.json());

let items = [];

// CREATE
app.post('/items', (req, res) => {
    items.push(req.body);
    res.send('Item agregado');
});

// READ
app.get('/items', (req, res) => {
    res.json(items);
});

// UPDATE
app.put('/items/:index', (req, res) => {
    items[req.params.index] = req.body;
    res.send('Item actualizado');
});

// DELETE
app.delete('/items/:index', (req, res) => {
    items.splice(req.params.index, 1);
    res.send('Item eliminado');
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log('Servidor corriendo en puerto 3000');
    });
}

module.exports = app;