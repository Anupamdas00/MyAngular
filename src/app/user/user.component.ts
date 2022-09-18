import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
// rounting.............
  userid: string | null=null
  ngOnInit(): void {
    console.log("user Id is:",this.route.snapshot.paramMap.get('id'));
    this.userid = this.route.snapshot.paramMap.get("id")
  }

}
