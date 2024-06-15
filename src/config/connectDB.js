const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '142.171.153.18',
    user: 'a7669371_biglottery',
    password: '729288@Rishu$',
    database: 'a7669371_biglottery',
});

export default connection;
