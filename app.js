const app = require("./gmon");
const Router = require("./routes")

const aaa = (req) => {
        console.log(req.url + "찡니aa")
}
const bbb = (req) => {
        console.log(req.url + "찡니bb")
}
const ccc = (req) => {
        console.log(req.query.z + "찡니cc")
}


app.use("/api/v1/user", Router.userRouter)
app.use("/api/v1/test", Router.testRouter)
app.router.get("/api/v1/test", aaa)
app.router.post("/api/v1/test2", bbb)
app.get("/api/v1/test3", ccc)

app.listen(8081, async () => {
        console.log("server start")
});

