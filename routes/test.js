const router = require("../gmon").router;
const { testController: controller } = require("../controller");

const testRouter = () => {
        router("/signup", controller.aaa);
        router("/signup2", controller.bbb);
        router("/signup3", controller.ccc);
}

module.exports  = testRouter;