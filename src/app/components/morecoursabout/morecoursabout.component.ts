import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-morecoursabout',
  templateUrl: './morecoursabout.component.html',
  styleUrls: ['./morecoursabout.component.css']
})
export class MorecoursaboutComponent implements OnInit {

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }
  openDropDown() {
    this.el.nativeElement.querySelector('header .dropdown').style.width = "250px";
    this.el.nativeElement.querySelector('header .dropdown').style.height = "100vh";
    this.el.nativeElement.querySelector('header .dropdown').style.overflow = "visible";
    this.el.nativeElement.querySelector('header .dropdown').style.transition = "height 0.8s";
  }
  closeDropDown() {
    this.el.nativeElement.querySelector('header .dropdown').style.width = "0";
    this.el.nativeElement.querySelector('header .dropdown').style.width = "0";
    this.el.nativeElement.querySelector('header .dropdown').style.overflow = "hidden";
    this.el.nativeElement.querySelector('header .dropdown').style.transition = "height 0.8s";
  }

}
