var Store = {
    name:  "Ben's Online Comics Marketplace",
    website: 'Bencomicsonline.com',
    telephone: "123-456-7890",
    email: "benjamin.e.castillo1@gmail.com",

        addInventory: function(comic){
            this.comics.push(comic);
        }
}

var Cart = {
  name: "Your Cart",
  comicsCount: 0,
  dcComics: 0,
  marvelComics: 0,
  idwComics: 0,
  comics: [],

  addComics(comic){
    this.comics.push(comic);
  
  console.log("following comic has been added to your Cart" + comic.title);
  
  this.increseComicsCount(comic);
  },
  deleteComics(comic){
    this.comics.splice(comic);
  
  console.log("following comic has been deleted from your Cart" + comic.title);
  
  this.decreaseComicCount(comic);
}
}
increaseComicCount(comic);
  this.comicsCount +=1;
  if(comic.publishe=="DC"){
    this.dcComics +=1;
  }
  if(comic.publishe=="Marvel"){
    this.marvelComics +=1;
  }
  if(comic.publishe=="IDW"){
    this.idwComics +=1;
  }
  decreaseComicCount(comic);
  this.comicsCount -=1;
  if(comic.publishe=="DC"){
    this.dcComics -=1;
  }
  if(comic.publishe=="Marvel"){
    this.marvelComics -=1;
  }
  if(comic.publishe=="IDW"){
    this.idwComics -=1;
  }

  alert("You currently have" + this.comicsCount + "comics in your cart");
  console.log("You currently have" + this.comicsCount + "comics in your cart");
  
class Comic{
    constructor(title, publisher, issue, price){
        this.title = title;
        this.publisher = publisher;
        this.issue = issue;
        this.price=price;

}
}
