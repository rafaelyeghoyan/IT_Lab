import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morecoursabout',
  templateUrl: './morecoursabout.component.html',
  styleUrls: ['./morecoursabout.component.css']
})
export class MorecoursaboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
