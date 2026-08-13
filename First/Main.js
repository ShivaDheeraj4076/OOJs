class Custosmer{
    constructor(name, age, address,accountNumber, accountType, balance, accountStatus)
    
        {
            this.name = name;
            this.age = age;
            this.address = address;
            this.accountNumber = accountNumber;
            this.accountType = accountType;
            this.balance = balance;
            this.accountStatus = accountStatus;
        }

        DisplayDetails(){
            console.log("Name: " + this.name);
            console.log("Age: " + this.age);
            console.log("Address: " + this.address);
            console.log("Account Number: " + this.accountNumber);
            console.log("Account Type: " + this.accountType);
            console.log("Balance: " + this.balance);
            console.log("Account Status: " + this.accountStatus);
        }

        AccountType()
        {
            if(this.accountType == "Saving")
            {
                console.log("This is a Saving Account");
            }
            else if(this.accountType == "Current")
            {
                console.log("This is a Current Account");
            }
        }

        InsertRates()
        {
            if(this.accountType == "Saving"){
                console.log("Insert Rating for saving account is 0.4")
            }
            else if(this.accountType == "Current"){
                console.log("Insertrate for current accont is 0.3")
            }
        }

        Withdraw(amount)
        {
            if(this.accountStatus == "Active")
            {
                if(amount <= this.balance)
                {
                    this.balance -= amount;
                    console.log("Withdrawal successful. New balance: " + this.balance);
                }
            }
        }

        Deposit(amount)
        {
            if(this.accountStatus == "Active")
            {
                this.balance += amount;
                console.log("Deposit successful. New balance: " + this.balance);
            }
        }

        Interestcal()
        {
            if(this.accountType=="Saving")
            {
                console.log("Intrest for the Savings Account: "+this.balance*0.4);
            }
            else if(this.accountType=="Current")
            {
                console.log("Intrest for the Current Accounts:  "+this.balance*0.3);
            }
        }



}


const customer1 = new Custosmer("John Doe", 30, "123 Main St", "123456789", "Saving", 1000, "Active");
customer1.DisplayDetails();
customer1.AccountType();
customer1.InsertRates();
customer1.Withdraw(200);
customer1.Deposit(500);
customer1.Interestcal();

console.log("--------------------\n");


const customer2=new Custosmer("shiva",21,"Hyderabad","6445678","Current",10000,"Active");
customer2.DisplayDetails();
customer2.AccountType();
customer2.InsertRates();
customer2.Withdraw(500);
customer2.Deposit(1000);
customer2.Interestcal();
