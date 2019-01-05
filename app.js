var Store = {
    name:  "Ben's Online Comics Marketplace",
    website: 'Bencomicsonline.com',
    telephone: "123-456-7890",
    email: "benjamin.e.castillo1@gmail.com",
    comicsCount: 0,
    dcComics: 0,
    indieComics: 0,
    titanComics: 0,
    marvelComics: 0,
    idwComics: 0,
    comics: [],

        addInventory: function(comic){
            this.comics.push(comic);
        }
}
class Comic{
    constructor(title, publisher, issue, price){
        this.title = title;
        this.publisher = publisher;
        this.issue = issue;
        this.price=price;

}
}
class Cart {
    constructor() {
      this.comics = [];
    }
    addComics(amount, comic) {
      this.comics.push(...Array(amount).fill(comic));
    }
    removeComics(amount, comic){
        this.comics.splice(...Array(amount).fill(this.comics));
    }
    calcTotal() {
      return this.products
        .map(comic => comic.price)
        .reduce((a, b) => a + b, 0);
    }
    printShoppingInfo() {
      alert('one has to pay in total: ' + this.calcTotal());
    }
  }