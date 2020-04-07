function validate() {
    let f = new form();
    // var locationValues = $('input[type=checkbox]:checked').map(function(_, el) {
    //     return $(el).val();
    // }).get();
    var locationValue = $("input[name='region-r']:checked").val();
    var dogValue = $("input[name='park-dog-friendly-r']:checked").val();
    var landscapeValues = $("input[name='landscape-c']:checked").map(function(_, el) {
        return $(el).val();
    }).get();
    console.log(locationValue + " was clicked");
    console.log(dogValue + " was clicked");
    console.log(landscapeValues + " was clicked");
    
    f.set_location(locationValue);
    f.set_landscapes(landscapeValues);

    if(dogValue == "yes"){
        f.set_park_dog_friendly(true);
    }
    else{
        f.set_park_dog_friendly(false);
    }
}