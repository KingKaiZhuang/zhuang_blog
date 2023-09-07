$(function(){
    $("#submit").click(()=>{
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();
        $.ajax({
            url : "/contact",
            type : "POST",
            data : {
                name,
                email,
                message
            }
        })
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
        event.preventDefault();
    })
})