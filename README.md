# Linuxacademy

# Project Setup(in this order) and run tests

Disclaimer: @src/app/entities/TestRunner.spec.ts is the largest and most practical to the problem from a testing perspective. The other test(.spec) files are fair examples and are mentioned earlier in this readme.

Get Angular Cli: npm install -g @angular/cli

Install Local Packages: npm install

Run local server: ng serve

Run jasmine/karma tests: ng test

# Background

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

My Hosted example [here](http://thad_linuxacademy.surge.sh/)

The visual example is nice if you would like to adjust the transaction cache and see the effects real-time

# Code write up
## General Classes

Abstract Parent Class: Vehicle @src/app/entities/Vehicle.ts

Child Classes: Car and Trunk both extended from Vehicle and implement their own strategies for determines the cost of a car wash

Car: @src/app/entities/Car.ts &
Truck: @src/app/entities/Truck.ts

**Car and Truck are tested: 

@src/app/entities/Car.spec.ts @src/app/entities/Truck.spec.ts

## Factory

Vehicle factory, @src/app/factories/Vehicle.factory.ts, is used to produce vehicle objects based on inputs. Also, it can choose to return null when malformed inputs are presented.

## Psuedocode for producing objects
```
for(0 - N)
  createrRandomLicensePlate()
  if(licensePlate exists) //via Hashmap as lookup table (constant time) in @src/app/data_structures/LicensePlateTracker.ts
    set discount flag to true
  create either car or truck, reject trucks with bed downs, increase cost to trucks with mud, and pass discount flag
  add transaction to queue and alert others //via Queue in @src/app/data_structures/TransactionTracker.ts
```

## What is demo service? 

Just a refactored edition of my created 10 vehicles test. It was created to program the mini visual site without cluttering the component.
