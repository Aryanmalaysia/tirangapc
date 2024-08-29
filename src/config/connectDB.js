const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '85.195.73.202',
    user: 'win1209_Win100user',
    password: '729288@Rishu$',
    database: 'win1209_win100',
});

export default connection;
