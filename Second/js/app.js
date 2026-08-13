const car = new Car("Toyota", "Camry", "Blue", 50, "Sedan", "Gasoline", "Available");
const bike = new Bike("Yamaha", "R15", "Red", 30, "Sport", "Petrol", "Available");
const van = new Van("Nissan", "NV200", "White", 40, "Cargo", "Diesel", "Available",7);
 
console.log("car price "+car.calculatePrice(5));
console.log("car details "+car.displayDetails());
console.log("car status "+car.statusDetails());
 
console.log("bike price "+bike.calculatePrice(3));
console.log("bike details "+bike.displayDetails());
console.log("bike status "+bike.statusDetails());
console.log("van price "+van.calculatePrice(7));
console.log("van details "+van.displayDetails());
console.log("van status "+van.statusDetails());
 
const car2 = new Car("Honda", "Civic", "Black", 60, "Sedan", "Gasoline", "Available");
console.log("car2 price "+car2.calculatePrice(4));
console.log("car2 details "+car2.displayDetails());
console.log("car2 status "+car2.statusDetails());
 
const bike2 = new Bike("Suzuki", "GSX-R1000", "Blue", 80, "Sport", "Petrol", "Available");
console.log("bike2 price "+bike2.calculatePrice(2));
console.log("bike2 details "+bike2.displayDetails());
console.log("bike2 status "+bike2.statusDetails());
 
const van2 = new Van("Ford", "Transit", "Silver", 70, "Cargo", "Diesel", "Available",7);  
console.log("van2 price "+van2.calculatePrice(6));
console.log("van2 details "+van2.displayDetails());
console.log("van2 status "+van2.statusDetails());
 
 
const car3 = new Car("BMW", "X5", "White", 100, "SUV", "Diesel", "Available");
console.log("car3 price "+car3.calculatePrice(3));
console.log("car3 details "+car3.displayDetails());
console.log("car3 status "+car3.statusDetails());
 
const bike3 = new Bike("Kawasaki", "Ninja ZX-10R", "Green", 90, "Sport", "Petrol", "Available");
console.log("bike3 price "+bike3.calculatePrice(5));
console.log("bike3 details "+bike3.displayDetails());
console.log("bike3 status "+bike3.statusDetails());
 
const van3 = new Van("Mercedes-Benz", "Sprinter", "Black", 80, "Cargo", "Diesel", "Rented",7);
console.log("van3 price "+van3.calculatePrice(4));
console.log("van3 details "+van3.displayDetails());
console.log("van3 status "+van3.statusDetails());
 
 
const car4 = new Car("Audi", "A6", "Silver", 90, "Sedan", "Gasoline", "Rented");
console.log("car4 price "+car4.calculatePrice(2));
console.log("car4 details "+car4.displayDetails());
console.log("car4 status "+car4.statusDetails());
 
const bike4 = new Bike("Ducati", "Panigale V4", "Red", 120, "Sport", "Petrol", "Rented");
console.log("bike4 price "+bike4.calculatePrice(3));
console.log("bike4 details "+bike4.displayDetails());
console.log("bike4 status "+bike4.statusDetails());
 
const van4 = new Van("Volkswagen", "Transporter", "Blue", 60, "Cargo", "Diesel", "Rented");
console.log("van4 price "+van4.calculatePrice(5));
console.log("van4 details "+van4.displayDetails());
console.log("van4 status "+van4.statusDetails());