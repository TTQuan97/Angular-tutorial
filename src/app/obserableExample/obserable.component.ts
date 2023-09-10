import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-obserable',
  templateUrl: './obserable.component.html',
  styleUrls: ['./obserable.component.css']
})
export class ObserableComponent implements OnInit {

  //observers :A handler for receiving observable notifications
  observer: Observer<number> = {
    next: (x: number) => console.log("Observer got a next value:" + x),
    error: (err: Error) => console.log("Observer got an error:" + err),
    complete: () => console.log("Observer got a complete notification")
  }
  observer2: Observer<number> = {
    next: (x: number) => console.log("Observer2 got a next value:" + x),
    error: (err: Error) => console.log("Observer2 got an error:" + err),
    complete: () => console.log("Observer2 got a complete notification")
  }

  //param of constructor : an arrow function with a param is a Subscriber<T>
  myObserveable = new Observable<number>(
    //This function runs when subscribe() is called.
    //The subscriber function defines how to obtain 
    //or generate values or messages to be published.
    (param) => {
      param.next(1);
      param.next(2);
      param.next(3);
      param.next(4);
      param.next(5);
      param.complete();
    }
  );
  /*Each interface has a single hook method whose name is the interface name prefixed with 'ng'. 
  For example, the OnInit interface has a hook method named ngOnInit.
    Angular runs these hook methods in the following order :
  ngOnChanges->ngOnInit->ngDoCheck->v.v...*/
  ngOnInit(): void {
    //param of subscribe()method is either Observer Or arrow function
    //Observer is an object passed to the subscribe() method for an observable
    //The subscribe() call returns a 'Subscription' object that has an unsubscribe() method, 
    //which you call to stop receiving notifications.
    this.myObserveable.subscribe(this.observer);
    this.myObserveable.subscribe(this.observer2);

  }




}
