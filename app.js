const app = require("./gmon");
const Router = require("./routes")

app.use("/api/v1/user", Router.userRouter)
app.use("/api/v1/test", Router.testRouter)

app.listen(8081, async () => {
        console.log("server start")
});

