import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  list: any[] = [];
  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
  }

  removeTask(id:any){
    // console.log(id);
    this.list = this.list.filter(item => item.id !== id)
  }
}
