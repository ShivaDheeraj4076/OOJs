class Car  extends Vehicle
{
  constructor(name,model,color,price,Type,status,fuelType)
  {
    super(name,model,color,price,Type,status);
    this.fuelType=fuelType;
  }
  calculatePrice(days)
  {
    const totalprice=super.calculatePrice(days);
    return totalprice;
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