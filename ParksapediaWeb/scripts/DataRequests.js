class DataRequests {

    #GET_PARKS = 'api/GetParks';
    #SEND_FORM = 'api/SendForm';
    #localUrl = 'https://localhost:44322/';
    
    GetParks() {
        $.ajax({
            type: "GET",
            url: this.#localUrl + this.#GET_PARKS,
            contentType: "application/json",
            crossDoman: true,
            dataType: "json",
            success: function (data) {
                var pList = $('div.form');
                $.each(data, function (i) {
                    var ul = $('<ul/>')
                        .addClass('parks')
                        .appendTo(pList);
                    var li = $('<li/>')
                        .addClass('park-name')
                        .text(data[i])
                        .appendTo(ul);
                });
            },
            error: function (e) {
                alert("Didn't return anything!");
            }
        })
    }

    SendForm() {
        //Creates a form object and gets user's requests from local storage on the browser
        var form = {
            region: localStorage.region,
            park_dog_friendly: localStorage.park_dog_friendly,
            landscapes: localStorage.landscapes.split(','),
            wildlife: localStorage.wildlife.split(','),
            plants: localStorage.plants.split(','),
            lodging: localStorage.lodging,
            campgrounds: localStorage.campgrounds
        };

        //Sends a POST request to the API and returns true or false
        $.ajax({
            type: "POST",
            data: JSON.stringify(form),
            url: this.#localUrl + this.#SEND_FORM,
            contentType: "application/json",
            success: function (data) {
                alert("Returned " + data);
            },
            error: function (e) {
                alert("Error: " + e.message);
            }
        });
    }
}