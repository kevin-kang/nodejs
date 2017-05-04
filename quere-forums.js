const fs = require('fs');
const iconv = require('iconv-lite');
const exec = require('child_process').exec

exec('curl https://fql.kf5.com/apiv2/forums.json -v -u service@fuqian.la:Fqlnn0128',(error, stdout, stderr) =>{
    fs.writeFile('./data/all-list.json', stdout, 'utf8', args =>{
        console.log('创建文件成功！');
    })
});