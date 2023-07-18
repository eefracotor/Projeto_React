const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Resto del código de tu aplicación

app.listen(PORT, () => {
  console.log(`La aplicación está escuchando en el puerto ${PORT}`);
});
