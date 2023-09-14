const express = require("express");
const app = express();
const portNum = 8088;

const hbs = require("hbs");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

const validator = require("./utils/validator")
const successfulRouter = require("./router/successful_people");
const aboutRouter = require("./router/about");
const authRouter = require("./router/auth");
const expertiseRouter = require("./router/expertise");
const mailRouter = require("./router/mail_backend");
const contactRouter = require("./router/contact");
const tasksRouter = require("./router/tasks");


app.engine("html", hbs.__express);
app.set("views", path.join(__dirname, "application", "views"));
app.use(express.static(path.join(__dirname, "application")));

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    limit: "1000",
    extended: true
}));

// use redis
const redis = require("redis");
const redisClient = redis.createClient();
const redisStore = require("connect-redis")(session);

// set session
app.use(session({
    store: new redisStore({ client: redisClient }),
    secret: 'c90dis90#', // 密鑰，用於加密 Session
    resave: true,             // 是否在每次請求時重新保存 Session
    saveUninitialized: false,   // 是否在沒有初始 Session 時保存 Session
    name: "_ntust_tutorial_id",
    ttl: 24 * 60 * 60 * 1 // session 資料有效時間
}));

app.get("/",
    validator.isUserLogin,
    (req, res) => {
        res.render("index.html");
    }
);

app.get("/login", (req, res) => {
    res.render("login.html");
});

app.use("/auth", authRouter);

app.use("/company", successfulRouter);
app.use("/about", validator.isUserLogin, aboutRouter);
app.use("/expertise", validator.isUserLogin, expertiseRouter);
app.use("/mail", validator.isUserLogin, mailRouter);
app.use("/contact", validator.isUserLogin, contactRouter);
app.use("/tasks", validator.isUserLogin, tasksRouter);

app.listen(portNum, (req, res) => {
    console.log(`Server is running at ${portNum} !`);
});