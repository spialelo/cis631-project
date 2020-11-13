const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');

const PORT = process.env.PORT || 9000; // set up port

const app = express(); // initialize express

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', // update password
    database: 'new_schema'
});

connection.connect((err) => {
    (err) ? console.log(err): console.log(connection);
});
app.use(cors());

require('./routes/html-routes')(app, connection);

app.use(express.static(path.join(__dirname, 'public'))); //here is important thing - no static directory, because all static :)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} - Nicole`);
});
