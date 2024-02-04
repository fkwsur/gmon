const router = require("../gmon").router;
const { userController: controller } = require("../controller");

const userRouter = () => {
        router.get("/signup", controller.aaa);
        router.get("/signup2", controller.bbb);
        router.get("/signup3", controller.ccc);
}

module.exports  = userRouter;