import { Injectable } from '@angular/core';

import { Car } from '../entities/Car';
import { Truck } from '../entities/Truck';
import { VehicleFactory } from '../factories/Vehicle.factory';
import { LicensePlateTracker } from '../data_structures/LicensePlateTracker';
import { TTracker } from '../data_structures/TransactionTracker';
import {Subject} from 'RxJs';

@Injectable()
export class DemoService {
  private tTracker;
  private licensePlateTracker;
  constructor(){
    this.tTracker =  new TTracker();
  }
  
  public getTTracker():TTracker{
    return this.tTracker;
  }

  public getLicensePlateTracker():TTracker{
    return this.licensePlateTracker;
  }

  public generateDummyData(){
      this.licensePlateTracker = new LicensePlateTracker();
      let temp_vehicle;
      let temp_license_plate_number;
      let hasVisited;

    this.getTTracker().getSubject().subscribe(
        function (x) {
            console.log(x);
        });
      for(let i =0; i <10; i++){
        hasVisited = false;
        temp_license_plate_number = 'OICV12' + i;

        //first check if data is duplicate
        //if 5, force a duplicate
        if(i == 5)
          hasVisited = this.licensePlateTracker.hasVisited('OICV123');
        else
          hasVisited = this.licensePlateTracker.hasVisited(temp_license_plate_number);

        //if the car of a duplicate license plate hasn't returned, then store its license plate
        if(!hasVisited)
          this.licensePlateTracker.addLicensePlate(temp_license_plate_number);

        //generate random with one duplicate
        if(i %2 == 0){
          temp_vehicle = VehicleFactory.getVehicle('car', 'OICV12' + i, hasVisited);
        }
        else{
          temp_vehicle = VehicleFactory.getVehicle('truck', 'OICV12' + i, hasVisited);
        }

        this.tTracker.addVehicle(temp_vehicle);
  }
  }
}
