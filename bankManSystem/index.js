let body = document.querySelector("body")

function BankAccount(accountNumber,name,type,balance){
    this.AccountNumber = accountNumber;
    this.Name = name;
    this.AccountType = type;
    this.Balance = balance||0;
    
   this.deposit = function(amount){
    this.Balance += amount;
    console.log(`${this.Name} your Account is Credited by ₹${amount}, your Account Balance is ₹${this.Balance}`)
   }

   this.widthraw = function(amount){
    if(this.Balance >= amount){
        this.Balance -= amount
        console.log(`${this.Name} your Account is Debitted by ₹${amount}, your Account Balance is ₹${this.Balance}`)
    }
    else{
        alert("Insufficient fund")
        console.log("Insufficient Balance")
    }
   }

   this.checkBalance = function(){
    console.log(`${this.Name} your Acoount balance is ₹${this.Balance}`)
   }
   
   this.isActive = function(){
    if(this.Balance > 0){
        this.Status = "Active"
        console.log(`${this.Name} your Account Status is ${this.Status}`)
    }
    else{
        this.Status = "InActive"
        console.log(`${this.Name} your Account Status is ${this.Status}`)
    }
   }
}

let user1 = new BankAccount(32222,"Vaibhav","Saving",50000)
let user2 = new BankAccount(988772,"Aishu","Saving",50000)
let user3 = new BankAccount(133555,"Shubham","Saving",)

let accountHolders = [user1,user2,user3]

function getTotalBalance(){
    for(let i = 0; i < accountHolders.length; i++){
        let total = document.createElement("h2")
        if(accountHolders[i].Status === "Active"){
            console.log(`${accountHolders[i].Name} your Toal Account Balance is : ₹${accountHolders[i].Balance}`)
            total.innerText = (`${accountHolders[i].Name} your Toal Account Balance is : ₹${accountHolders[i].Balance}`)
        }
        else{
            console.log(`${accountHolders[i].Name} your Bank Account is ${accountHolders[i].Status}`)
            total.innerText = (`${accountHolders[i].Name} your Bank Account is ${accountHolders[i].Status}`)
        }
        body.append(total)
    }
}

console.log(user1)
console.log(user2)
console.log(user3)

user1.deposit(1000)
user1.widthraw(2000)
user1.checkBalance()
user1.isActive()


user2.deposit(5000)
user2.widthraw(10000)
user2.checkBalance()
user2.isActive()

user3.isActive()



getTotalBalance()
