import * as Rx from 'rxjs';

// Class: TransactionTracker(TTracker)
// Purpose: Represents a Queue like cache for transaction history. NgRX store seemed inappropriate for a smaller scale problem, so Rx Subject 
// is used to report on our Queue's contents
// Roles: track all trasactions of a given size, and report to the rest of the program on its size
// Contains: 
// a queue as a history of transactions in the car wash
// a subject as a way to relay that information is ready to the rest of the program
// Transaction size as a way to truncate transaction history
export class TTracker{
  private _queue = [];
  private _subject =  new Rx.Subject();
  private _maxSize = 20;

  constructor(){
    
  }

  public addVehicle(vehicle:any):void{
    //If there's no vehicle, do nothing
    if(!vehicle) return;

    //If the queue is full, remove oldest transaction
    if(this._queue.length == this._maxSize){
      this._queue.pop();
    }

    //append date
    vehicle['date'] = new Date();

    //push newest element on the front of the queue
    this._queue.unshift(vehicle);

    //alert all subscribers
    this._subject.next(this._queue);
  }

  //returns a instance of the subject
  public getSubject(){
    return this._subject;
  }

  public getCurrentQueue(){
    return this._queue.length;
  }

  //allows the users to adjust the trasaction history size.
  public adjustTransactionSize(newLength:number){
    //if the current array is bigger than the new size, then resize the current array
    if(this._queue.length >= newLength){
      this._queue.splice(newLength-1, this._queue.length-1);
    }
    this._maxSize = newLength;
    this._subject.next(this._queue);
  }
}