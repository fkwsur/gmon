const { checkPrimeSync } = require("crypto");
const http = require("http");
const { url } = require("inspector");
const server = http.createServer();

let set_use = [];
let set_router = [];

let req = {};
let req_url = {};
let onStart = false;

server.on("request", async (data) => {
  onStart = true;
  try {
    req = data;

    let data_router = set_router[data.url];
    if (data_router != undefined) {
      return data_router();
    }

    for (const rows of set_use) {
      if (data.url.startsWith(rows.url)) {
        req_url = rows.url;
        let routes = rows.func;
        return routes();
      }
    }
    return "주소 안맞음";
  } catch (error) {
    console.log(error);
  }
});

const use = async (url, func) => {
  set_use.push({ url: url, func: func });
};

const router = async (router, func) => {
  try {
    if (onStart == false) {
      return set_router[router] = func;
    } else if (req.url == req_url + router) {
        return func(req);
    }else return;
  } catch (error) {
    console.log(error);
  }
};

const listen = async (port, func) => {
  try {
    return server.listen(port, func);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { use, router, listen };
