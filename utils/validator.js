let isTokenExist = (req, res, next) => {
    if (!(req.headers["x-zhuang-token"])) {
        console.log(req.headers);
        res.status(400).json({ message: "No token!" });
    } else {
        next();
    }
};

let isTokenValid = (req, res, next) => {
    if (req.headers["x-zhuang-token"] !== "APTX4869") {
        res.status(403).json({ message: "Token err!" });
    } else {
        next();
    }
};

let isAccountAndpsd = (req, res, next) => {
    if (!req.body.userName || !req.body.passWord) {
        res.status(400).json({ message: "缺少帳號或密碼 !" });
    } else {
        next();
    }
};

let isAccountAndpsdExit = (req, res, next) => {
    if (!(req.body.userName === "zhuang" && req.body.passWord === "950401")) {
        res.status(400).json({ message: "帳號或密碼錯誤 !" });
    } else {
        next();
    }
};

let Setsession = (req, res, next) => {
    req.session.userInfo = {
        name: "zhuang",
        isLogined: true
    };
    next();
};

let isUserLogin = (req, res, next) => {
    console.log(req.session);
    if (!req.session.userInfo || req.session.userInfo.isLogined === false) {
        res.redirect("/login");
    };
    next();
};

module.exports = {
    "isTokenExist": isTokenExist,
    "isTokenValid": isTokenValid,
    "isAccountAndpsd": isAccountAndpsd,
    "isAccountAndpsdExit": isAccountAndpsdExit,
    "Setsession": Setsession,
    "isUserLogin" : isUserLogin
}