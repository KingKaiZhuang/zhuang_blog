$(function(){
    $("#send").click(()=>{
        let userName = $("#username").val();
        let passWord = $("#password").val();
        console.log(userName);
        console.log(passWord);

        $.ajax({
            url : "/auth",
            type : "POST",
            data : {
                userName,
                passWord
            }
        })
        .then(res => {
            console.log(res); // 輸出伺服器回應以進行調試
            if (res.redirect) {
                console.log(res.redirect); // 輸出重定向 URL 以進行調試
                window.location.href = res.redirect;
            }
        })
        .catch(err => {
            console.log(err);
        });
        event.preventDefault();
    })
})