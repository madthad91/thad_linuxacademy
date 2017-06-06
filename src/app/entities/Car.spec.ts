import { TestBed, async } from '@angular/core/testing';

import { Car } from './Car';

describe('Car creation test suite', () => {
  let car;

  beforeEach(async(()=>{
    car = new Car('DJAD434');
  }))

  //check the default cost of a car
  it('should return 5 for cost', async(() => {
    expect(car.getCost()).toBe(5);
  }));

  //test to see if the license plate is of type string
  it('should have a string for a license plate', async(() => {
    expect(typeof(car.getLicensePlate())).toEqual('string');
  }));
});
