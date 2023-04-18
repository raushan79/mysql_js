const mysql = require('mysql');
require('dotenv').config();
const fs = require('fs');

// env variable
const host = 'localhost'
const user = 'root'
const password = 'root'

const db = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database : 'FIR'
});

db.connect((error)=>{
    if(error){
        console.log('Error in database connection');
        return;
    }
    console.log('Database connection sucessfull');
});




// select all records from the table
const query = 'SELECT * FROM CG_list;';

db.query(query, (error, results, fields) => {
    if (error) throw error;
  
    const data = results.map(row => Object.values(row));
    data.unshift(fields.map(field => field.name));
  
    fs.writeFile('./An_list.csv', data.join('\n'), err => {
      if (err) throw err;
      console.log('Data saved to file successfully!');
    });
  

  // close the connection
  db.end();
});

