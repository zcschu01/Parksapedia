function GetParks() {     
    $.ajax({
    type: "GET",
    url: 'https://localhost:44322/api/Parks',
    data: "",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (msg) {
        $("#divResult").html("success");
    },
    error: function (e) {
        $("#divResult").html("Something Wrong.");
    }
});
}