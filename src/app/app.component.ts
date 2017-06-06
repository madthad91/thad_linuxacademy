import { Component } from '@angular/core';

import { DemoService } from './services/demo.service';
import { VehicleFactory } from './factories/Vehicle.factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DemoService]
})
export class AppComponent {
  title = 'my solution!';
  private tTracker;
  private data = [];
  private lpNumber;
  private licensePlateTracker;
  private transactionCount = 20;

  constructor(private testRunner: DemoService){
    this.tTracker = testRunner.getTTracker();
      this.tTracker.getSubject().subscribe(
         (x)=>{
            this.data = x;
        });
      testRunner.generateDummyData();
      
  }

  public generateVehicle(vehicleType){
    this.licensePlateTracker = this.testRunner.getLicensePlateTracker();
    console.log(this.licensePlateTracker)
    let hasVisited = this.licensePlateTracker.hasVisited(this.lpNumber);

        //if the car of a duplicate license plate hasn't returned, then store its license plate
        if(!hasVisited)
          this.licensePlateTracker.addLicensePlate(this.lpNumber);

        
        let temp_vehicle = VehicleFactory.getVehicle(vehicleType, this.lpNumber, hasVisited);
        this.tTracker.addVehicle(temp_vehicle);
  }

  public updateTransactionSize(evt){
    if(evt.target.value){
      this.transactionCount = evt.target.value;
      this.tTracker.adjustTransactionSize(this.transactionCount);
    }
  }
}
