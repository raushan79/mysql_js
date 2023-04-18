const { exec } = require('child_process');

const username = 'root';
const password = 'root';
const database = 'FIR';
const table = 'AN_list';
const outputFile = './AN_LIST.sql';

const command = `mysqldump -u ${username} -p${password} ${database} ${table} > ${outputFile}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`Data saved to file ${outputFile} successfully!`);
  }
});
