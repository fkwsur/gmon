module.exports = {
        aaa: async (req) => {
          try {
            // console.log(req);
            return console.log("안녕 테스트야");
          } catch (error) {
            console.log(error);
          }
        },
        bbb: async (req) => {
          try {
            return console.log("안녕 테스트야2");
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
      