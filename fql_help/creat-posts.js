const fs = require('fs');
const iconv = require('iconv-lite');
const exec = require('child_process').exec;
const util = require('util');
const type = require('./type.js');
const forumsLists = fs.readdirSync('./data/文档内容/').filter(v => v != '.DS_Store');

fs.readFile('./data/all-list.json', 'utf8', (err,data) => {
    const listObj = JSON.parse(data).forums;

    listObj.forEach((v,i) => {
        
        forumsLists.forEach((vi, ia) => {
           
            if(v.title + '.txt' === vi){

                fs.readFile('./data/文档内容/' + vi, 'utf8', (err,data) =>{
                    let postsArr = data ? JSON.parse(data) : [];
                     
                    postsArr.forEach(vii => {
                        if(vii){
                           vii.post.forum_id = v.id;
                           // vii.post.forum_id = v.category_id;

                           console.log(vii);
                           exec("curl https://fql.kf5.com/apiv2/posts.json -H \"Content-Type: application/json\" -d \'"+ JSON.stringify(vii) +"\' -v -u service@fuqian.la:Fqlnn0128 -X POST", (error, stdout, stderr) => {
                               console.log(stdout);
                           }); 
                        }
                    });
                });
            }
        }); 
        
    });
    
});