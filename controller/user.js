module.exports = {
  aaa: async (req, res) => {
    try {
      console.log(req.query)
      // return console.log("안녕 나야");
      return res.status(200).json({"result" : "true"});
    } catch (error) {
      console.log(error);
    }
  },
  bbb: async (req, res) => {
    try {
      return res.status(200).json(req.body);
    } catch (error) {
      console.log(error);
    }
  },
  ccc: async (req) => {
    try {
      return console.log("안녕 나야3");
    } catch (error) {
      console.log(error);
    }
  },
};
