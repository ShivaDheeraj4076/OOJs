class Vehicle {
    constructor(name,model,color,price,Type,status)
    {
        this.name=name;
        this.model=model;
        this.color=color;
        this.price=price;
        this.Type=Type;
        this.status=status;
    }
    calculatePrice(days)
    {
        return this.price*days;
    }

    displayDetails()
    {
        return `Name:${this.name},Model:${this.model}, Colour:${this.color},Price:${this.price},Type:${this.Type},Status:${this.status}`;
    }
    statusDetails()
    {
        if(this.status==="Available")
        {
            return `The vehicle ${this.name} is available for rent`;
        }
        else if(this.status==="Rented")
        {
            return `The vehicle ${this.name} is currently rented`;
        }
        else {
            return `Status:${this.status}`;
        }
    }
}