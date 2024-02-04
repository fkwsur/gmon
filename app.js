const app = require("./gmon");
const Router = require("./routes")

const aaa = (req) => {
        console.log(req.url + "찡니aa")
}
const bbb = (req) => {
        console.log(req.url + "찡니bb")
}

app.use("/api/v1/user", Router.userRouter)
app.use("/api/v1/test", Router.testRouter)
app.router("/api/v1/test", aaa)
app.router("/api/v1/test2", bbb)

app.listen(8081, async () => {
        console.log("server start")
});

