export class NavLink {
    private destination: String;
    private link: String;
  
    constructor(destination: String, link: String){
        this.destination = destination;
        this.link = link;
    }

    getDestination(): String {
        return this.destination
    }
    getLink(): String {
        return this.link;
    }
}
