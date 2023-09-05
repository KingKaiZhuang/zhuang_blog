// 5b0g0024@gmail.com
// Node.js是基於Chrome V8引擎的JavaScript運行環境
$(function(){
    $("#formSend").click(()=>{
        let email = $("#emailInput").val();
        let message = $("#emailMessage").val();
        console.log(email);

        $.ajax({
            url:"/mail/data",
            type:"POST",
            data: {
                email,
                message
            }
        })
        .then(data =>{
            console.log(data);
            createdTable(data["result"]);
            $("#emailInput").val("");
            $("#emailMessage").val("");
        })
        .catch(err =>{
            console.log(err);
        });
    });
});

let createdTable = (data)=> {
    data = data;
    let tableBody = data.map((ele,i)=>`
        <tr>
            <th scope="row">${i+1}</th>
            <td>${ele.email}</td>
            <td>${ele.message}</td>
        </tr>
    `).join("");

    $("#data tbody").html(tableBody);
}