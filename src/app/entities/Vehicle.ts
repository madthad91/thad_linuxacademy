//Class: Vehicle
//Contains:
//license plate value, base cost for templated cost, and actual cost
//accessors are used to manage these values
export abstract class Vehicle{
  private _licensePlate:string;
  private _cost:number;
  private _baseCost:number;

  constructor(licensePlate){
    //last line of defense. iI this example, code should not have made it this far without 
    //checking that the car was not the owner's, but this code acts as the last line of defense
    //and will assign 1111111 if the license plate was never passed or has a strange length.
    if(licensePlate && licensePlate.length == 7)
      this._licensePlate = licensePlate;
    else
      this._licensePlate = '1111111';
  }

  public getCost(){
    return this._cost;
  }

  public setCost(cost:number){
    this._cost = cost;
  }

  public getBaseCost(){
    return this._baseCost;
  }

  public setBaseCost(_baseCost:number){
    this._baseCost = _baseCost;
  }

  public getLicensePlate():string{
    return this._licensePlate;
  }

  //abstract method to determine what the cost of 
  //the car wash (without preferences) will be.
  abstract generateCost():void;
}