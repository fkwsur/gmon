const http = require("http");
const server = http.createServer();
const querystring = require("querystring");

let set_use = [];
let set_router = [];

let req = {};
let req_url = {};
let onStart = false;

server.on("request", async (data) => {
  onStart = true;
  try {
    req = data;
    req.url = querystring.unescape(req.url);
    let data_url = req.url.split("?");

    // body 변환
    const chunks = [];
    if (data.method == "POST") {
      data.on("data", (chunk) => {
        chunks.push(chunk);
      });
      data.on("end", () => {
        //청크 변환
        const chunks_data = Buffer.concat(chunks);
        let body = JSON.parse(querystring.unescape(chunks_data.toString()));
        req.body = body;

        for (const route_rows of set_router) {
          if (route_rows.url == req.url && route_rows.method == data.method) {
            return route_rows.func(req);
          }
        }
        for (const use_rows of set_use) {
          if (req.url.startsWith(use_rows.url)) {
            req_url = use_rows.url;
            let routes = use_rows.func;
            return routes();
          }
        }
      });
    }
    if (data.method == "GET") {
      // 메인 로직
      for (const route_rows of set_router) {
        if (route_rows.url == data_url[0] && route_rows.method == data.method) {
          if (data_url[1] != undefined) {
            let query = {};
            let obj = data_url[1].split("&");
            for (const rows of obj) {
              let data = rows.split("=");
              query[data[0]] = data[1];
            }
            data.query = query;
          }
          return route_rows.func(req);
        }
      }
      for (const use_rows of set_use) {
        if (req.url.startsWith(use_rows.url)) {
          req_url = use_rows.url;
          let routes = use_rows.func;
          return routes();
        }
      }
    }
    return "주소 안맞음";
  } catch (error) {
    console.log(error);
  }
});

const listen = async (port, func) => {
  try {
    return server.listen(port, func);
  } catch (error) {
    console.log(error);
  }
};

const use = async (params1, params2) => {
  if (typeof params1 == "function") {
    console.log(params1());
    // params1();
  }
  set_use.push({ url: params1, func: params2 });
};
let router = [];

const warp_routes = (router, func, method) => {
  try {
    if (onStart == false) {
      return set_router.push({ url: router, func: func, method: method });
    }
    let data_url = req.url.split("?");
    if (data_url[0] == req_url + router) {
      if (req.method != method) return;
      if (req.method == "GET" && data_url[1] != undefined) {
        let query = {};
        let obj = data_url[1].split("&");
        for (const rows of obj) {
          let data = rows.split("=");
          query[data[0]] = data[1];
        }
        req.query = query;
      }
      return func(req);
    } else return;
  } catch (error) {
    console.log(error);
  }
};

const get = async (router, func) => {
  try {
    return warp_routes(router, func, "GET");
  } catch (error) {
    console.log(error);
  }
};
const post = async (router, func) => {
  try {
    return warp_routes(router, func, "POST");
  } catch (error) {
    console.log(error);
  }
};
const put = async (router, func) => {
  try {
    return warp_routes(router, func, "PUT");
  } catch (error) {
    console.log(error);
  }
};
const drop = async (router, func) => {
  try {
    return warp_routes(router, func, "DELETE");
  } catch (error) {
    console.log(error);
  }
};
const patch = async (router, func) => {
  try {
    return warp_routes(router, func, "DELETE");
  } catch (error) {
    console.log(error);
  }
};
const head = async (router, func) => {
  try {
    return warp_routes(router, func, "HEAD");
  } catch (error) {
    console.log(error);
  }
};
const options = async (router, func) => {
  try {
    return warp_routes(router, func, "OPTIONS");
  } catch (error) {
    console.log(error);
  }
};

router.get = get;
router.post = post;
router.put = put;
router.drop = drop;
router.patch = patch;
router.head = head;
router.options = options;

module.exports = {
  use,
  router,
  listen,
  get,
  post,
  put,
  drop,
  patch,
  head,
  options,
};
