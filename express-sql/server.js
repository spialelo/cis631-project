const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const PORT = process.env.PORT || 4000; // set up port

const app = express(); // initialize express

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'X-23-Rogue-86', // update password
    database: 'flightsdb_schema'
});

connection.connect((err) => {
    (err) ? console.log(err): console.log(connection);
});
app.use(cors());

require('./routes/html-routes')(app, connection);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} - Nicole`);
});