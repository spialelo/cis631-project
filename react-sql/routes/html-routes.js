const mysql = require('mysql');

const SELECT_ALL_EMPLOYEES = 'SELECT * FROM employee';
const SELECT_ALL_FLIGHTS = 'SELECT * FROM flights';
const SELECT_ALL_AIRCRAFTS = 'SELECT * FROM aircraft';
const SELECT_ALL_ATTENDANTS = 'SELECT * FROM flight_attendant';
const SELECT_ALL_FLIGHT_INSTANCES = 'SELECT * FROM flight_instance';


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