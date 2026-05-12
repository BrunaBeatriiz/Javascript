const express = require("express");
const app = express();
const PORT = 3000;

app.get("/usuarios", (req, res) => {
  res.json([{ id: 1, nome: "Teste", email: "teste@mail.com" }]);
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
