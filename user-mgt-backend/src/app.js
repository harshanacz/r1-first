const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controllers/controller');


// const corsOptions = {
//     origin: "http://localhost:5173",
//     optionsSuccessStatus: 200
//   };

app.use(cors());

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers((err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.send(data);
    });
});


app.get('/users/:id', (req, res) => {
    controller.getUserbyId(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.send(data);
    });
});

module.exports = app;