module.exports = {
  aaa: async (req) => {
    try {
      console.log(req.query.hi)
      return console.log("안녕 나야");
    } catch (error) {
      console.log(error);
    }
  },
  bbb: async (req) => {
    try {
      console.log(req.body);
      return console.log("안녕 나야2");
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
