const express = require('express');
const app= express();

app.use(express.json());

let usuarios=[
    {id:1, nombre:'Juan'}, 
    {id:2, nombre:'Ana'},
    {id:3, nombre:'Luis'}
];

app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

app.delete('/api/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    usuarios = usuarios.filter(usuario => usuario.id !== id);
    res.json({mensaje: 'Usuario eliminado'});
});

const usuario= usuarios.find(u => u.id === id);
if(!usuario){
    return res.status(404).json({error: 'Usuario no encontrado'});
}

usuario=usuarios.filter(u => u.id !== id);

res.json({
    mensaje: 'Usuario eliminado',
    usuariosEliminados: usuario,
    usuariosRestantes: usuarios
});

app.listen(4321, () => {
    console.log('Servidor escuchando en el puerto 4321');
});