import { TestBed, async } from '@angular/core/testing';

import { Truck } from './Truck';

describe('Truck creation test suite', () => {
  let truck;

  beforeEach(async(()=>{
    truck = new Truck('DJAD434');
  }))

  //check that there is a cost being generated on object create
  it('should return a number for cost', async(() => {
    let truckCost = truck.getCost();

    //printing the truck cost because it could either be 10 or 12
    console.log(truckCost);
    expect(typeof(truckCost)).toBe('number');
  }));

  //test to see if the license plate is of type string
  it('should have a string for a license plate', async(() => {
    expect(typeof(truck.getLicensePlate())).toEqual('string');
  }));

  //test for illegal car
  it('should be an illegal truck', async(() => {
    truck = new Truck();
    expect(truck.getLicensePlate()).toEqual('1111111');
  }));
});
