const router = require("../gmon").router;
const { userController: controller } = require("../controller");

const userRouter = () => {
        router("/signup", controller.aaa);
        router("/signup2", controller.bbb);
        router("/signup3", controller.ccc);
}

module.exports  = userRouter;