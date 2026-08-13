class Bike extends Vehicle{
    constructor(name,model,color,price,Type,fuelType,status)
  {
    super(name,model,color,price,Type,status);
    this.fuelType=fuelType;

  }
<<<<<<< HEAD
//hi
//hello
=======
// hello
//hi
>>>>>>> main
  calculatePrice(days)
  {
    this.totalprice=super.calculatePrice(days);
    return this.totalprice;
  }
  displayDetails()
  {
    return `${super.displayDetails()},Fuel Type:${this.fuelType}`;
  }

  statusDeatils()
  {
    return `Status:${this.status}`;
  }
}