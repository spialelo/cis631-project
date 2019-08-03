const mysql = require('mysql');

// test
const SELECT_ALL_EMPLOYEES = 'SELECT * FROM employee';
const SELECT_ALL_FLIGHTS = 'SELECT * FROM flights';
const SELECT_ALL_AIRCRAFTS = 'SELECT * FROM aircraft';
const SELECT_ALL_ATTENDANTS = 'SELECT * FROM flight_attendant';
const SELECT_ALL_FLIGHT_INSTANCES = 'SELECT * FROM flight_instance';

// routes are the endpoints, we will hit
const SELECT_ALL_STAFF = 'SELECT * FROM staff';
const SELECT_ALL_INTERNAL_STAFF = 'SELECT * FROM internal_staff';
const SELECT_ALL_EXTERNAL_STAFF = 'SELECT * FROM external_staff';
const SELECT_ALL_CLASSES = 'SELECT * FROM classes';
const SELECT_ALL_INSTRUCTORS = 'SELECT * FROM instructors';

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

    // fitness database endpoints
    app.get('/staff', (req, res) => {
        connection.query(SELECT_ALL_STAFF, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/internal-staff', (req, res) => {
        connection.query(SELECT_ALL_INTERNAL_STAFF, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/external-staff', (req, res) => {
        connection.query(SELECT_ALL_EXTERNAL_STAFF, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/classes', (req, res) => {
        connection.query(SELECT_ALL_CLASSES, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/instructors', (req, res) => {
        connection.query(SELECT_ALL_INSTRUCTORS, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    // insert/update actions
    // pay employees - UPDATE
    // add exercise classes/schedule - INSERT
    // assign instructor to teach class - UPDATE
    // register for a class - UPDATE/INSERT
};