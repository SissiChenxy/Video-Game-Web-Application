export class Wishlist {
    id: String;
    title: String;
    price: String;
    platform: String;
    score: String;
    genre: String;
    releaseYear: String;
    releaseMonth: String;
    releaseDay: String;

    constructor(id: String,
                title: String,
                platform: String,
                score: String, 
                genre: String, 
                releaseYear: String, 
                releaseMonth: String,
                releaseDay: String,
                price: String) {
        this.id = id;
        this.title = title;
        this.platform = platform;
        this.score = score;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.releaseMonth = releaseMonth;
        this.releaseDay = releaseDay;
        this.price = price;
    }

}