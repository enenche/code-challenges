class BankAccount{
	constructor(accName,accNum,balance=0){//balance is initialized to 0 for newly created accounts
		this.name=accName;
		this.number=accNum;
		this.balance=balance;

	}
	
	setBalance(balance){
	  this.balance=balance;
	}

	display(){
    console.log(`Account Name:${this.name}
Account Number: ${this.number}` )

	}
	withdraw(amount){
	  if(amount>this.balance)//test if the amount to withdraw is greater than the current balace
	    return `In-sufficient Funds`
	   else this.balance-=amount;
	   return `Hi, your new Account Balance is ${this.balance}`
	}
	deposit(amount){
	  return this.balance+=amount;
	}
}

//the RegularAccount class that follows inherits properties and methods from the super class BankAccount
class RegularAccount extends BankAccount{
  constructor(accName, accNum, balance=0){
    super(accName,accNum,balance);
  }
  setBalance(amount){
    if (amount>200000)
      return `Savings Account Balance limit Exceeded, Try a premium account`
    else
       this.balance=amount
     return `Regular Account Balance is set to ${this.balance=amount} Naira;`
  }
  
}
