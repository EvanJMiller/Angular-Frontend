export class Article {

    private title: String;
    private subtitle: String;
    private date: Date;
    private body: String;

    constructor(title: String, subtitle:String, date: Date, body: String){
        this.title = title;
        this.subtitle = subtitle;
        this.date = date;
        this.body = body;
    }

}
