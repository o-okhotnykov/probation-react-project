const { SALT_LENGTH, JWT_SECRET_KEY } = require('./node_modules/json-server-auth/dist/constants');
const auth = require('json-server-auth');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(cors());

app.use(function (req, res, next) {
    setTimeout(next, 1000);
});

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

app.post('/changePassword', auth, async (req, res, next) => {
    const { oldPassword, newPassword } = req.body;
    const authHeader = req.header('Authorization');
    const token = authHeader ? authHeader.replace('Bearer ', '') : null;

    if (!oldPassword || !newPassword || oldPassword === newPassword) {
        return res.status(400).json('Missing required fields');
    }

    if (!token) {
        return res.status(401).json('Missing authorization header');
    }

    try {
        const data = jwt.verify(token, JWT_SECRET_KEY);
        const { db } = req.app;
        const user = db.get('users').find({ email: data.email });
        const userData = user.value();

        if (!(await bcrypt.compare(oldPassword, userData.password))) {
            throw new Error('Password is invalid');
        }

        const hash = await bcrypt.hash(newPassword, SALT_LENGTH);
        const newUser = user.assign({ password: hash }).write();

        res.json(newUser);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

app.db = router.db;
app.use(middlewares);
app.use(auth);
app.use(router);

app.listen(3010);
