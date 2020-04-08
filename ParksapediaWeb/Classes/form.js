class form {
    #region = null;
    #park_dog_friendly = false;
    #landscapes = [];
    #wildlife = [];
    #plants = [];
    #lodging = false;
    #campgrounds = false;


    constructor() {
        console.log("Made a new form");
    }

    set_region(r) {
        this.#region = r;
        console.log("Location changed to " + this.#region);
    }

    set_park_dog_friendly(pdf) {
        this.#park_dog_friendly = pdf;
        console.log("Friendly changed to " + this.#park_dog_friendly);
    }

    set_landscapes(ls) {
        this.#landscapes = ls;
        console.log("Landscapes changed to " + this.#landscapes);
    }

    set_wildlife(w) {
        this.#wildlife = w;
        console.log("Wildlife changed to " + this.#wildlife);
    }

    set_plants(p) {
        this.#plants = p;
        console.log("Plants changed to " + this.#plants);
    }

    set_lodging(l) {
        this.#lodging = l;
        console.log("Lodging changed to " + this.#lodging);
    }

    set_campgrounds(c) {
        this.#campgrounds = c;
        console.log("Campgrounds changed to " + this.#campgrounds);
    }

    save_form() {
        localStorage.region = this.#region;
        localStorage.park_dog_friendly = this.#park_dog_friendly;
        localStorage.landscapes = this.#landscapes;
        localStorage.wildlife = this.#wildlife;
        localStorage.plants = this.#plants;
        localStorage.lodging = this.#lodging;
        localStorage.campgrounds = this.#campgrounds;
    }

    load_form() {
        this.set_region(localStorage.region);
        this.set_park_dog_friendly(localStorage.park_dog_friendly);
        this.set_landscapes(localStorage.landscapes);
        this.set_wildlife(localStorage.wildlife);
        this.set_plants(localStorage.plants);
        this.set_lodging(localStorage.lodging);
        this.set_campgrounds(localStorage.campgrounds);
    }

}