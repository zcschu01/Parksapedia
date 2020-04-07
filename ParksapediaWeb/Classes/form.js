class form {
    #region = null;
    #park_dog_friendly = false;
    #landscapes = [];
    #wildlife = [];
    #plants = [];
    constructor(){
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
}