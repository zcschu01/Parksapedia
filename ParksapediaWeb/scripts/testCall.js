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

function SendForm() {
    var form = { 
        region: localStorage.region,
        park_dog_friendly: localStorage.park_dog_friendly,
        landscapes: localStorage.landscapes.split(','),
        wildlife: localStorage.wildlife.split(','),
        plants: localStorage.plants.split(','),
        lodging: localStorage.lodging,
        campgrounds: localStorage.campgrounds
    };
    $.ajax({
        type: "POST",
        data :JSON.stringify(form),
        url: "https://localhost:44322/api/GetParks",
        contentType: "application/json",
        success: function(data) {
            alert("Returned " + data);
        },
        error: function (e) {
            alert("Error: " + e.message);
        }
    });
}