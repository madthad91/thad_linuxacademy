import { TestBed, async } from '@angular/core/testing';

import { Car } from './Car';
import { Truck } from './Truck';
import { VehicleFactory } from '../factories/Vehicle.factory';
import { LicensePlateTracker } from '../data_structures/LicensePlateTracker';
import { TTracker } from '../data_structures/TransactionTracker';

describe('Project runner test suite', () => {
  let car;
  let truck;

  beforeEach(async(()=>{
    car = new Car('IAMCARS');
    truck = new Truck('IRTRUCK');
  }))

  //test: create 10 vehicles. One is a duplicate truck and thus receives discount.
  it('should generate 10 vehicles ', async(() => {
      let licensePlateTracker = new LicensePlateTracker();
      let temp_vehicle;
      let temp_license_plate_number;
      let hasVisited;
      let tTracker = new TTracker();

    tTracker.getSubject().subscribe(
        function (x) {
            console.log(x);
        });
      for(let i =0; i <10; i++){
        hasVisited = false;
        temp_license_plate_number = 'OICV12' + i;

        //first check if data is duplicate
        //if 5, force a duplicate
        if(i == 5)
          hasVisited = licensePlateTracker.hasVisited('OICV123');
        else
          hasVisited = licensePlateTracker.hasVisited(temp_license_plate_number);

        //if the car of a duplicate license plate hasn't returned, then store its license plate
        if(!hasVisited)
          licensePlateTracker.addLicensePlate(temp_license_plate_number);

        //generate random with one duplicate
        if(i %2 == 0){
          temp_vehicle = VehicleFactory.getVehicle('car', 'OICV12' + i, hasVisited);
        }
        else{
          temp_vehicle = VehicleFactory.getVehicle('truck', 'OICV12' + i, hasVisited);
        }

        tTracker.addVehicle(temp_vehicle);
      }

    expect(tTracker.getCurrentQueue()).toBe(10);
  }));

  //test: attempt to add 5 illegal vehicles to the car wash.
  it('should recognize 5 illegal vehicles with license plate 1111111', async(() => {
    let tTracker = new TTracker();
      let temp_vehicle;
      for(let i =0; i <5; i++){
        

        //generate random with one duplicate
        if(i %2 == 0){
          temp_vehicle = VehicleFactory.getVehicle('car', '1111111');
        }
        else{
          temp_vehicle = VehicleFactory.getVehicle('truck', '1111111');
        }

        tTracker.addVehicle(temp_vehicle);
      }

    expect(tTracker.getCurrentQueue()).toBe(0);
  }));

   //test: attempt to add 3 trucks with their bed down.
  it('should recognize 3 illegal trucks with their bed down', async(() => {
    let tTracker = new TTracker();
      let temp_vehicle;
      for(let i =0; i <3; i++){
        temp_vehicle = VehicleFactory.getVehicle('truck', '111Z111', false, false, true);
        tTracker.addVehicle(temp_vehicle);
      }

    expect(tTracker.getCurrentQueue()).toBe(0);
  }));

  //test to see if the license plate is of type string
  it('should have a string for a license plate', async(() => {
    expect(typeof(car.getLicensePlate())).toEqual('string');
  }));
});
