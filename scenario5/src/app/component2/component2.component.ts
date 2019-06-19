import { Component, OnInit,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  public parentData="";
  @Output() public parentEvent=new EventEmitter();
  constructor() { }
 sendData()
 {
   this.parentEvent.emit(this.parentData);
 }
  ngOnInit() {
  }

}
