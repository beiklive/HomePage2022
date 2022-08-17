
// 浏览器加载完成
window.onload = function () {

}



function ShowSettings() {
    console.log("ShowSettings");
    var settings = document.getElementById("MySettingBox");
    settings.style.visibility = "visible";
}


function SendKey() {
    var key = document.getElementById("KeyInput").value;
    console.log("SendKey:" + key);
    var settings = document.getElementById("MySettingBox");
    settings.style.visibility = "hidden";

    //jquery方式  get请求
    $.ajax({
        type: "GET",
        url: "http://api.beiklive.top/HomePage",
        // data:"username=王方",
        data: { "key": key },
        async: false,
        cache: true,
        dataType: "jsonp",
        jsonp: "jsoncallback",
        contentType: "application/json;utf-8",
        success: function (backdata, status, xmlHttpRequest) {
            console.log("success");
            console.log(backdata);
            console.log(status);
            console.log(xmlHttpRequest);
        },
        error: function (msg) {
            alert("错误内容" + msg)
        }
    });
}