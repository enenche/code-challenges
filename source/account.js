class BankAccount{
	constructor(accName,accNum,balance=0){//balance is initialized to 0 for newly created accounts
		this.name=accName;
		this.number=accNum;
		this.balance=balance;//A newly created account has a balance of 0

	}
	
	setBalance(balance){ //setBalance method takes in an argument and makes it the account balance ofa given object instance
	  this.balance=balance;
	}

	display(){
    console.log(`Account Name:${this.name}
Account Number: ${this.number}
Account Balance:${this.balance}`)

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
      return `Regular Account Balance limit Exceeded, Try a premium account`
    else
       this.balance=amount
     return `Regular Account Balance is set to ${this.balance=amount} Naira;`
  }
  
}

//this standardAccount class that follows inherits properties and methods from the super class BankAccount
class standardAccount extends BankAccount{
  constructor(accName, accNum, balance=0){
    super(accName,accNum,balance);
    this.minBalance=20000; //this account has a preset min balance 
  }
  setBalance(amount){
    if (amount<20000)
      return `Amount too low, try a regular account`;
    else
       this.balance=amount
     return `Regular Account Balance is set to ${this.balance=amount} Naira;`
  }
  	withdraw(amount){
	  if(amount>this.balance)//test if the amount to withdraw is greater than the current balace
	   		return `In-sufficient Funds`
	   		else if ( this.balance-=amount<this.minBalance)//withdrawals mus not exceed minimum balance
	    		return `sorry, you cant have less than ${this.minBalance} Naira for standard account`;
	     	else
	       		this.balance-=amount;
	       		return `Hi, your new Account Balance is ${this.balance}`
	}
  
}

