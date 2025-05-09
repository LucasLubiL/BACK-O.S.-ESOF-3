import express, { Request, Response } from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuario.routes';
import funcionarioRoutes from './routes/funcionario.routes';
import clienteRoutes from './routes/cliente.routes';
import client from './config/database';

console.log("✅ Servidor carregado corretamente");

const app = express();
const port = 3000;

// Middleware para aceitar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para permitir requisições de outras origens (frontend)
app.use(cors());

// Testar conexão com banco ao iniciar servidor
client.connect()
  .then(() => console.log('🔌 Conectado ao PostgreSQL com sucesso!'))
  .catch((err) => {
    console.error('❌ Erro de conexão com o banco de dados:', err);
    process.exit(1); // Se falhar ao conectar, encerra o servidor
  });

// Rotas principais do sistema
app.use('/usuarios', usuarioRoutes);
app.use('/funcionario', funcionarioRoutes);
app.use('/cliente', clienteRoutes);

app.get('/testeee', (req: Request, res: Response) => {
  res.send('Servidor está funcionando!');
});

// Caso nenhuma rota seja encontrada:
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});

