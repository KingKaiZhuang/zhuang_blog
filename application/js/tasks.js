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

