class form {
    #location = null;
    #park_dog_friendly = false;
    #landscapes = [];
    constructor(){
        console.log("Made a new form");
    }

    set_location(loc) {
        this.#location = loc;
        console.log("Location changed to " + this.#location);
    }

    set_park_dog_friendly(pdf) {
        this.#park_dog_friendly = pdf;
        console.log("Friendly changed to " + this.#park_dog_friendly);
    }

    set_landscapes(ls) {
        this.#landscapes = ls;
        console.log("Landscapes changed to " + this.#landscapes);
    }
}