// netlify/functions/comments.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  const commentsFilePath = path.resolve(__dirname, '../../comments.json');

  if (event.httpMethod === 'POST') {
    try {
      const body = JSON.parse(event.body);
      const newComment = body.comment;
      if (!newComment) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Comentario vacío' })
        };
      }

      // Leer los comentarios existentes
      let comments = [];
      try {
        comments = JSON.parse(fs.readFileSync(commentsFilePath));
      } catch (error) {
        console.log('No se pudo leer el archivo de comentarios:', error);
      }

      // Agregar el nuevo comentario
      comments.push({ comment: newComment, date: new Date().toISOString() });

      // Escribir el archivo actualizado
      fs.writeFileSync(commentsFilePath, JSON.stringify(comments));

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Comentario publicado correctamente' })
      };
    } catch (error) {
      console.error('Error al manejar el comentario:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error al publicar el comentario' })
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Método no permitido' })
  };
};
