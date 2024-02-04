const router = require("../gmon").router;
const { testController: controller } = require("../controller");

const testRouter = () => {
        router.get("/signup", controller.aaa);
        router.get("/signup2", controller.bbb);
        router.get("/signup3", controller.ccc);
}

module.exports  = testRouter;