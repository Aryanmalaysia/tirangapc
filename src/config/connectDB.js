const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '142.171.153.18',
    user: 'a7669371_p4radoxe',
    password: '729288@Rishu$',
    database: 'a7669371_paisaclub',
});

export default connection;
