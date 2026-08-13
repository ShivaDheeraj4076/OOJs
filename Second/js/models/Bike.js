class Bike extends Vehicle{
    constructor(name,model,color,price,Type,fuelType,status)
  {
    super(name,model,color,price,Type,status);
    this.fuelType=fuelType;

  }
// hello
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
    //add this to main


  }
  di()
  {
    return hi;
  }
}