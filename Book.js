
class Book {
  constructor(
    name,
    author,
    publishDate,
    category,
    sales
  ){
    this.name = name,
    this.author = author,
    this.publishDate = publishDate,
    this.category = category,
    this.sales = sales
  }
  calculateBookAge(x){
    let bookAge = new Date(this.publishDate);
    let now = new Date();
    //x = bookAge - now;
    let difference = Math.abs(bookAge-now);
    let compareDates = difference/(1000 * 3600 * 24);
    return Math.floor(compareDates);
  }
}

const book_1 = new Book("blueWhale","M7MD","2021/9/20","Fantasy","5000");

console.log("Days Passed since publish: " , book_1.calculateBookAge());