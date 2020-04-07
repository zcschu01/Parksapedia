function validate() {
    let f = new form();
    var locationValue = $("input[name='location-r']:checked").val();
    var dogValue = $("input[name='park-dog-friendly-r']:checked").val();
    console.log(locationValue + " was clicked");
    console.log(dogValue + " was clicked");
    
    //not working
    f.set_location = locationValue;

    //not working
    if(dogValue == "Yes"){
        f.set_park_dog_friendly = true;
    }
    else{
        f.set_park_dog_friendly = false;
    }
}