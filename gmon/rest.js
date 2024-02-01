// const http = require("http");
// const server = http.createServer();

module.exports = {
        get: async () => {
          try {
            let req;
            let res;
            server.on("request", (req) => {
              if (req.method == "GET") {
                // console.log(req.url);
                req.on('data', (data) => { // 청크들을 모아
                  req = data;
                })
              } else throw "http method error"
            });
            server.on("response", (res) => {
              res.writeHead(201, { 'Content-Type': 'text/html; charset=utf-8' });
              res = res.end('등록 성공');
            });
            return req,res
          } catch (error) {
            console.log(error);
          }
        },
        post: async () => {
          try {
          } catch (error) {
            console.log(error);
          }
        }
}