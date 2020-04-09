function validate() {
    let f = new Form();
    let data = new DataRequests();

    var regionValue = $("input[name='region-r']:checked").val();
    var dogValue = $("input[name='park-dog-friendly-r']:checked").val();
    var landscapeValues = $("input[name='landscape-c']:checked").map(function (_, el) {
        return $(el).val();
    }).get();
    var wildlifeValues = $("input[name='wildlife-c']:checked").map(function (_, el) {
        return $(el).val();
    }).get();
    var plantValues = $("input[name='plant-c']:checked").map(function (_, el) {
        return $(el).val();
    }).get();
    var lodgingValue = $("input[name='lodging-r']:checked").val();
    var campValue = $("input[name='camp-r']:checked").val();

    f.set_region(regionValue);
    if (dogValue == "Yes") {
        f.set_park_dog_friendly(true);
    }
    else {
        f.set_park_dog_friendly(false);
    }
    f.set_landscapes(landscapeValues);
    f.set_wildlife(wildlifeValues);
    f.set_plants(plantValues);
    if (lodgingValue == "Yes") {
        f.set_lodging(true);
    }
    else {
        f.set_lodging(false);
    }
    if (campValue == "Yes") {
        f.set_campgrounds(true);
    }
    else {
        f.set_campgrounds(false);
    }

    f.save_form();
    data.SendForm();
}