import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent  implements OnInit {

  @Output() expandButtonEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  public isExpanded = false;

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {}

 
  handleItemToggle() {
    this.zone.run(() => {
      this.isExpanded = !this.isExpanded;
      console.log('Expanded:: ', this.isExpanded )

      this.expandButtonEventEmitter.emit({
        isExpanded: this.isExpanded,
      });
    });
  }

}
