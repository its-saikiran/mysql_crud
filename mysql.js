// /// REQUIRE MYSQL [STEP-1]
const mysql = require('mysql')

// /// MYSQL DETAILS [STEP-2]
const MYSQL = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'#Ksaikiran25'
});

module.exports = {
    MYSQL
}

