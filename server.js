const JWT_SECRET_KEY = require('./node_modules/json-server-auth/dist/constants').JWT_SECRET_KEY;
const auth = require('json-server-auth');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(cors());

app.get('/my', auth, (req, res, next) => {
    const token = req.header('Authorization')
        ? req.header('Authorization').replace('Bearer ', '')
        : null;
    if (token) {
        try {
            const data = jwt.verify(token, JWT_SECRET_KEY);
            const { db } = req.app;
            let user = db.get('users').find({ email: data.email }).value();
            res.json(user);
        } catch (error) {
            res.status(401).json(error.message);
        }
    } else {
        res.status(401).json('Missing authorization header');
    }
});

app.db = router.db;
app.use(middlewares);
app.use(router);
app.use(auth);

app.listen(3010);
