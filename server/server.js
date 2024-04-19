const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3002;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/tickets', async (req, res) => {
  const tickets = router.db.getState().tickets;
  res.status(200).json(tickets);
});

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

server.use(router);
server.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
