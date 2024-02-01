const http = require("http");
const server = http.createServer();

let set_use = [];
let req = {};
let req_url = {};

server.on("request", async (data) => { 
  for(const rows of set_use){
    if(data.url.startsWith(rows.params1)){
      req = data;
      req_url = rows.params1;
      let routes = rows.params2;
      return routes();
    }
  }
  return "주소 안맞음"
});

const use = async (params1, params2) => {
  set_use.push({params1: params1, params2 : params2})
}

const  router = async (router, func) => {
    try {
      if(req.url == req_url+router){
        return func(req);
      }
    } catch (error) {
      console.log(error);
    }
}

const  listen = async (port, func) => {
    try {
      return server.listen(port, func);
    } catch (error) {
      console.log(error);
    }
}

module.exports = {use,router,listen};