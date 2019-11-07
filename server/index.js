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

    server.get('/', (req, res) => res.redirect('/login'));

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

    server.get('/api/courses', (req, res) => {
        const courses = [
            {
                id: 0,
                text: 'Frontend development',
                imgPath:
                    'https://i.udemycdn.com/course/750x422/2314744_c707.jpg',
                href: 'vk.com'
            },
            {
                id: 1,
                text: 'Frontend development',
                imgPath:
                    'https://i.udemycdn.com/course/750x422/2314744_c707.jpg',
                href: 'vk.com'
            },
            {
                id: 3,
                text: 'Frontend development',
                imgPath:
                    'https://i.udemycdn.com/course/750x422/2314744_c707.jpg',
                href: 'vk.com'
            },
            {
                id: 3,
                text: 'Frontend development',
                imgPath:
                    'https://i.udemycdn.com/course/750x422/2314744_c707.jpg',
                href: 'vk.com'
            },
            {
                id: 3,
                text: 'Frontend development',
                imgPath:
                    'https://i.udemycdn.com/course/750x422/2314744_c707.jpg',
                href: 'vk.com'
            }
        ];
        res.json({ courses });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on http://localhost:${port}`);
    });
})();
