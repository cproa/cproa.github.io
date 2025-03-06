const fs = require('fs');  // Usamos fs para leer y escribir archivos
const path = require('path');

const commentsFile = path.join(__dirname, '../../comments.json');  // Ruta al archivo de comentarios

exports.handler = async (event, context) => {
    if (event.httpMethod === 'GET') {
        // Leer los comentarios desde el archivo
        const comments = JSON.parse(fs.readFileSync(commentsFile, 'utf-8'));
        return {
            statusCode: 200,
            body: JSON.stringify(comments),
        };
    } else if (event.httpMethod === 'POST') {
        // Obtener el nuevo comentario desde la solicitud
        const newComment = JSON.parse(event.body);
        const comments = JSON.parse(fs.readFileSync(commentsFile, 'utf-8'));

        // Agregar el nuevo comentario
        comments.push(newComment);

        // Guardar los comentarios nuevamente en el archivo
        fs.writeFileSync(commentsFile, JSON.stringify(comments));

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Comentario agregado con éxito' }),
        };
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Método no permitido' }),
        };
    }
};
