const Koa = require('koa');
const fs = require('fs');
const Router = require('koa-router');
const http = require('http');
const app = new Koa();

let index = new Router();

var iindex = 0;

let ob = {};

index.post('/post', async ctx => {
    console.log(ctx.req.headers,ctx.req.body)
    ctx.body = 'aaa';
});



const fileArr = fs.readdirSync('./data/文档内容/').filter(v => v != '.DS_Store');

// fileArr.forEach(v => {
//     let postArr = JSON.parse(fs.readFileSync('./data/文档内容/交易失败.txt').toString());

//     postArr.forEach(iv => {
       
//     });

// });
// 
var adata = [
    {
        "post": {
            "content": "<p class=\"MsoNormal\" style=\"text-align:left;\" align=\"left\">\n\t<b><span style=\"font-family:宋体;color:black;\">如：创建订单，无法创建成功，不知道问题在哪。</span><span style=\"color:black;\"></span></b> \n</p>\n<span style=\"font-family:宋体;color:black;\">答：请查看必填项是否已填写，且其他创建项是否符合规则。</span>",
            "title": "订单部分操作无法成功，同时找不到解决办法时，怎么办？"
        }
    },
    {
        "post": {
            "content": "<p class=\"MsoNormal\">\n\t<span style=\"font-family:宋体;\">情况一：创建订单时，请确保账号输入正确，不能有空格。</span><span></span> \n</p>\n<span style=\"font-family:宋体;\">情况二：如果已提交审核，必须在订单处于处理中，审核状态为已拒绝时有修改操作，可进行修改。</span>",
            "title": "新建业务单时，收款账号输入有误，怎么办？"
        }
    },
    {
        "post": {
            "content": "<span style=\"font-family:宋体;\">交易前，首先要确保银行账户余额充足，可在首页“账户管理”</span><span>-</span><span style=\"font-family:宋体;\">“银行账户查询”中查看明细，需在余额充足情况下再进行交易。</span>",
            "title": "银行账户余额不足，导致交易失败，怎么办？"
        }
    },
    {
        "post": {
            "content": "<span style=\"font-family:宋体;\">请在创建订单时，确保收款账号与收款账户名匹配，否则交易失败。同时加强人员审核力度，确保资金交易安全。</span>",
            "title": "收款账号与收款账户名不匹配，怎么办？"
        }
    },
    {
        "post": {
            "content": "<span style=\"font-family:宋体;\">划拨规则是在系统后台建立，请加强人员审核力度，如有问题，请联系配置员修改系统后台配置，门户中只能查看详情。</span>",
            "title": "资金划拨规则配置有问题，导致划拨有问题，怎么办？"
        }
    },
    {
        "post": {
            "content": "<span style=\"font-family:宋体;\">付款账号是在系统后台配置，请加强人员审核力度，如有问题，请联系配置员修改系统后台信息。</span>",
            "title": "付款账号有误导致交易失败，怎么办？"
        }
    },
    {
        "post": {
            "content": "<span style=\"font-family:宋体;\">是的。请加强人员审核力度，及时更改，确保资金交易安全。</span>",
            "title": "收款开户网点有误，是否交易失败？"
        }
    },
    {
        "post": {
            "content": "<span style=\"font-family:宋体;\">结算中心配置问题，请联系配置员在系统后台更改。加强人员审核力度，及时更改，确保资金交易安全。</span>",
            "title": "新建划拨单时，结算中心配置错误，怎么办？"
        }
    }
];
var postData = JSON.stringify(adata);

var options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/post',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

var req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  // res.setHeader('Content-Type', 'text/html');
  res.on('data', (chunk) => {
    console.log(`主体: ${chunk}`);
  });
  res.on('end', () => {
    console.log('响应中已无数据。');
  });
});

req.on('error', (e) => {
  console.log(`请求遇到问题: ${e.message}`);
});

console.log(postData);

// 写入数据到请求主体
req.write(postData);
req.end();



app.use(index.routes()).use(index.allowedMethods());

app.listen(3000);