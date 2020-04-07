class form {
    #location = "";
    #park_dog_friendly = false;
    constructor(){}

    set_location(loc) {
        console.log("Location was " + this.#location);
        this.#location = loc;
        console.log("Location changed to " + this.#location);
    }

    set_park_dog_friendly(pdf) {
        console.log("Location was " + this.#park_dog_friendly);
        this.#park_dog_friendly = pdf;
        console.log("Location changed to " + this.#park_dog_friendly);
    }
}