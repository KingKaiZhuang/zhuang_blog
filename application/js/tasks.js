$(document).ready(function() {
    // 在網頁載入後觸發 Ajax 請求
    $.ajax({
        type: "GET",
        url: "/tasks/things", // 替換成您的數據 URL
    })
    .then(result => {
        console.log(result["data"]);
        createTable(result["data"]);
    })  
    .catch(err =>{
        console.log(err);
    });
});

$(function(){
    $("#addTask").click(()=>{
        let date = $("#date").val();
        let time = $("#time").val();
        let task = $("#task").val();
        let urgent = $("#urgent").val();
        $.ajax({
            url : "/tasks/addTask",
            type : "POST",
            data : {
                date,
                time,
                task,
                urgent
            }
        })
        .then(result =>{
            alert("新增成功!");
            console.log(result);
            date = {};
            time = {};
            task = {};
            urgent = {};          
        })
        .catch(err =>{
            console.log(err);
        });
        e.preventDefault();
    })
})

let createTable = (data) => {
    data = data || [];

    let tableBody = data.map((ele, i) => `
        <tr>
            <th>${ele.date}</th>
            <td>${ele.time}</td>
            <td>${ele.task}</td>
            <td>${ele.urgent}</td>
        </tr>
    `).join("");

    $("#todo-list").html(tableBody);
};

