import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT  = 4000;

// mongoose connection
mongoose.Promise = global.Promise; // wait for result when connecting to MongoDB
mongoose.connect('mongodb://127.0.0.1/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body parser setup
// allowing parser to parse requests coming in so that they are readable by API
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

routes(app);

app.get('/', (req, res) => {
    res.send(`Node and express server running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`)
});