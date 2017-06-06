import { Vehicle } from './vehicle';

// Class: Truck
// Extends: extends from abstract class 'Vehicle'
// Purpose: Represent a truck Object in the world of a car wash.
// Roles: Exists, generates a bill that the customer would've paid for passing said car through car wash, 
// and sets a license plate # in its instance, also can adjust its own cost formula based on conditions such as mud
// Contains: 
// base cost: a templated cost representation
// cost: actual cost. Can change if the truck, in that moment in time of its creation, is a repeat visitor to the car wash
// license plate #: license plate #
export class Truck extends Vehicle{
  private _hasMud:boolean;

  constructor(licensePlate?, duplicate?:boolean, hasMud?:boolean){
    super(licensePlate);
    this.setBaseCost(10);
    //if it's a repeat visitor, apply 50% discount
    if(duplicate)
      this.setBaseCost(this.getBaseCost() / 2.0);
    //hasMud override
    if(hasMud)
      this._hasMud = hasMud;
    else
      this.hasMud();
    this.generateCost();
  }

  //method: hasMud
  //Purpose: if no hasMud has been specified, then this is used to generate
  //a random decision detailing if that truck has or does not have mud on it
  private hasMud(){
    this._hasMud = Boolean(Math.round(Math.random() * (1 - 0)) + 0);
  }

  //Hold's logic to determine the internal cost of the car.
  //if the truck has mud, the price is increased by 2$
  public generateCost(){
    if(this._hasMud)
      this.setCost(this.getBaseCost() + 2);
    else
      this.setCost(this.getBaseCost());
  }
  
}