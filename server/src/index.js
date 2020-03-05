import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config';
import Middlewares from './api/middlewares'
import Authentication from './api/authentication'
import UserRouter from './user/router'

//** Check that an environmental variable is initialized **
if(!process.env.JWT_SECRET) {
    const err = new Error('No JWT_SECRET in env variable, check instructions: https://github.com/samodum/base-mern#prepare-your-secret');
    console.error(err);
}

//** Initialize express **
const app = express();

//** Hookup Database **
connectDB();

//** Setup App ** 
app.use(
    cors({ origin: ['https://www.samodum.com', 'http://localhost:3000'] })
);
app.use(morgan('dev'));
app.use(express.json({extended: false}))

//** Define Routes **
app.get('/ping', (req, res) => res.send('pong'))
app.get('/', (req, res) => res.json({'source': 'https://github.com/samodum/base-mern'}))
app.post('/signup', Authentication.signup)
app.post('/signin', Authentication.signin)
app.get('/auth-ping', Middlewares.loginRequired, (req, res) => res.send('connected'))
app.use('/user', Middlewares.loginRequired, UserRouter)

// app.use((err, req, res, next) => {
//     console.log('Error:', err.message);
//     res.status(422).json(err.message);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log( `\x1b[32m`, `Server started on port ${PORT}`, `\x1b[32m`))