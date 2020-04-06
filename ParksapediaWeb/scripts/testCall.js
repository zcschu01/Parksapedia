function GetParks() {
    $.ajax({
        type: "GET",
        url: 'https://localhost:44322/api/Parks',
        data: "",
        contentType: "application/json",
        // headers: {"Access-Control-Allow-Origin": "*"},
        crossDoman: true,
        dataType: "json",
        success: function (data) {
            var pList = $('ul.parklist');
            $.each(data, function (i) {
                var li = $('<li/>')
                    .addClass('park-name')
                    .text(data[i])
                    .appendTo(pList);
                // var aaa = $('<a/>')
                //     .addClass('ui-all')
                //     .text(countries[i])
                //     .appendTo(li);
            });
        },
        error: function (e) {
            alert("Didn't return anything!");
        }
    })
}