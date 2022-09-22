import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }
  openDropDown() {
    this.el.nativeElement.querySelector('.dropdown').style.width = "250px";
    this.el.nativeElement.querySelector('.dropdown').style.height = "100vh";
    this.el.nativeElement.querySelector('.dropdown').style.overflow = "visible";
    this.el.nativeElement.querySelector('.dropdown').style.transition = "height 0.8s";
  }
  closeDropDown() {
    this.el.nativeElement.querySelector('.dropdown').style.width = "0";
    this.el.nativeElement.querySelector('.dropdown').style.width = "0";
    this.el.nativeElement.querySelector('.dropdown').style.overflow = "hidden";
    this.el.nativeElement.querySelector('.dropdown').style.transition = "height 0.8s";
  }

}
