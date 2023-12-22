let body = document.querySelector("body")

function Author(name,birthYear,nationality,){
    this.Name = name;
    this.BirthYear = birthYear;
    this.Nationality = nationality;
}

function Book(title,author,genre,price){
    this.Title = title;
    this.Author = author;
    this.Genre = genre;
    this.Price = price;
    
    this.getBookInfo = function(){
        console.log(`TITLE : ${this.Title}`);
        console.log(`AUTHOR : ${this.Author}`);
        console.log(`GENRE : ${this.Genre}`);
        console.log(`PRICE : ${this.Price}`);
        console.log("-----------------------")

    }
}

let author1 = new Author('Napoleon Hill and Rosa Lee Beeland', 1937, 'American')
let author2 = new Author('Mel Robbins', 2017, 'American')
let author3 = new Author('Jane Austen', 1775, 'British')

let book1 = new Book('Think and Grow Rich', author1.Name, 'personal development', 20.99)
let book2 = new Book('The 5 Second Rule', author2.Name, 'Motivational', 15.99)
let book3 = new Book('Pride and Prejudice', author3.Name, 'Romance', 12.99)

// console.log(author1)
// console.log(book1)

// book1.getBookInfo()
// book2.getBookInfo()
// book3.getBookInfo()

let bookStore = [book1,book2,book3]

let head1 = document.createElement("h1")
let head2 = document.createElement("h2")
let head3 = document.createElement("h3")
head1.innerText = "Online BookStore"
head2.innerText = "======================================================="

console.log("Online BookStore")
console.log("================")

bookStore.forEach((i)=>
{
    i.getBookInfo()
})

body.append(head1,head2)


