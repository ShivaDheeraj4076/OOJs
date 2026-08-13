class Van extends Vehicle{
    constructor(name,model,color,price,Type,status,fuelType,seats)
  {
    super(name,model,color,price,Type,status);
    this.fuelType=fuelType;
    this.seats=seats;

  }

  calculatePrice(days)
  {
    this.totalprice=super.calculatePrice(days);
    return this.totalprice;
  }
  displayDetails()
  {
    return `${super.displayDetails()},Fuel Type:${this.fuelType},Seats :${this.seats}`;
  }
}