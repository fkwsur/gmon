const router = require("../gmon").router;
const { userController: controller } = require("../controller");

const userRouter = () => {
        router.get("/signin", controller.aaa);
        router.post("/signup", controller.bbb);
        router.get("/signup3", controller.ccc);
}

module.exports  = userRouter;