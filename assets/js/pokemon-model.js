
class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
    weight;
    height;
    abilities = [];
    stats = [];
}

class Stats {
    title;
    level;

    constructor(level, title) {
        this.title = title;
        this.level = level;
    }
}
