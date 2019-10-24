/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const connection = require('./db');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();
    server.use(bodyParser.json());
    server.use(
        bodyParser.urlencoded({
            extended: true
        })
    );

    server.get('/', (req, res) => res.redirect('/user'));

    server.get('/user', (req, res) => {
        app.render(req, res, '/user', { something: 5 });
    });

    server.get('/login', (req, res) => {
        app.render(req, res, '/login');
    });

    server.post('/login', (req, res) => {
        console.log('logging');
        console.log(req.body);
        app.render(req, res, '/login');
    });

    server.get('/api/getUser', (req, res) => {
        connection.query('SELECT * FROM customer', (_, results) => {
            console.log(results[0]);
            const { id } = results[0];
            const user = {
                id,
                username: results[0].full_name,
                password: 'epam super'
            };
            res.json({ user });

            connection.end();
        });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on http://localhost:${port}`);
    });
})();
