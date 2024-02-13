module.exports = {
        aaa: async (req, res) => {
          try {
            return res.status(200).send(req.query);
          } catch (error) {
            console.log(error);
          }
        },
        bbb: async (req, res) => {
          try {
            console.log(req.body)
            return res.status(200).send({"ㅎㅎ" : "성공!"});
          } catch (error) {
            console.log(error);
          }
        },
        ccc: async (req) => {
          try {
            return console.log("안녕 테스트야3");
          } catch (error) {
            console.log(error);
          }
        },
      };
      