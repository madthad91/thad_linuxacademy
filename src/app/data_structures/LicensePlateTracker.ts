//simple lookup table to check if license plates have already visited the car wash
//license plates are the only way to determine, given the problem, that a car is unique
//we implement this lookup table as a hashmap, so that lookup time for larger sizes still operate in constant speed
export class LicensePlateTracker {
  private LicensePlateTracker;
  constructor(){
    this.LicensePlateTracker = {};
  }

  //determines if the car has visited the carwash before
  public hasVisited(licensePlateNumber:string):boolean{
    return this.LicensePlateTracker.hasOwnProperty(licensePlateNumber);
  }

  //adds new record to the hashmap
  public addLicensePlate(licensePlateNumber:string):void{
    this.LicensePlateTracker[licensePlateNumber] = 1;
  }

  //clears the hashmap
  public clear(){
    this.LicensePlateTracker = {};
  }
}