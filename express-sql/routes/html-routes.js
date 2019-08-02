const mysql = require('mysql');

const SELECT_ALL_EMPLOYEES = 'SELECT * FROM employee';
const SELECT_ALL_FLIGHTS = 'SELECT * FROM flights';
const SELECT_ALL_AIRCRAFTS = 'SELECT * FROM aircraft';
const SELECT_ALL_ATTENDANTS = 'SELECT * FROM flight_attendant';
const SELECT_ALL_FLIGHT_INSTANCES = 'SELECT * FROM flight_instance';

// routes are the endpoints, we will hit

module.exports = (app, connection) => {
    app.get('/', (req, res) => {
        res.send('Hopefully this is home ?');
    });

    app.get('/employees', (req, res) => {
        connection.query(SELECT_ALL_EMPLOYEES, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/aircrafts', (req, res) => {
        connection.query(SELECT_ALL_AIRCRAFTS, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/flights', (req, res) => {
        connection.query(SELECT_ALL_FLIGHTS, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    //http://localhost:4000/flights/add?flno=8523&origin=newark&destination=san%20diego
    /*
    query works in mysql workbench:
    INSERT into flightsdb_schema.flights( FLNO, ORIGIN, DESTINATION)
values(95265, 'san antonio', 'newark')

    */
    app.get('/flights/add', (req, res) => {
        const { flno, origin, destination } = req.query;
        const INSERT_FLNO_QUERY = `INSERT INTO flights (FLNO, ORIGIN, DESTINATION) VALUES(${flno}, '${origin}', '${destination}')`;
        // quotes around the bloody strings!!!
        connection.query(INSERT_FLNO_QUERY, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send('Flight added successfully.');
            }
        });
    });

    app.get('/attendants', (req, res) => {
        connection.query(SELECT_ALL_ATTENDANTS, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/flight-instance', (req, res) => {
        connection.query(SELECT_ALL_FLIGHT_INSTANCES, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

};