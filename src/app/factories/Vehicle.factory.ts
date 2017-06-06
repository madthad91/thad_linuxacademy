import { Vehicle } from '../entities/Vehicle';
import { Car } from '../entities/Car';
import { Truck } from '../entities/Truck';

export class VehicleFactory{  
      
   //use getVehicle method to get object of type Plan   
    public static getVehicle(planType:string, licensePlate:string, duplicate?:boolean, hasMud?:boolean, bedDown?:boolean):Vehicle{  
        if(planType == null){  
          return null;  
        }  
        //If the license plate equals 1111111, the vehicle is stolen and does not get a
        //car wash.
        if(licensePlate === '1111111'){
          return null;
        }
        //If there's a truck with its bed down, we reject it.
        if(planType === 'truck' && bedDown && bedDown === true){
          return null;
        }

        switch(planType.toLowerCase()) {  
              case 'car':
                return new Car(licensePlate, duplicate);
              case 'truck':
                return new Truck(licensePlate, duplicate, hasMud);
            }   
        
  return null;  
   } //end of getVehicle class.  
}