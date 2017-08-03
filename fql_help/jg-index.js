const fs = require('fs');
const iconv = require('iconv-lite');
const exec = require('child_process').exec

fs.readFile('./data/文档结构.txt', (err, data) => {
    let jgDataArr = data.toString('UTF-8');

    JSON.parse(jgDataArr).forEach(v => {

        exec("curl https://fql.kf5.com/apiv2/forums.json -H \"Content-Type: application/json\" -d \'"+JSON.stringify(v)+"\' -v -u service@fuqian.la:Fqlnn0128 -X POST", (error, stdout, stderr) => {
            console.log(error);
        });
    });

});