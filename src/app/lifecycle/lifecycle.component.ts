import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges {
  @Input() simpleText: string;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    // tslint:disable-next-line:forin
    for (const propertyName in changes) {
      const change = changes[propertyName];
      // console.log(change);
      const previous = JSON.stringify(change.previousValue);
      const current = JSON.stringify(change.currentValue);
      // console.log(propertyName + ' , previuos : ' + previous + ' , current : ' + current);
    }
  }

}
