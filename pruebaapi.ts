import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();
app.use(express.json());

// Endpoint para servir la documentación Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener la lista de usuarios
 *     description: Devuelve una lista de usuarios registrados.
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 */
app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'Maria' }
    ]);
});

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Agrega un nuevo usuario al sistema.
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Carlos"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 */
app.post('/usuarios', (req, res) => {
    const { nombre } = req.body;
    res.status(201).json({ id: Math.floor(Math.random() * 1000), nombre });
});

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualizar un usuario
 *     description: Modifica los datos de un usuario existente.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Carlos Actualizado"
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 */
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    res.json({ id, nombre, mensaje: 'Usuario actualizado' });
});

/**
 * @swagger
 * /usuarios/{id}:
 *   patch:
 *     summary: Modificar parcialmente un usuario
 *     description: Actualiza parcialmente los datos de un usuario.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a modificar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Carlos Modificado"
 *     responses:
 *       200:
 *         description: Usuario modificado parcialmente.
 */
app.patch('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    res.json({ id, nombre, mensaje: 'Usuario modificado parcialmente' });
});

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     description: Elimina un usuario del sistema por su ID.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar.
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 */
app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, mensaje: 'Usuario eliminado' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📄 Documentación Swagger en http://localhost:${PORT}/docs`);
});