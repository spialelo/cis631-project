// const mysql = require('mysql');

// routes are the endpoints, we will hit

//const SELECT_ALL_EMPLOYEES = 'SELECT * FROM employee';
const SELECT_ALL_EMPLOYEES = 'SELECT * FROM instructor AS I JOIN employee AS E ON I.Instr_id = E.Empid';
const SELECT_ALL_CONTRACTORS = 'SELECT * FROM instructor AS I JOIN contractor AS C ON I.Instr_id = C.Cid';
const SELECT_ALL_EXERCISES = 'SELECT * FROM exercise';
const SELECT_ALL_CLASSES = 'SELECT * FROM exercise_class AS E JOIN room AS R ON E.Room = R.Rnum';
const SELECT_ALL_INSTRUCTORS = 'SELECT * FROM instructor';
const SELECT_ALL_MEMBERS = 'SELECT * FROM member';
const SELECT_ALL_ROOMS = 'SELECT * FROM room';
const REGISTER_CLASS = 'SELECT * FROM classregister';
const MEMBERSHIPS = 'SELECT * FROM membership';
const REGISTERED = 'SELECT M.Mid, M.M_name, R.Registration_date FROM member AS M JOIN registered AS R ON M.Mid = R.Mid';
const TEACHES = 'SELECT * FROM instructor AS I JOIN teaches AS T ON I.Instr_id = T.Instr_id';

module.exports = (app, connection) => {
    app.get('/', (req, res) => {
        res.send('Hopefully this is home ?');
    });

    //http://localhost:9000/flights/add?flno=8523&origin=newark&destination=san%20diego
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
                return res.json({
                    data: results
                });
            }
        });
    });

    // fitness database endpoints
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

    app.get('/contractors', (req, res) => {
        connection.query(SELECT_ALL_CONTRACTORS, (err, results) => {
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

    app.get('/add-class', (req, res) => {
        const { mid, class_id } = req.query;
        const REG_MEM_CLASS_QUERY = `INSERT INTO classregister (Mid, Class_id) VALUES('${mid}', '${class_id}')`;
        // quotes around the bloody strings!!!
        connection.query(REG_MEM_CLASS_QUERY, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/rooms', (req, res) => {
        connection.query(SELECT_ALL_ROOMS, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/exercises', (req, res) => {
        connection.query(SELECT_ALL_EXERCISES, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });


    app.get('/members', (req, res) => {
        connection.query(SELECT_ALL_MEMBERS, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/memberships', (req, res) => {
        connection.query(MEMBERSHIPS, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    //http://localhost:9000/register/class?mid=NJ001&class_id=g3
    app.get('/register-for-class', (req, res) => {
        const { mid, class_id } = req.query;
        const REG_MEM_CLASS_QUERY = `INSERT INTO classregister (Mid, Class_id) VALUES('${mid}', '${class_id}')`;
        // quotes around the bloody strings!!!
        connection.query(REG_MEM_CLASS_QUERY, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/registerclass', (req, res) => {
        connection.query(REGISTER_CLASS, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/registered', (req, res) => {
        connection.query(REGISTERED, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });


    //http://localhost:9000/teaches/class?instr_id=C30&class_id=z2&start=08:00:00&dur=01:00:00&date=2019-08-07
    app.get('/assign-to-class', (req, res) => {
        const { instr_id, class_id, start, dur, date } = req.query;
        const REG_MEM_CLASS_QUERY = `INSERT INTO teaches (Instr_id, Class_id, Start_time, Duration, Date) VALUES('${instr_id}', '${class_id}', '${start}', '${dur}', '${date}')`;
        // quotes around the bloody strings!!!
        connection.query(REG_MEM_CLASS_QUERY, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        });
    });

    app.get('/teaches', (req, res) => {
        connection.query(TEACHES, (err, results) => {
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
    // pay employees - UPDATE (???)
    // add exercise classes/schedule - INSERT
    // assign instructor to teach class - done
    // register for a class - done
};