import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  user:any
  constructor(private users:UserdataService) {
    this.user = users.users();
   }

  // To accept data from parent component we have to import input decoratore
  @Input() item:any

  //send data to child to parent component 
  @Output() updateDataEvent = new EventEmitter<string>()

  ngOnInit(): void {
  }

}
