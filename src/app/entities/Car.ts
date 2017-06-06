import { Vehicle } from './vehicle';

// Class: Car
// Extends: extends from abstract class 'Vehicle'
// Purpose: Represent a car Object in the world of a car wash.
// Roles: Exists, generates a bill that the customer would've paid for passing said car through car wash, 
// and sets a license plate # in its instance
// Contains: 
// base cost: a templated cost representation
// cost: actual cost. Can change if the car, in that moment in time of its creation, is a repeat visitor to the car wash
// license plate #: license plate #
export class Car extends Vehicle{

  constructor(licensePlate?, duplicate?){
    //Call Vehicle's constructor to set the license plate # internally
    super(licensePlate);
    this.setBaseCost(5);

    //if it's a repeat visitor, apply 50% discount
    if(duplicate){
      this.setBaseCost(this.getBaseCost() / 2.0);
    }

    this.generateCost();
  }

  //Hold's logic to determine the internal cost of the car.
  //Has it's own method in cases of new requirements(such as the affect of mud on 
  //truck prices)
  public generateCost(){
    this.setCost(this.getBaseCost());
  }
  
}