// class Book {
//     constructor(id, title, author, isBrowwed) {
//         this.id = id
//         this.title = title
//         this.author = author
//         this.isBrowwed = isBrowwed
//     }
// }
// class User {
//     constructor(id, name, booksList){
//         this.id = id
//         this.name = name
//         this.booksList = booksList
//     }
// }

// class Library{
//     constructor(usersList, booksList){
//         this.booksList = booksList
//         this.usersList = usersList
//     }
//     addBook(book){
//         this.booksList.push(book)
//     }
//     moveBook(userId, bookId){
//         for (let book of this.booksList){
//             if (book.id === bookId && !book.isBrowwed){
//                 let user = this.usersList.find(user => user.id === userId)
//                 user.booksList.push(book)
//                 book.isBrowwed = true
//                 break
//             }
//         }
//     }
//     getBook(userId, bookId){
//         for (let user of this.usersList){
//             if (userId === user.id){
//                 for (let book of user.booksList){
//                     if (book.id === bookId){
//                         book.isBrowwed = false
//                         user.booksList = user.booksList.filter(b => b.id != bookId)
//                         break
//                     }
//                 }
//                 break
//             }
//         }
//     }
//     showBooks(){
//         console.log(this.booksList)
//     }
//     showUsers(){
//         console.log(this.usersList)
//     }


// }
// const book1 = new Book(1, "o'tgan kunlar", "yozuvchi", false)
// const book2 = new Book(2, "Sariq devni minib", "yozuvchi", false)
// const book3 = new Book(3, "Pol", "yozuvchi", false)
// const book4 = new Book(4, "kitob", "yozuvchi", false)
// const user1 = new User(1, "user1", [])
// const user2 = new User(2, "user2", [])
// const user3 = new User(3, "user3", [])
// const library = new Library([user1, user2, user3], [book1, book2, book3])
// library.addBook(book4)
// // library.showBooks()
// library.moveBook(1, 1)
// // library.showBooks()
// // library.showUsers()
// library.getBook(1, 1)
// library.showBooks()
// library.showUsers()



// function withdrawMoney(amount){
//     return new Promise((res, rej) => {
//         // console.log("aaaa")
//         setTimeout(()=>{console.log("bank tekshiruvi")}, 1000)
//         balance < amount ? rej("Mablag' yetarli emas") : amount <= 0 ? rej("Noto'g'ri summa kiritildi") : res(`Yechib olindi: ${amount}, qolgan
// balans: ${balance}`)
//     })
// }

// let balance = 5000
// const prom1 = withdrawMoney(6000)
// const prom2 = withdrawMoney(-6000)

// prom1
//     .then((res)=> console.log(res))
//     .catch((rej)=> console.log(rej))

// prom2
//     .then((res)=> console.log(res))
//     .catch((rej)=> console.log(rej))



let user = new Set(["a", "b", "a", "b"])
class Admin {
    constructor(set1) {
        this.set1 = set1
        console.log(this.set1, "const")

    }
    get getset() {
        return this.set1 //2
    }
    get getmax() {
        return Admin.max //2
    }
    static max = 2
    get getInfo() {
        return Admin.check()
    }
    static check(set1) {
        try {
            console.log(set1, "set len")
            if (set1 <= Admin.max) {
                throw new Error("Null")
            } else {
                return 'togri'
            }
        } catch (err) {
            console.log('xato')
        }
    }
}
const result = new Admin(user.size, 2)
console.log(Admin.check(result.set1))
console.log(result.getset)
