const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'teste@email.com' && password === '123456') {
    res.json({
      token: 'fake-jwt-token',
      user: { name: 'Usuário Teste', email }
    });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
