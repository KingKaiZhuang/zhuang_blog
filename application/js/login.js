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
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
        event.preventDefault();
    })
})